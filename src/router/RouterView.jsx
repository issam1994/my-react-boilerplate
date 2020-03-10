import React from 'react'
//views - pages
import Home from '../views/Home'
import Login from '../views/Login'
import Profile from '../views/Profile'
//router stuff
import { Switch } from 'react-router-dom';
import UserRoute from './config/UserRoute'
import GuestRoute from './config/GuestRoute'
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
                {routes.map(({ path, Component, forGuests }) => {
                    const MyRoute = forGuests ? GuestRoute : UserRoute
                    return (
                        <MyRoute key={path} exact path={path}>
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
                        </MyRoute>
                    )
                }
                )}
            </>
        </Switch>
    )
}

