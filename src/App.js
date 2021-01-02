//import pages
import AboutUs from './pages/AboutUs'
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from './pages/MovieDetail'
import Navigation from "./components/Navigation"
import GlobalStyle from './components/GlobalStyle'
// Router
import { Switch, Route, useLocation } from "react-router-dom"
//Animation
import {AnimatePresence} from "framer-motion";

function App() {
    const location = useLocation();

    return (
        <div className="App">
            <GlobalStyle />
            <Navigation />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <AboutUs />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                    <Route path="/work" exact>
                        <OurWork />
                    </Route>
                    <Route path="/work/:id">
                        <MovieDetail />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
