import React from 'react'
import PropTypes from 'prop-types'
import { logout } from '../../../Auth/accountSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { unwrapResult } from "@reduxjs/toolkit";

const MainDashboard = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = async () => {
        const action = logout();
        const resultAction = await dispatch(action);
        unwrapResult(resultAction);
        history.push('/login');
    }
    return (
        <>
            <h1>Dashboard</h1>
            <button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </>
    )
}

MainDashboard.propTypes = {

}

export default MainDashboard
