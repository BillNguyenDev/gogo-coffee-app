import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FooterLoginComp from '../FooterComp/footer-comp';
import './main-login-comp.scss';
const FormLogin = () => {
    const [account, setAccount] = useState({ username: '', password: '' });
    const [login, setLogin] = useState([]);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setAccount({ ...account, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (account.username && account.password) {
            let Account = { ...account };
            console.log(Account);
            setAccount({ username: '', password: '' });
            setLogin([Account]);
            // navigation.push('Details');

        }
    }

    return (
        <>
            <Form className="LoginForm" onSubmit={handleSubmit}>
                <div className="text-center pb-5">
                    <h2>Account Login</h2>
                </div>
                <FormGroup row>
                    <Col sm={12}>
                        <Input
                            type="username"
                            name="username"
                            id="exampleEmail"
                            value={account.username}
                            onChange={handleChange}
                            placeholder="User name" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={12}>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            value={account.password}
                            onChange={handleChange}
                            placeholder="Password" />
                    </Col>
                </FormGroup>
                <div className="check-remember">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Remember Me</label>
                </div>
                <Button sm={12} color="primary" to="/dashboard" type="submit">Login to your Account</Button>{' '}
                <Button sm={12} color="primary" type="submit">Sign up</Button>{' '}
            </Form>
        </>
    );
}

const MainLoginComp = () => {
    return (
        <div className="background">
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6 title">
                            <div className="text-center">
                                <h2 style={{ "opacity": "0.5" }}>Gogo coffee app</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <FormLogin />
                        </div>
                    </div>
                </div>
            </div>
            <FooterLoginComp />
        </div>
    );
}
export default MainLoginComp;