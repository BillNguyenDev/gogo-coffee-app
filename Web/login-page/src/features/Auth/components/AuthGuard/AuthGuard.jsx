import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { APP_ROUTES } from '../../../../constants/app-route';

const AuthGuard = (props) => {
    const { path, exact, component } = props;
    const loggedInAccount = useSelector((state) => state.account.current);
    const isLoggedIn = !!loggedInAccount.id;
    if (path === APP_ROUTES.LOGIN) {
        return !isLoggedIn ? (<Route path={path} exact={exact} component={component} />) :
            (<Redirect to={APP_ROUTES.HOME} />);
    }
    return isLoggedIn ? (<Route path={path} exact={exact} component={component} />) :
        (<Redirect to={APP_ROUTES.LOGIN} />);
}

AuthGuard.propTypes = {
    path: PropTypes.string,
    exact: PropTypes.bool
}

export default AuthGuard
