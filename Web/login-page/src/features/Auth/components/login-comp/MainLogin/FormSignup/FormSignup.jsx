import React from 'react'
import PropTypes from 'prop-types'
import './FormSignup.scss';
const FormSignup = () => {
    return (
        <>
            <form className="RegisterForm">
                <div className="text-center pb-5">
                    <h2>Register Form</h2>
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
                            <input type="email" className="input" placeholder="email" />
                            <label htmlFor="">Email</label>
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
                <div className="form-group">
                    <div className="col-sm-12">
                        <div className="form-input">
                            <input type="password" className="input" placeholder="password" />
                            <label htmlFor="">Retype password</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <div className="form-input">
                            <input type="text" className="input" placeholder="phone" />
                            <label htmlFor="">Phone number</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <div className="form-input">
                            <input type="text" className="input" placeholder="address" />
                            <label htmlFor="">Address</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <div className="form-input">
                            <input type="text" className="input" placeholder="role" />
                            <label htmlFor="">Role</label>
                        </div>
                    </div>
                </div>
                <button
                    className="col-sm-12 btn btn-primary"
                    to="/dashboard"
                    type="submit"
                >
                    Register
        </button>{" "}
                <button className="col-sm-12 btn btn-primary" type="submit">
                    Already have an account ? Sign in
        </button>{" "}
            </form>
        </>
    );
};

FormSignup.propTypes = {

}

export default FormSignup
