import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

const AuthGuard = (props) => {
    const { path, exact, component } = props;
    const loggedInAccount = useSelector((state) => state.account.current);
    const isLoggedIn = !!loggedInAccount.id;
    return isLoggedIn ? (<Route path={path} exact={exact} component={component} />) :
        (<Redirect to="/login" />);
}

AuthGuard.propTypes = {
    path: PropTypes.string,
    exact: PropTypes.bool
}

export default AuthGuard
