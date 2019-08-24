import React, { Component } from 'react';
import './../css/app.css';
import CityDevelopments from './CityDevelopments';
import SunsetTracker from './SunsetTracker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import toaster from 'toasted-notes';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { username: null };
    }

    componentDidMount() {
        toaster.notify((<div className="notifyMe">Hi there</div>), {
            duration: 8000
        })
    }

    render() {
        const nav = (
            <div>
                <nav  className="nav">
                    <ul>
                        <li  className="nav-primary"><Link to={'/'} className="navLink">Projects</Link></li>
                        <li  className="nav-primary"><Link to={'/city'} className="navLink">City</Link></li>
                        <li  className="nav-primary"><Link to={'/sunset'} className="navLink">Sunset</Link></li>
                    </ul>
                </nav>
            </div> 
        )
        const { username } = this.state;
        return (
            <div className="container">
                <Router>
                    <div>
                        <Switch>
                            <Route path='/city' component={ CityDevelopments } />
                            <Route path='/sunset' component={ SunsetTracker } />
                        </Switch>
                    </div>
                </Router> 
            </div>
        );
    }
}
