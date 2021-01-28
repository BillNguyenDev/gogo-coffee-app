import React, { useState } from 'react';
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
            <form className="LoginForm" onSubmit={handleSubmit}>
                <div className="text-center pb-5">
                    <h2>Account Login</h2>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <div className="form-input">
                            <input type="text" className="input" placeholder="username" />
                            <label htmlFor="">User name</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <div className="form-input">
                            <input type="password" className="input" placeholder="password" />
                            <label htmlFor="">Password</label>
                        </div>
                    </div>
                </div>
                <div className="check-remember">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Remember Me</label>
                </div>
                <button className="col-sm-12 btn btn-primary" to="/dashboard" type="submit">Login to your Account</button>{' '}
                <button className="col-sm-12 btn btn-primary" type="submit">Sign up</button>{' '}
            </form>
        </>
    );
}

const MainLoginComp = () => {
    return (
        <>
            <div className="container main">
                <div className="row">
                    <div className="col-xl-6 col-md-12 title-container text-center">
                        <div className="welcome">
                            <h4>Welcome to</h4>
                        </div>
                        <div className="brand-name">
                            <h2>Gogo coffee</h2>
                        </div>
                        <div className="btn">
                            <button className="download">
                                Download Now !
                                </button>
                            <button className="about-features">
                                About Features
                                </button>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <FormLogin />
                    </div>
                </div>
            </div>
        </>
    );
}
export default MainLoginComp;