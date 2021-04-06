import { yupResolver } from '@hookform/resolvers/yup';
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useStore } from "react-redux";
import { useHistory } from 'react-router';
import * as yup from "yup";
import { login } from "../../../../accountSlice";
import "./FormLogin.scss";



const FormLogin = (props) => {
    const schema = yup.object().shape({
        email: yup.string().required("Please enter your email").email("Invalid email"),
        password: yup.string().required("Please enter your password").min(8, 'Please enter at least 8 characters'),
    });

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schema)
    });

    const { register, formState: { errors, isSubmitting }, } = form;
    let dispatch = useDispatch();
    const [message, setMessage] = useState((''));
    let history = useHistory();
    const handleSubmit = async (values) => {
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);
            setMessage('');
            history.push('/maindashboard');
            form.reset();
        } catch (error) {
            setMessage(
                <div className="alert alert-danger" role="alert">
                    {error.message}
                </div>
            )
        }
    }
    return (
        <>
            <form className="LoginForm" onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="text-center pb-4">
                    <h2>Account Login</h2>
                    {message}
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-input">
                                <Controller
                                    render={({ field }) =>
                                        <input
                                            {...register("email")}
                                            className="input"
                                            placeholder="Email"
                                            {...field}
                                            type="text"
                                        />}
                                    control={form.control}
                                    name="email"
                                />
                                <label htmlFor="">Email</label>
                                <p className="error ">{errors.email?.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-input">
                                <Controller
                                    render={({ field }) =>
                                        <input
                                            {...register("password")}
                                            className="input"
                                            placeholder="Password"
                                            {...field}
                                            type="password"
                                            autoComplete="off" />}
                                    control={form.control}
                                    name="password"
                                />
                                <label htmlFor="">Password</label>
                                <p className="error ">{errors.password?.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        value="checkbox" />
                    <label htmlFor="checkbox">Remember me</label>
                </div>
                <button
                    className="col-sm-12 btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                >
                    Login to your Account
                </button>
                <button className="col-sm-12 btn btn-primary">
                    Don't have an account ? Sign up
                </button>
            </form>
        </>
    );
};


export default FormLogin
