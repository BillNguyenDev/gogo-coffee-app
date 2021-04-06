import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, useRouteMatch } from 'react-router'
import MainDashboard from '../components/dashboard-comp/MainDashboard';

const DashboardPage = props => {
    const match = useRouteMatch();
    return (
        <>
            <Switch>
                <Route path={`${match.url}`} component={MainDashboard} />
            </Switch>
        </>
    )
}

DashboardPage.propTypes = {

}

export default DashboardPage
