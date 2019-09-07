import React  from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/";
import HomePage from "./Pages/Home/";
import Footer from "./Components/Footer";
import PageNotFound from "./Pages/NotFound";

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
            <Route path={"/"} exact component={HomePage} />
            <Route component={PageNotFound} />
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
