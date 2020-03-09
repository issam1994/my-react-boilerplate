import React from 'react'
//views/pages
import Home from '../views/Home'
import Login from '../views/Login'
import Profile from '../views/Profile'
//router stuff
import { Switch, Route } from 'react-router-dom';
//
import {CSSTransition} from 'react-transition-group'

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/login', name: 'Login', Component: Login },
    { path: '/profile', name: 'Profile', Component: Profile },
]

export default function () {
    return (
        <Switch>
            <>
            {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames="slide"
                            unmountOnExit
                        >
                            <Component />
                        </CSSTransition>
                    )}
                </Route>
            ))}
            </>
        </Switch>
    )
}