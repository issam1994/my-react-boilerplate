import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo.svg'

const pages = [
    { path: '/', name: 'Home' },
    { path: '/profile', name: 'Profile' },
    { path: '/login', name: 'Login' },
]
export default function Nav() {
    const NavLinks = pages.map((p, i) => (
        <Link to={p.path} key={i} className="px-6 py-4 text-lg">{p.name}</Link>
    ))
    return (
        <div className="bg-gray-100 shadow">
            <div className="container mx-auto flex items-center justify-center">
                {/* logo */}
                <img className="w-10 h-10 rounded-full bg-gray-700 ml-4 mr-auto" src={Logo} alt="logo" />
                {/* end logo */}
                {NavLinks}
            </div>
        </div>
    )
}