import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'

export default function GuestRoute({ children, ...rest }) {
    const isAuthenticated = useStoreState(state => state.auth.isAuthenticated)
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