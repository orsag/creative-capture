//import pages
import AboutUs from './pages/AboutUs'
import Navigation from "./components/Navigation"
import GlobalStyle from './components/GlobalStyle'

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <Navigation />
        <AboutUs />
    </div>
  );
}

export default App;
