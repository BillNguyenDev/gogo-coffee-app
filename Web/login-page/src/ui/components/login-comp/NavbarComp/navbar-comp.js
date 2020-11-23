import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
} from 'reactstrap';
import './navbar-comp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
const NavBarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const logo = <img alt="logo" src="https://e7.pngegg.com/pngimages/161/115/png-clipart-brown-coffee-mug-logo-coffee-cup-cappuccino-cafe-hot-coffee-diagram-glass-hand.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <div>
                <Navbar className="updated-navbar" color="light" light expand="md">
                    <div className="logo">
                        <img src="https://e7.pngegg.com/pngimages/161/115/png-clipart-brown-coffee-mug-logo-coffee-cup-cappuccino-cafe-hot-coffee-diagram-glass-hand.png" alt="" />
                    </div>
                    <NavbarBrand href="/">Gogo Coffee</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink>Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <input id="search-input" type="text" placeholder="Search..." name="search" />
                            <span className="text-center">
                                <Button color="primary" type="submit"><FontAwesomeIcon icon={faSearch} /></Button>{' '}
                            </span>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </>
    )
}
export default NavBarComp