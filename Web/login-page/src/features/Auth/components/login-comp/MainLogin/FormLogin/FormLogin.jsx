import React from 'react'
import PropTypes from 'prop-types'
import "./FormLogin.scss";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


const FormLogin = (props) => {
    const schema = yup.object().shape({
        email: yup.string().required("Please enter your email").email("Invalid email"),
        password: yup.string().required("Please enter your password").min(8, 'Please enter at least 8 characters'),
    });
    const { onSubmit } = props;

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schema)
    });
    const { errors } = form;
    const handleSubmit = (values) => {
        if (onSubmit) {
            onSubmit(values)
        }
        form.reset();
        console.log(errors);
    }
    return (
        <>
            <form className="LoginForm" onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="text-center pb-5">
                    <h2>Account Login</h2>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <div className="form-input">
                            <Controller
                                render={({ field }) => <input className="input" placeholder="Email" {...field} name="email" type="text" />}
                                control={form.control}
                                name="email"
                            />
                            <label htmlFor="">Email</label>
                            {/* <p>{errors.email?.message}</p> */}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <div className="form-input">
                            <Controller
                                render={({ field }) => <input className="input" placeholder="Password" {...field} name="password" type="password" />}
                                control={form.control}
                                name="password"
                            />
                            <label htmlFor="">Password</label>
                            {/* <p>{errors.password?.message}</p> */}
                        </div>
                    </div>
                </div>
                <div className="check-remember">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Remember Me</label>
                </div>
                <button
                    className="col-sm-12 btn btn-primary"
                    type="submit"
                >
                    Login to your Account
                </button>
                <button className="col-sm-12 btn btn-primary" type="submit">
                    Don't have an accout ? Sign up
                </button>
            </form>
        </>
    );
};

FormLogin.propTypes = {
    onSubmit: PropTypes.func
}

export default FormLogin
