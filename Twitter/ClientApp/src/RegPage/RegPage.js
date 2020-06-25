import React, { Component } from 'react';
import './RegPage.css';
import icon from "../media/twitter_logo.png";
import logo from "../media/twitter_logo.png";
import {Link} from "react-router-dom";

export class RegPage extends Component{
    render() {
        return(
            <div className="paren">
                <div className="rectangle">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4 ico">
                                <img className="ic" src={logo} />
                            </div>
                            <div className="col-4"></div>
                            <div className="col-4 ">
                                <div className="bu">
                                    <Link to="">Зарегистрировать</Link>
                                </div>
                            </div>
                        </div>
                        <div id="acc">Создайте учетную запись</div>
                        <div className="accData">Имя</div>
                        <div className="accData">Адрес электронной почты</div>
                        <div className="accData">Пароль</div>
                    </div>

                    <div className="data">
                        <div className="smth"></div>
                        <div className="smth"></div>
                        <div className="smth"></div>
                    </div>

                </div>
            </div>
        );
    }
}