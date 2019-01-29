import React, {Component} from 'react';
import Side from './Side/Side.js';
import ChatPage from './HomePages/ChatPage';
import LoginRegister from './Login-Register/Login';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {history} from '../Helper/History';

import connect from "react-redux/es/connect/connect";
import {SocketActions} from "../Redux/Actions/SocketActions";
import Register from "./Login-Register/Register";
import {ChatActions} from "../Redux/Actions/ChatActions";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('user')
            ? <Component {...props}  />
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
    )}/>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            websocket: '',
        };
    }
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route path="/login" component={LoginRegister}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" component={Side}/>
                    <PrivateRoute exact path='/' component={ChatPage}/>
                </div>
            </Router>
        );
    }
}

export default App;
