import React, {Component} from "react";
import "./Auth.css"
import {Footer} from "./Footer";
import {MainAuth} from "./MainAuth";

export class Auth extends Component{
    render() {
        return (
            <>
                <MainAuth />
                <Footer />
            </>
        );
    }
}