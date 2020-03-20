import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import SignUp from "./app/pages/auth/SignUp"
import Home from "./app/pages/auth/Home"
import Login from "./app/pages/auth/Login"

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
    )
}
export default App
