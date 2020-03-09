import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export default function Login() {
    const [currentTab, setCurrentTab] = useState('login')
    const LoginTabBody = (
        <div>
            <div className="px-4 py-2">
                <label htmlFor="email" className="block pb-1">Email</label>
                <input id="email" className="form-input w-full bg-gra" type="text" placeholder="Enter Email Address" />
            </div>
            <div className="px-4 py-2">
                <label htmlFor="password" className="block pb-1">Password</label>
                <input id="password" className="form-input w-full bg-gra" type="password" placeholder="Enter Password" />
            </div>
            <div className="px-4 py-2">
                <button class=" uppercase py-3 w-full text-lg text-white font-semibold bg-teal-600 rounded-lg shadow">
                    sign in
                </button>
            </div>
        </div>
    )
    const RegisterTabBody = (
        <div>
            <div className="px-4 py-2">
                <label htmlFor="email" className="block pb-1">Email</label>
                <input id="email" className="form-input w-full bg-gra" type="text" placeholder="Enter Email Address" />
            </div>
            <div className="px-4 py-2">
                <label htmlFor="password" className="block pb-1">Password</label>
                <input id="password" className="form-input w-full bg-gra" type="password" placeholder="Enter Password" />
            </div>
            <div className="px-4 py-2">
                <label htmlFor="password" className="block pb-1">Confirm Password</label>
                <input id="password" className="form-input w-full bg-gra" type="password" placeholder="Re-enter Password" />
            </div>
            <div className="px-4 py-2">
                <button class=" uppercase py-3 w-full text-lg text-white font-semibold bg-blue-600 rounded-lg shadow">
                    sign up
                </button>
            </div>
        </div>
    )
    const tabs = { login: LoginTabBody, register: RegisterTabBody };
    const disabledTabStyle = (tab) => tab !== currentTab ? { opacity: 0.5 } : {}
    return (
        <div className="">
            <div className="mx-auto max-w-xl p-2">
                {/* tabs */}
                <div className="flex uppercase">
                    <div onClick={() => setCurrentTab("login")} className=" cursor-pointer flex-1 mr-1 rounded-tr-lg px-4 py-3 bg-white" style={disabledTabStyle('login')}>login</div>
                    <div onClick={() => setCurrentTab("register")} className=" cursor-pointer flex-1 ml-1 rounded-tl-lg px-4 py-3 bg-white" style={disabledTabStyle('register')}>register</div>
                </div>
                {/* body  */}
                <div className="relative bg-white overflow-hidden">
                    <CSSTransition in={currentTab === 'login'} classNames='slide' unmountOnExit>
                        {tabs[currentTab]}
                    </CSSTransition>
                    <CSSTransition in={currentTab === 'register'} classNames='slide' unmountOnExit>
                        {tabs[currentTab]}
                    </CSSTransition>
                </div>
            </div>
        </div>
    )
}