import React from 'react'
import './MainDashBoard.scss';
import { Icon, InlineIcon } from '@iconify/react';
import chevronLeft from '@iconify-icons/bi/chevron-left';
import chevronRight from '@iconify-icons/bi/chevron-right';

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
        <div className="mg-top">
            <div className="row">
                <div className="col-lg-12 col-xl-6 mg-top">
                 
                </div>
                <div className="col-lg-12 col-xl-6 mg-top">
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
                </div>
            </div>
        </div>
        </>
    )
}
const Row2 = () => {
    return (
        <>
        <div className="mg-top">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 mg-top">
                            <div className="card ">
                                <div className="card-body">
                                    <div className="card-title">Product Categories</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mg-top">
                            <div className="card ">
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
                        </div>
                        <div className="col-md-6 col-lg-4 mg-top">
                            <div className="card ">
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
                        </div>
                    </div>
        </div>
        </>
    )
}
const Row3 = () => {
    return(
        <>
        <div className="mg-top">
                <div className="row">
                    <div className="col-lg-12 col-xl-6 mg-top">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Calendar</div>
                                <div className="month-year-btns">
                                    <span className="month-year">January 2021</span>
                                    <div className="calendar-btns-group">
                                        <button className="today-btn">Today</button>
                                        <button className="nav-btn">
                                                <Icon icon={chevronLeft} />
                                            </button>
                                        <button className="nav-btn">
                                                <Icon icon={chevronRight}/>
                                            </button>
                                    </div>
                                </div>
                                    <table className="calendar">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <div>Sun</div>
                                            </th>
                                            <th>
                                                <div>Mon</div>
                                            </th>
                                            <th>
                                                <div>Tue</div>
                                            </th>
                                            <th>
                                                <div>Wed</div>
                                            </th>
                                            <th>
                                                <div>Thu</div>
                                            </th>
                                            <th>
                                                <div>Fri</div>
                                            </th>
                                            <th className="border-right-none">
                                                <div>Sat</div>
                                            </th>
                                        </tr>
                                        <tr>
                                           <td>
                                               <div className="day faded-day">27</div>
                                            </td>
                                           <td>
                                               <div className="day faded-day">28</div>
                                            </td>
                                           <td>
                                               <div className="day faded-day">29</div>
                                            </td>
                                           <td>
                                               <div className="day faded-day">30</div>
                                            </td>
                                           <td>
                                               <div className="day faded-day">31</div>
                                            </td>
                                           <td>
                                               <div className="day">01</div>
                                            </td>
                                           <td className="border-right-none">
                                               <div className="day">02</div>
                                            </td>
                                        </tr>
                                        <tr>
                                           <td>
                                               <div className="day">03</div>
                                            </td>
                                           <td>
                                               <div className="day">04</div>
                                            </td>
                                           <td>
                                               <div className="day">05</div>
                                            </td>
                                           <td>
                                               <div className="day today">06</div>
                                           </td>
                                           <td>
                                               <div className="day">07</div>
                                           </td>
                                           <td>
                                               <div className="day">08</div>
                                           </td>
                                           <td className="border-right-none">
                                               <div className="day">09</div>
                                           </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="day">10</div>
                                            </td>
                                           <td>
                                               <div className="day">11</div>
                                           </td>
                                           <td>
                                               <div className="day">12</div>
                                           </td>
                                           <td>
                                               <div className="day">13</div>
                                           </td>
                                           <td>
                                               <div className="day">14</div>
                                           </td>
                                           <td>
                                               <div className="day">15</div>
                                           </td>
                                           <td className="border-right-none">
                                               <div className="day">16</div>
                                           </td>
                                        </tr>
                                        <tr>
                                          <td>
                                              <div className="day">17</div>
                                          </td>
                                           <td>
                                               <div className="day">18</div>
                                           </td>
                                           <td>
                                               <div className="day">19</div>
                                           </td>
                                           <td>
                                               <div className="day">20</div>
                                           </td>
                                           <td>
                                               <div className="day">21</div>
                                           </td>
                                           <td>
                                               <div className="day">22</div>
                                           </td>
                                           <td className="border-right-none">
                                               <div className="day">23</div>
                                           </td>
                                        </tr>
                                        <tr>
                                          <td>
                                              <div className="day">24</div>
                                          </td>
                                           <td>
                                               <div className="day">25</div>
                                           </td>
                                           <td>
                                               <div className="day">26</div>
                                           </td>
                                           <td>
                                               <div className="day">27</div>
                                           </td>
                                           <td>
                                               <div className="day">28</div>
                                           </td>
                                           <td>
                                               <div className="day">29</div>
                                           </td>
                                           <td className="border-right-none">
                                               <div className="day">30</div>
                                           </td>
                                        </tr>
                                        <tr>
                                            <td style={{borderBottom:'none'}}>
                                               <div className="day">31</div>
                                           </td>
                                          <td style={{borderBottom:'none'}}>
                                              <div className="day faded-day">01</div>
                                          </td>
                                           <td style={{borderBottom:'none'}}>
                                               <div className="day faded-day">02</div>
                                           </td>
                                           <td style={{borderBottom:'none'}}>
                                               <div className="day faded-day">03</div>
                                           </td>
                                           <td style={{borderBottom:'none'}}>
                                               <div className="day faded-day">04</div>
                                           </td>
                                           <td style={{borderBottom:'none'}}>
                                               <div className="day faded-day">05</div>
                                           </td>
                                           <td className="border-right-none" style={{borderBottom:'none'}}>
                                               <div className="day faded-day">06</div>
                                           </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 mg-top">
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
                                                <Icon icon={chevronLeft}/>
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
                                                <Icon icon={chevronRight}/>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )   
}
const Row4 = () => {
    return (
        <>
        <div className="mg-top">
              <div className="row">
                <div className="col-lg-4 col-sm-12 mg-top">
                    <div className="card card-row-4">
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
                </div>
                <div className="col-lg-4 col-md-6 mg-top">
                    <div className="card banner card-row-4">
                        <div className="card-body">
                            <span className="brand-app">
                                Gogo Coffee
                            </span>
                            <div className="banner-main-text">
                                Magic is in the Details
                            </div>
                            <p className="small-white-text">Yes,it is indeed</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mg-top">
                     <div className="card card-row-4">
                        <div className="card-body">
                            <div className="card-title">Cakes</div>
                            <ul className="cakes-list">
                                <li>Marble Cake</li>
                                <li>Fruitcake</li>
                                <li>Chocolate Cake</li>
                                <li>Fat Rascal</li>
                                <li>Financier</li>
                                <li>Genoise</li>
                                <li>Gingerbread</li>
                                <li>Goose Breast</li>
                                <li>Parkin</li>
                                <li>Salzburger Nockerl</li>
                                <li>Soufflé</li>
                                <li>Merveilleux</li>
                                <li>Streuselkuchen</li>
                                <li>Tea Loaf</li>
                                <li>Napoleonshat</li>
                                <li>Merveilleux</li>
                                <li>Magdalena</li>
                                <li>Cremeschnitte</li>
                                <li>Cheesecake</li>
                                <li>Bebinca</li>
                                <li>Salzburger Nockerl</li>
                                <li>Soufflé</li>
                                <li>Merveilleux</li>
                                <li>Streuselkuchen</li>
                            </ul>
                        </div>
                    </div>
                </div>

              </div>
        </div>
        </>
    )
  
}
const Row5 = () => {
    return (
        <>
            <div className="mg-top">
                    <div className="row">
                            <div className="col-lg-6 col-xl-3 mg-top">
                                <div className="card ">
                                    <div className="card-body justify-content-align">
                                        <div className="inline-block-flt-left">
                                            Payment Status
                                        </div>
                                        <div className="inline-block-flt-left">
                                            <div className="circle-border" style={{background:"linear-gradient(273deg, rgb(111, 78, 55) 50%, transparent 50%), linear-gradient(-45deg, rgb(111, 78, 55) 50%, lightgray 50%)"}}>
                                                <div className="circle">
                                                    <p className="percentage-status">64%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-6 col-xl-3 mg-top">
                                 <div className="card ">
                                    <div className="card-body justify-content-align">
                                        <div className="inline-block-flt-left">
                                            Payment Done
                                        </div>
                                        <div className="inline-block-flt-left">
                                            <div className="circle-border" style={{background:"linear-gradient(270deg, rgb(111, 78, 55) 50%, transparent 50%), linear-gradient(18deg, rgb(111, 78, 55) 50%, lightgray 50%)"}}>
                                                <div className="circle">
                                                    <p className="percentage-status">75%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-6 col-xl-3 mg-top">
                                 <div className="card ">
                                    <div className="card-body justify-content-align">
                                        <div className="inline-block-flt-left ">
                                            Tasks Done
                                        </div>
                                        <div className="inline-block-flt-left">
                                            <div className="circle-border" style={{background:"linear-gradient(299deg, rgb(111, 78, 55) 50%, transparent 50%), linear-gradient(-88deg, rgb(111, 78, 55) 50%, lightgray 50%), linear-gradient(-88deg, lightgray 50%,transparent 50%)"}}>
                                                <div className="circle">
                                                    <p className="percentage-status">32%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-6 col-xl-3 mg-top">
                                 <div className="card ">
                                    <div className="card-body justify-content-align">
                                        <div className="inline-block-flt-left ">
                                            Work Progress
                                        </div>
                                        <div className="inline-block-flt-left">
                                            <div className="circle-border" style={{background:"linear-gradient(270deg, rgb(111, 78, 55) 50%, transparent 50%), linear-gradient(18deg, rgb(111, 78, 55) 50%, lightgray 50%)"}}>
                                                <div className="circle">
                                                    <p className="percentage-status">45%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>
        </>
    )
}
const Row6 = () => {
    return (
        <>
            <div className="mg-top">
              <div className="row">
                <div className="col-md-6 col-sm-12 mg-top">
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
                </div>
                <div className="col-md-6 col-sm-12 mg-top">
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
                </div>
              </div>
        </div>
        </>
    )
}

const Row7 = () => {
    return (
        <>
            <div className="mg-top">
                    <div className="row">
                              <div className="col-md-6 col-lg-12 col-xl-4 mg-top">
                                      <div className="row">
                                        <div className="col-lg-4 col-xl-12 mg-bottom">
                                                <div className="card notification-card">
                                                    <div className="card-body justify-content-align">
                                                        <div className="inline-block-flt-left ">
                                                            <div className="large-white-text">5 Files</div>
                                                            <div className="small-white-text">Pending for print</div>
                                                        </div>
                                                        <div className="inline-block-flt-left">
                                                            <div className="circle-wrap">
                                                                <div className="circle">
                                                                    <div className="mask full">
                                                                        <div className="fill"></div>
                                                                    </div>
                                                                    <div className="mask half">
                                                                        <div className="fill"></div>
                                                                    </div>
                                                                    <div className="inside-circle">
                                                                        5/12
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <div className="col-lg-4 col-xl-12 mg-bottom">
                                                <div className="card notification-card">
                                                    <div className="card-body justify-content-align">
                                                        <div className="inline-block-flt-left ">
                                                            <div className="large-white-text">4 Orders</div>
                                                            <div className="small-white-text">On approval process</div>
                                                        </div>
                                                        <div className="inline-block-flt-left">
                                                        <div className="circle-wrap">
                                                                <div className="circle">
                                                                    <div className="mask full">
                                                                        <div className="fill"></div>
                                                                    </div>
                                                                    <div className="mask half">
                                                                        <div className="fill"></div>
                                                                    </div>
                                                                    <div className="inside-circle">
                                                                    4/6
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-xl-12 mg-bottom">
                                                <div className="card notification-card">
                                                    <div className="card-body justify-content-align">
                                                        <div className="inline-block-flt-left ">
                                                            <div className="large-white-text">8 Alerts</div>
                                                            <div className="small-white-text">Waiting for notice</div>
                                                        </div>
                                                        <div className="inline-block-flt-left">
                                                            <div className="circle-wrap">
                                                                <div className="circle">
                                                                    <div className="mask full">
                                                                        <div className="fill"></div>
                                                                    </div>
                                                                    <div className="mask half">
                                                                        <div className="fill"></div>
                                                                    </div>
                                                                    <div className="inside-circle">
                                                                        8/10
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                      </div>
                            </div>
                               <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mg-top">
                                 <div className="card relative-card advanced-search-card">
                                    <div className="card-body advanced-search-body">
                                        <div className="advanced-search-title">Advanced Search</div>
                                       <form className="advanced-search-form">
                                        <div className="form-group">
                                            <label htmlFor="toppings">Toppings</label>
                                            <input type="toppings" className="input-form"  id="toppings" aria-describedby="toppings" placeholder="Select..."/>
                                            <div className="dropdown-list">
                                                <div className="dropdown-item">Chocolate</div>
                                                <div className="dropdown-item">Vanila</div>
                                                <div className="dropdown-item">Strawberry</div>
                                                <div className="dropdown-item">Caramel</div>
                                                <div className="dropdown-item">Cookies and Cream</div>
                                                <div className="dropdown-item">Peppermint</div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="type">Type</label>
                                            <input type="type" className="input-form" id="type" placeholder="Select..."/>
                                            <div className="dropdown-list">
                                                <div className="dropdown-item">Cake</div>
                                                <div className="dropdown-item">Cupcake</div>
                                                <div className="dropdown-item">Dessert</div>
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <label htmlFor="keyword">Keyword</label>
                                            <input type="keyword" className="input-form" id="keyword" placeholder="Keyword"/>
                                        </div>
                                         <div className="form-check custom-control">
                                            <input type="checkbox"  id="checkbox-input"/>
                                            <label className="form-check-label" htmlFor="checkbox">Check this custom checkbox</label>
                                        </div>
                                        <div className="btn-submit">
                                            <button type="submit" className="btn btn-primary">Seach</button>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-6 col-xl-4 mg-top">
                                <div className="row">
                                    <div className="col-6 mg-top">
                                        <div className="card">
                                            <div className="card-body  txt-align-center">
                                                <span className="value-total">$1,300</span>
                                                <div className="value-name">Total Orders-Sun</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mg-top">
                                          <div className="card">
                                            <div className="card-body  txt-align-center">
                                                <span className="value-total">$1,300</span>
                                                <div className="value-name">Total Orders-Sun</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mg-top">
                                          <div className="card">
                                            <div className="card-body  txt-align-center">
                                                <span className="value-total">$1,300</span>
                                                <div className="value-name">Total Orders-Sun</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mg-top">
                                          <div className="card">
                                            <div className="card-body  txt-align-center">
                                                <span className="value-total">$1,300</span>
                                                <div className="value-name">Total Orders-Sun</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
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
            <Row7/>
        </>
    )
}
export const MainDashBoard = () => {
    return (
        <>
        <section id="main-dashboard" className="grid-full">
            <div className="container-fluid">
           <MainTitle/>
           <MainContent/>
            </div>
        </section>
        </>
    )
}
