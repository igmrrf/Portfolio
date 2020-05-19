import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Info from "./components/info";
import Intro from "./components/intro";
import ContactForm from "./components/contactForm";
import Project from "./components/project";
import Footer from "./components/footer";
import "./assets/css/style.css";

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Intro} />
                <Route exact path='/contact' component={ContactForm} />
                <Route exact path='/about' component={Info} />
                <Route exact path='/projects' component={Project} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
