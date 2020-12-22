import React from 'react'
import Grid from '@material-ui/core/Grid';
import './NavBarComp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Switch from '@material-ui/core/Switch';

export const NavBarComp = () => {
const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
    return (
        <div>
            <header>
                <section id="top-menu" className="grid-full">
                    <Grid container
                        direction="row"
                        justify="space-around"
                        wrap="nowrap"
                        alignItems="center">
                           
                        <Grid item xl={4}>
                            <ul className="left-navbar">
                                <li>
                                    <button><FontAwesomeIcon icon={faBars} /></button>
                                </li>
                                <li>
                                    <input type="text" placeholder="Search"/>
                                    <label className="search-icon" htmlFor="">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </label>
                                </li>
                                <li>
                                    <button>ENG <FontAwesomeIcon icon={faCaretDown} /></button>
                                </li>
                                <li>
                                    <button>Buy</button>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xl={4}>
                                <span className="app-name">Gogo Coffee</span>
                        </Grid>
                        <Grid item xl={4} >
                            <ul className="right-navbar">
                                <li>
                                    <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
                                </li>
                                <li className="notification" style={{paddingTop:'8px'}}>
                                    <FontAwesomeIcon icon={faBell} className="noti-icon" />
                                    <div className="noti-quantities">
                                        3
                                    </div>
                                </li>
                                <li style={{paddingTop:'8px'}}>
                                    <button className="list-page">
                                        <FontAwesomeIcon icon={faList} />
                                    </button>
                                </li>
                                <li className="profile" style={{paddingTop:'4px'}}>
                                        <span className="account-name">hoanbao32@gmail.com</span>
                                        <span className="acc-img" >
                                            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="account"/>
                                        </span>
                                </li>
                            </ul>
                       
                        </Grid>
                    </Grid>
                </section>
            </header>
        </div>
    )
}
