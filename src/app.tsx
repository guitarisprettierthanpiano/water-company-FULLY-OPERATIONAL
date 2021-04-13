import * as React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/home'
import About from './components/about'
import Header from './components/header';
import Footer from './components/footer'

function App() {
    return (
    <Router>

        <Header/>

        <Switch>
            <Route path='/about' component={About}/>
            <Route path='/' component={Home}/>
        </Switch>
        
        <Footer />

    </Router>    
    )
}

export default App;