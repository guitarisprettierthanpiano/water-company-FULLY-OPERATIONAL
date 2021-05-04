import * as React from 'react';
import { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';

import Home from './components/home';
import About from './components/about';
import Newsroom from './components/newsroom';
import Careers from './components/careers';
import Commitment from './components/commitment';

import Footer from './components/footer';


const App: React.FC = () => {
    const [newPage, setNewPage] = useState<string>('/');

    return(
    <HashRouter>
        <Header changePath={newPage => setNewPage(newPage)}/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/newsroom' component={Newsroom}/>
            <Route path='/careers' component={Careers}/>
            <Route path='/commitment' component={Commitment}/>
        </Switch>
        <Footer currentPath={newPage}/>
    </HashRouter>    
    );
};

export default App;