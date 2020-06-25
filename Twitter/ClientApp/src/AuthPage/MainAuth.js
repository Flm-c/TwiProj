import React, { Component } from 'react';
import './MainAuth.css';
import logo from "../media/twitter_logo.png";
import {Link} from "react-router-dom";

export class MainAuth extends Component {
    render() {
        return (
            <div className="container-fluid biglogo">
                <div className="backIcon"><img className="iconlog" src={logo} /></div>
                <div className="row">
                    <div className="col-6">
                    </div>
                    <div className="col-6 authRightSide min-vh-100">
                        <div className="authLogPass inlb">Email</div>
                        <div className="authLogPass inlb">Пароль</div>
                        <div className="authIn inlb m-5">
                            <Link to="">Войти</Link>
                        </div>

                        <div className="qq">
                            <div>
                                <img className="authLogo" src={logo} />
                            </div>
                            <div id="authAbout">
                                Узнайте, что происходит в вашем Университете
                            </div>
                            <div id="authAbout2">
                                Присоединяйтесь к нам
                            </div>
                            <div id="regLink">
                                <Link to="/reg">Зарегистрироваться</Link>
                            </div>
                            <div id="authLink">
                                <Link to="/">Войти</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}