import React from 'react'
import { Link } from 'react-router-dom'
import {useStoreState, useStoreActions} from 'easy-peasy'
import Logo from '../logo.svg'

const pages = [
    { path: '/', name: 'Home', forGuests: false },
    { path: '/profile', name: 'Profile', forGuests: false },
    { path: '/login', name: 'Login', forGuests: true },
]
export default function Nav() {
    const isAuthenticated = useStoreState(state => state.auth.isAuthenticated)
    console.log("isAuthenticated: ", isAuthenticated)
    const logOut = useStoreActions(actions => actions.auth.destroyToken)
    const NavLinks = pages
    .filter(({forGuests}, i) => {
        if(isAuthenticated) {
            return forGuests === false
        } else {
            return forGuests === true
        }
    })
    .map(({path, name}, i) => (
        <Link to={path} key={i} className="px-6 py-4 text-lg">{name}</Link>
    ))
    const logoutButton = (
        <button onClick={logOut} className="bg-red-600 px-6 py-3">log out</button>
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