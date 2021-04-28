import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
// import About from './Components/About';



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/about' component={About} /> */}

          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </Router>
      {/* <Navbar />
      <Home />
      <Footer /> */}


    </div>
  );
}

export default App;
