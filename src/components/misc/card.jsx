import React from 'react'
import logo from '../../logo.svg'

export default function () {
    return (
        <div className="max-w-xl flex flex-wrap items-center justify-center p-4 shadow-lg bg-white rounded-lg m-2">
            <img src={logo} className="w-24 h-24 bg-gray-700 rounded-full shadow-lg mr-4" alt="logo" />
            <div className="text-center sm:text-left">
                <div className="text-xl font-semibold">React App Boilerplate</div>
                <div className="text-sm font-semibold text-gray-500">By Issam Ait Ouahmane</div>
            </div>
        </div>
    )
}