import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';


import { SIGFPE } from 'constants';
import Signup  from './Signup.js';


//var arrn = new Array();


class App extends React.Component {
    render() {
        return (
            <Signup />
        );
    }
}

export default App;