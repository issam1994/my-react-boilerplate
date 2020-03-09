import React from 'react'
// views/pages
import Home from '../views/Home'
import Login from '../views/Login'
import Profile from '../views/Profile'
//
import { Switch, Route } from 'react-router-dom';

export default function () {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
        </Switch>
    )
}