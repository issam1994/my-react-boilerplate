import React from 'react'
//views - pages
import Home from '../views/Home'
import Login from '../views/Login'
import Profile from '../views/Profile'
//router stuff
import { Switch, Route, Redirect } from 'react-router-dom';
//
import { CSSTransition } from 'react-transition-group'

const routes = [
    { path: '/', name: 'Home', Component: Home, forGuests: false },
    { path: '/login', name: 'Login', Component: Login, forGuests: true },
    { path: '/profile', name: 'Profile', Component: Profile, forGuests: false },
]

export default function () {
    return (
        <Switch>
            <>
                {routes.map(({ path, Component, forGuests }) =>
                    forGuests ?
                        (<GuestRoute key={path} exact path={path}>
                            {({ match }) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={200}
                                    classNames="slide"
                                    unmountOnExit
                                >
                                    <Component />
                                </CSSTransition>
                            )}
                        </GuestRoute>)
                        :
                        (<UserRoute key={path} exact path={path}>
                            {({ match }) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={200}
                                    classNames="slide"
                                    unmountOnExit
                                >
                                    <Component />
                                </CSSTransition>
                            )}
                        </UserRoute>)
                )}
            </>
        </Switch>
    )
}

function UserRoute({ children, ...rest }) {
    const isAuthenticated = true
    return (
        <Route
            {...rest}
        >
            {
                isAuthenticated === true ? children
                    : <Redirect to={{ pathname: '/login' }} />
            }
        </Route>
    )
}

function GuestRoute({ children, ...rest }) {
    const isAuthenticated = true
    return (
        <Route
            {...rest}
        >
            {
                isAuthenticated === false ? children
                    : <Redirect to={{ pathname: '/profile' }} />
            }
        </Route>
    )
}