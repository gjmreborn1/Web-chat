import React from "react";
import "./styles/AuthForms.css";
import { Redirect } from "react-router-dom";

const AuthForms = () => {
    if(localStorage.getItem("jwt") !== null) {
        return <Redirect to="/chat" />;
    }

    return (
        <div className="AuthForms">
            <div className="forms-container">
                <form className="form-register">

                </form>
                <form className="form-login">

                </form>
            </div>
        </div>
    )
};

export default AuthForms;
