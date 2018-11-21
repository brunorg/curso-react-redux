import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';

class PrivateRoute extends React.Component {
    render() {
        if (localStorage.getItem('TOKEN')) {
            return (
                <Route {...this.props} />
            )
        } else {
            return <Redirect to="/login" />
        }
    }
}

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute path="/" exact component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route component={Page404} />
        </Switch>
    )
}

export default Routes;