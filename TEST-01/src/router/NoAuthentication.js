import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../screens/login/Login'
import Register from '../screens/register/Register'

const NoAuthentication = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Login" component={Login} />
        <Route path='/register' component={Register}/>
    </Switch>
)

export default NoAuthentication

