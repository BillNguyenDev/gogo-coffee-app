import React from 'react'
import './MainDashBoard.scss';
import Grid from '@material-ui/core/Grid';
import { MDBIcon} from 'mdbreact';

const MainTitle = () => {
    return (
        <>
                    <div className="main-title">
                        <h1>Main Dashboard</h1>
                        <ul>
                            <li>Home</li>
                            <li> | </li>
                            <li>Dashboards</li>
                            <li> | </li>
                            <li>Default</li>
                        </ul>
                    </div>
        </>
    )
}

const Row1 = () => {
    return (
        <>
        <div className="row">
        <Grid  container
                direction="row"
                justify="space-between"
                spacing={2}>
                <Grid item xl={6} lg={6} md={12} sm={12}>
                 
                </Grid>
                <Grid item xl={6} lg={6}  md={12} sm={12}>
                   <div className="card">
                       <div className="card-body">
                       <div className="card-title">Recent Orders</div>
                       <ul className="order-list">
                           <li className="order">
                               <span className="order-img">
                                   <span className="status-order processed">Processed</span>
                                    <img src="https://www.caffesociety.co.uk/assets/recipe-images/cappuccino-small.jpg" alt=""/>
                               </span>
                               <div className="order-info">
                                   <h3>Capuchino</h3>
                                   <p>Capuchino is very delicous</p>
                                   <div className="order-date">12.09.2020</div>
                               </div>
                           </li>
                           <li className="order">
                               <span className="order-img">
                                   <span className="status-order on-hold">On hold</span>
                                    <img src="https://www.caffesociety.co.uk/assets/recipe-images/cappuccino-small.jpg" alt=""/>
                               </span>
                               <div className="order-info">
                                   <h3>Capuchino</h3>
                                   <p>Capuchino is very delicous</p>
                                   <div className="order-date">12.09.2020</div>
                               </div>
                           </li>
                           <li className="order">
                               <span className="order-img">
                                   <span className="status-order processed">Processed</span>
                                    <img src="https://www.caffesociety.co.uk/assets/recipe-images/cappuccino-small.jpg" alt=""/>
                               </span>
                               <div className="order-info">
                                   <h3>Capuchino</h3>
                                   <p>Capuchino is very delicous</p>
                                   <div className="order-date">12.09.2020</div>
                               </div>
                           </li>
                       </ul>
                       </div>
                   </div>
                </Grid>
            </Grid>
        </div>
        </>
    )
}
const Row2 = () => {
    return (
        <>
        <div className="row">
                <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="center" spacing={2}>
                <Grid item xl={4} lg={4} md={12} sm={12}>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Product Categories</div>
                        </div>
                    </div>
                </Grid>
                <Grid item xl={4} lg={4} md={12} sm={12}>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Logs</div>
                            <div className="dashboard-logs">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="log-id align-middle new-user-registration"></span>
                                                </td>
                                                <td>New user registration</td>
                                                <td className="text-right" >
                                                    <span className="time-log">14:12</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="log-id align-middle new-sale"></span>
                                                </td>
                                                <td>New sale: Soufflé</td>
                                                <td className="text-right">
                                                    <span className="time-log">14:12</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="log-id align-middle added"></span>
                                                </td>
                                                <td>14 products added</td>
                                                <td className="text-right">
                                                    <span className="time-log">14:12</span>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td>
                                                    <span className="log-id align-middle new-sale"></span>
                                                </td>
                                                <td>New sale: Napoleonshat</td>
                                                <td className="text-right">
                                                    <span className="time-log">12:44</span>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td>
                                                    <span className="log-id align-middle new-sale"></span>
                                                </td>
                                                <td>New sale: Cremeschnitte</td>
                                                <td className="text-right">
                                                    <span className="time-log">12:30</span>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td>
                                                    <span className="log-id align-middle new-sale"></span>
                                                </td>
                                                <td>New sale: Soufflé</td>
                                                <td className="text-right">
                                                    <span className="time-log">10:40</span>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td>
                                                    <span className="log-id align-middle added"></span>
                                                </td>
                                                <td>2 categories added</td>
                                                <td className="text-right">
                                                    <span className="time-log">10:20</span>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td>
                                                    <span className="log-id align-middle new-sale"></span>
                                                </td>
                                                <td>New sale: Chocolate Cake</td>
                                                <td className="text-right">
                                                    <span className="time-log">09:28</span>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td>
                                                    <span className="log-id align-middle new-sale"></span>
                                                </td>
                                                <td>New sale: Magdalena</td>
                                                <td className="text-right">
                                                    <span className="time-log">09:25</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xl={4} lg={4} md={12} sm={12}>
                    <div className="card card-width">
                        <div className="card-body">
                            <div className="card-title">Tickets</div>
                                <ul className="tickets-list">
                                    <li>
                                        <img className="ticket-creator-img" src="https://gogo-react.coloredstrategies.com/assets/img/profiles/l-1.jpg" alt=""/>
                                        <div className="ticket-creator">
                                            <span className="creator-name">Nguyen Hoan Bao</span>
                                            <span className="time-ticket-created">09.08.2018 - 12:45</span>
                                        </div>
                                    </li>
                                    <li>
                                         <img className="ticket-creator-img" src="https://gogo-react.coloredstrategies.com/assets/img/profiles/l-1.jpg" alt=""/>
                                        <div className="ticket-creator">
                                            <span className="creator-name">Nguyen Hoan Bao</span>
                                            <span className="time-ticket-created">09.08.2018 - 12:45</span>
                                        </div>
                                    </li>
                                    <li>
                                         <img className="ticket-creator-img" src="https://gogo-react.coloredstrategies.com/assets/img/profiles/l-1.jpg" alt=""/>
                                        <div className="ticket-creator">
                                            <span className="creator-name">Nguyen Hoan Bao</span>
                                            <span className="time-ticket-created">09.08.2018 - 12:45</span>
                                        </div>
                                    </li>
                                    <li>
                                         <img className="ticket-creator-img" src="https://gogo-react.coloredstrategies.com/assets/img/profiles/l-1.jpg" alt=""/>
                                        <div className="ticket-creator">
                                            <span className="creator-name">Nguyen Hoan Bao</span>
                                            <span className="time-ticket-created">09.08.2018 - 12:45</span>
                                        </div>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        </>
    )
}
const Row3 = () => {
    return(
        <>
        <div className="row">
            <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="center" spacing={2}>
                    <Grid item xl={6} lg={6} md={12}>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Calendar</div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xl={6} lg={6} md={12}>
                        <div className="h-100 card">
                            <div className="card-body">
                                <div className="card-title">Best Sellers</div>
                                <table className="best-sellers-list">
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <th>Sales</th>
                                            <th>Stock</th>
                                        </tr>
                                        <tr>
                                            <td>Marble Cake</td>
                                            <td>1647</td>
                                            <td>62</td>
                                        </tr>
                                        <tr>
                                            <td>Fat Rascal</td>
                                            <td>1240</td>
                                            <td>48</td>
                                        </tr>
                                        <tr>
                                            <td>Chocolate Cake</td>
                                            <td>1080</td>
                                            <td>57</td>
                                        </tr>
                                        <tr>
                                           <td>Goose Breast</td>
                                            <td>1014</td>
                                            <td>41</td>
                                        </tr>
                                        <tr>
                                           <td>Petit Gâteau</td>
                                            <td>985</td>
                                            <td>23</td>
                                        </tr>
                                        <tr>
                                           <td>Salzburger Nockerl</td>
                                            <td>962</td>
                                            <td>34</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="pagination">
                                    <ul className="pagination-list">
                                        <li className="disabled page-item">
                                            <button className="prev page-btn">
                                                <MDBIcon icon="chevron-left" />
                                            </button>
                                        </li>
                                        <li className="page-item">
                                            <button className="active page-btn">1</button>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-btn">2</button>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-btn">3</button>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-btn">4</button>
                                        </li>
                                        <li className="abled page-item">
                                            <button className="next page-btn">
                                                <MDBIcon icon="chevron-right" />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Grid>
            </Grid>

        </div>
        </>
    )   
}
const Row4 = () => {
    return (
        <>
        <div className="row">
          <Grid container
            direction="row"
            justify="space-between"
            alignItems="center" spacing={2}>
                <Grid item lg={6} sm={12}>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Profile Status</div>
                            <ul className="status-list">
                                <li>
                                    <div className="status-name">
                                        <p>
                                            Basic Information
                                        </p>
                                        <span className="float-right-text">
                                        66.6667%
                                    </span>
                                    </div>
                                    <div className="dark-grey">
                                        <div style={{width:'66.6667%'}} className="status-progress"></div>
                                    </div>
                                </li>
                                <li>
                                     <div className="status-name">
                                        <p>
                                            Portfolio
                                        </p>
                                        <span className="float-right-text">
                                        12.5%
                                    </span>
                                    </div>
                                     <div className="dark-grey">
                                        <div style={{width:'12.5%'}} className="status-progress"></div>
                                    </div>
                                </li>
                                <li>
                                     <div className="status-name">
                                        <p>
                                            Billing Details
                                        </p>
                                        <span className="float-right-text">
                                        33.3333%
                                    </span>
                                    </div>
                                     <div className="dark-grey">
                                        <div style={{width:'33.3333%'}} className="status-progress"></div>
                                    </div>
                                </li>
                                <li>
                                     <div className="status-name">
                                        <p>
                                            Interests
                                        </p>
                                        <span className="float-right-text">
                                       0%
                                    </span>
                                    </div>
                                     <div className="dark-grey">
                                        <div style={{width:'0%'}} className="status-progress"></div>
                                    </div>
                                </li>
                                <li>
                                     <div className="status-name">
                                        <p>
                                            Legal Documents
                                        </p>
                                        <span className="float-right-text">
                                        50%
                                    </span>
                                    </div>
                                     <div className="dark-grey">
                                        <div style={{width:'50%'}} className="status-progress"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={6} sm={12}>
                     <div className="card">
                        <div className="card-body">
                            <div className="card-title">Cakes</div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        </>
    )
  
}
const Row5 = () => {
    return (
        <>
            <div className="row">
                <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center" spacing={2}>
                            <Grid item lg={3} xl={3} md={6} sm={12}>
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="card-title">Payment Status</div>
                                    </div>
                                </div>
                            </Grid>
                             <Grid item lg={3} xl={3} md={6} sm={12}>
                                 <div className="card justify-content-center">
                                    <div className="card-body">
                                        <div className="card-title">Payment Done</div>
                                    </div>
                                </div>
                            </Grid>
                             <Grid item lg={3} xl={3} md={6} sm={12}>
                                 <div className="card justify-content-center">
                                    <div className="card-body">
                                        <div className="card-title">Tasks Done</div>
                                    </div>
                                </div>
                            </Grid>
                             <Grid item lg={3} xl={3} md={6} sm={12}>
                                 <div className="card justify-content-center">
                                    <div className="card-body">
                                        <div className="card-title">Work Progress</div>
                                    </div>
                                </div>
                            </Grid>
                </Grid>
            </div>
        </>
    )
}
const Row6 = () => {
    return (
        <>
            <div className="row">
          <Grid container
            direction="row"
            justify="space-between"
            alignItems="center" spacing={2}>
                <Grid item lg={6} sm={12}>
                    <div className="card">
                        <div className="card-body">
                            <div className="float-left">
                                <div className="card-title bottom-0">Website Visits</div>
                                <div className="short-description-text">Unique Visitors</div>
                            </div>
                            <div className="float-right">
                                <button className="first-outline-color">This week</button>
                                <ul className="week-dropdown">
                                        <li>Last week</li>
                                        <li>This month</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={6} sm={12}>
                     <div className="card">
                        <div className="card-body">
                            <div className="float-left">
                                <div className="card-title bottom-0">Conversion Rates</div>
                                <div className="short-description-text">Per Session</div>
                            </div>
                            <div className="float-right">
                                <button className="second-outline-color">This week</button>
                                <ul className="week-dropdown">
                                        <li>Last week</li>
                                        <li>This month</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        </>
    )
}
const MainContent = () => {
    return (
        <>  
            <Row1/>
            <Row2/>
            <Row3/>
            <Row4/>
            <Row5/>
            <Row6/>
        </>
    )
}
export const MainDashBoard = () => {
    return (
        <>
        <section id="main-dashboard" className="grid-full">
            <div className="container">
           <MainTitle/>
           <MainContent/>
            </div>
        </section>
        </>
    )
}
