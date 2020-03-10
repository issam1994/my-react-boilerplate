import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useStoreState} from 'easy-peasy'

export default function UserRoute({ children, ...rest }) {
    const isAuthenticated = useStoreState(state => state.auth.isAuthenticated)
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
