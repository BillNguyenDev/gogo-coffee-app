import React from 'react'
import './MainDashBoard.scss';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

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
interface Column {
  id: 'name' | 'sales' | 'stock' ;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'sales', label: 'Sales', minWidth: 100 },
  {
    id: 'stock',
    label: 'Stock',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  }
];

interface Data {
  name: string;
  sales: number;
  stock: number;
}

function createData(name: string, sales: number, stock: number): Data {
  return { name, sales, stock };
}

const rows = [
  createData('Bebinca', 574, 16),
  createData('Cheesecake', 887, 21),
  createData('Chocolate Cake', 1080, 57),
  createData('Cremeschnitte', 562, 9),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const  StickyHeadTable = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell 
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

const Row1 = () => {
    return (
        <>
        <div className="row">
        <Grid  container
                direction="row"
                justify="space-between"
                alignItems="center" spacing={4}>
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
                        alignItems="center" spacing={4}>
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
                                <div className="scrollbar-container">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="log-id align-middle border-color"></span>
                                                </td>
                                                <td>New user registiration</td>
                                                <td className="text-right" >
                                                    <span className="time-log">14:12</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="log-id align-middle border-color"></span>
                                                </td>
                                                <td>New sale: Soufflé</td>
                                                <td className="text-right">
                                                    <span className="time-log">14:12</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="log-id align-middle border-color"></span>
                                                </td>
                                                <td>14 products added</td>
                                                <td className="text-right">
                                                    <span className="time-log">14:12</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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
                    alignItems="center" spacing={4}>
                    <Grid item xl={6} lg={12}>
                        <div className="card">
                            <div className="card-body">
                                <h2>Calendar</h2>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xl={6} lg={12}>
                        <div className="card">
                            <div className="card-body">
                                <h2>Best Sellers</h2>
                                <StickyHeadTable/>
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
            alignItems="center" spacing={4}>
                <Grid item lg={6} sm={12}>
                    <div className="card">
                        <div className="card-body">
                            <h2>Profile Status</h2>
                            <ul className="status-list">
                                <li>
                                    Basic Information
                                    <div className="dark-grey">
                                        <div style={{width:'66.6667%'}} className="status-progress">66.6667%</div>
                                    </div>
                                </li>
                                <li>Portfolio
                                     <div className="dark-grey">
                                        <div style={{width:'12.5%'}} className="status-progress">12.5%</div>
                                    </div>
                                </li>
                                <li>Billing Details
                                     <div className="dark-grey">
                                        <div style={{width:'33.3333%'}} className="status-progress">33.3333%</div>
                                    </div>
                                </li>
                                <li>Interests
                                     <div className="dark-grey">
                                        <div style={{width:'0%'}} className="status-progress">0%</div>
                                    </div>
                                </li>
                                <li>Legal Documents
                                     <div className="dark-grey">
                                        <div style={{width:'50%'}} className="status-progress">50%</div>
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
                        justify="space-between"
                        alignItems="center" spacing={4}>
                            <Grid item lg={6} xl={3}>
                                <div className="card">
                                    <div className="card-body">
                                        <h2>Payment Status</h2>
                                    </div>
                                </div>
                            </Grid>
                             <Grid item lg={6} xl={3}>
                                 <div className="card">
                                    <div className="card-body">
                                        <h2>Payment Done</h2>
                                    </div>
                                </div>
                            </Grid>
                             <Grid item lg={6} xl={3}>
                                 <div className="card">
                                    <div className="card-body">
                                        <h2>Tasks Done</h2>
                                    </div>
                                </div>
                            </Grid>
                             <Grid item lg={6} xl={3}>
                                 <div className="card">
                                    <div className="card-body">
                                        <h2>Work Progress</h2>
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
