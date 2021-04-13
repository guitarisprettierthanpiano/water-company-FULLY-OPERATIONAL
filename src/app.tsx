import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header';

import Home from './components/home';
import About from './components/about';
import Newsroom from './components/newsroom';

import Footer from './components/footer'

function App() {
    return (
    <Router>

        <Header />

        <Switch>
            <Route exact path='/' 
                component={Home}/>
            <Route path='/about' 
                component={About}/>
            <Route path='/newsroom' 
                component={Newsroom}/>
        </Switch>

        <Footer />

    </Router>    
    );
};

export default App;