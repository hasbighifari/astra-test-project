import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../screens/Login/index'

const NoAuthentication = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Login" component={Login} />
    </Switch>
)

export default NoAuthentication