import React from 'react'
import './MainDashBoard.scss';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { MDBIcon} from 'mdbreact';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import { SideBarComp } from '../SideBarComp/SideBarComp';

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
// interface Column {
//   id: 'name' | 'sales' | 'stock' ;
//   label: string;
//   minWidth?: number;
//   align?: 'right';
//   format?: (value: number) => string;
// }

// const columns: Column[] = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'sales', label: 'Sales', minWidth: 100 },
//   {
//     id: 'stock',
//     label: 'Stock',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   }
// ];

// interface Data {
//   name: string;
//   sales: number;
//   stock: number;
// }

// function createData(name: string, sales: number, stock: number): Data {
//   return { name, sales, stock };
// }

// const rows = [
//   createData('Bebinca', 574, 16),
//   createData('Cheesecake', 887, 21),
//   createData('Chocolate Cake', 1080, 57),
//   createData('Cremeschnitte', 562, 9),
// ];

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//   },
//   container: {
//     maxHeight: 440,
//   },
// });

// const  StickyHeadTable = () => {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper className={classes.root}>
//       <TableContainer className={classes.container}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell 
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
//               return (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
//                   {columns.map((column) => {
//                     const value = row[column.id];
//                     return (
//                       <TableCell key={column.id} align={column.align}>
//                         {column.format && typeof value === 'number' ? column.format(value) : value}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 15]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onChangePage={handleChangePage}
//         onChangeRowsPerPage={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }

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
                       <h2>Recent Orders</h2>
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
                            <h2>Product Categories</h2>
                        </div>
                    </div>
                </Grid>
                <Grid item xl={4} lg={4} md={12} sm={12}>
                    <div className="card">
                        <div className="card-body">
                            <h2>Logs</h2>
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
                            <h2>Tickets</h2>
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
                                <h2>Calendar</h2>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xl={6} lg={6} md={12}>
                        <div className="h-100 card">
                            <div className="card-body">
                                <h2>Best Sellers</h2>
                                {/* <StickyHeadTable/> */}
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
                            <h2>Profile Status</h2>
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
                            <h2>Cakes</h2>
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
                                        <h2 className="card-title">Payment Status</h2>
                                        <div className="status-percentage">
                                            <span>64%</span>
                                            <div className="pie">
                                                <div className="left-side half-circle"></div>
                                                <div className="right-side half-circle"></div>
                                                <div className="shadow"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                             <Grid item lg={3} xl={3} md={6} sm={12}>
                                 <div className="card justify-content-center">
                                    <div className="card-body">
                                        <h2 className="card-title">Payment Done</h2>
                                    </div>
                                </div>
                            </Grid>
                             <Grid item lg={3} xl={3} md={6} sm={12}>
                                 <div className="card justify-content-center">
                                    <div className="card-body">
                                        <h2 className="card-title">Tasks Done</h2>
                                    </div>
                                </div>
                            </Grid>
                             <Grid item lg={3} xl={3} md={6} sm={12}>
                                 <div className="card justify-content-center">
                                    <div className="card-body">
                                        <h2 className="card-title">Work Progress</h2>
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
