import React from 'react'
import PropTypes from 'prop-types'
import './FormForgotPass.scss';
const FormSignup = () => {
    return (
        <>
            <form className="RegisterForm">
                <div className="text-center pb-5">
                    <h2>Forgotten Password</h2>
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
                            <input type="otp" className="input" placeholder="email" />
                            <label htmlFor="">OTP</label>
                        </div>
                    </div>
                </div>
                <button
                    className="col-sm-12 btn btn-primary"
                    type="submit"
                >
                    Send OTP code
        </button>{" "}
                <button className="col-sm-12 btn btn-primary" type="button">
                    Sign in
        </button>{" "}
            </form>
        </>
    );
};

FormSignup.propTypes = {

}

export default FormSignup
