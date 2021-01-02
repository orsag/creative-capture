//import pages
import AboutUs from './pages/AboutUs'
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from './pages/MovieDetail'
import Navigation from "./components/Navigation"
import GlobalStyle from './components/GlobalStyle'
// Router
import { Switch, Route } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Navigation />
            <Switch>
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
        </div>
    );
}

export default App;
