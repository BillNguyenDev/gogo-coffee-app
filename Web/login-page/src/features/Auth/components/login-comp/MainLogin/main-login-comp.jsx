import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../accountSlice";
import FormLogin from "./FormLogin/FormLogin";
import FormForgotPass from "./FormForgotPass/FormForgotPass";
import "./main-login-comp.scss";




const MainLoginComp = () => {

  let dispatch = useDispatch()
  // const handleSubmit = async (values) => {
  //   // try {
  //   const action = login(values);
  //   const resultAction = await dispatch(action);
  //   unwrapResult(resultAction)
  //   //   alert("Login successfully !")
  //   // } catch (error) {
  //   //   alert("Login failed !")
  //   //   console.log(error);
  //   // }
  // }
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
              <button className="download">Download Now !</button>
              <button className="about-features">About Features</button>
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            {/* <FormLogin onSubmit={handleSubmit} /> */}
            <FormLogin />
            {/* <FormForgotPass /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default MainLoginComp;
