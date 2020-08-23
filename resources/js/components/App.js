import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header'
import Home from './Home';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
    render () {

        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/gallery" component={ Gallery } />
                        <Route exact path="/about" component={ About } />
                        <Route exact path="/contact" component={ Contact } />
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
