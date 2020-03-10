import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import {useStoreState, useStoreActions} from 'easy-peasy'
import Logo from '../logo.svg'

const pages = [
    { path: '/', name: 'Home', forGuests: false },
    { path: '/profile', name: 'Profile', forGuests: false },
    { path: '/login', name: 'Login', forGuests: true },
]
function Nav({location}) {
    //store stuff
    const isAuthenticated = useStoreState(state => state.auth.isAuthenticated)
    const logOut = useStoreActions(actions => actions.auth.destroyToken)
    //active route style
    const activeRouteStyle = (path) => location.pathname === path ? {borderBottom: '4px solid teal'} : {borderBottom: '4px solid white'}
    //generating nav links
    const NavLinks = pages
    .filter(({forGuests}, i) => {
        if(isAuthenticated) {
            return forGuests === false
        } else {
            return forGuests === true
        }
    })
    .map(({path, name}, i) => (
        <Link style={activeRouteStyle(path)} to={path} key={i} className="px-6 py-4 text-lg">{name}</Link>
    ))
    //log out button
    const logoutButton = (
        <button onClick={logOut} className="bg-gray-300 text-blue-300 font-semibold px-6 py-2 rounded-lg">log out</button>
    )
    return (
        <div className="bg-gray-100 shadow">
            <div className="container mx-auto flex items-center justify-center">
                {/* logo */}
                <img className="w-10 h-10 rounded-full bg-gray-700 ml-4 mr-auto" src={Logo} alt="logo" />
                {/* end logo */}
                {NavLinks}
                {isAuthenticated && logoutButton}
            </div>
        </div>
    )
}

export default withRouter(Nav)