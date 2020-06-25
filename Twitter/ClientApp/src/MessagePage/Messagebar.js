import React, { Component } from 'react';
import './Messagebar.css';
import {Link} from "react-router-dom";
import logo from "../media/twitter_logo.png";
import logoHome from "../media/home.png";
import logoChat from "../media/envelope.png";
import logoProfile from "../media/pencil.png"

export class Messagebar extends Component {

    render() {
        return (
            <div className="messages">
                <div className="alert">
                    <div id="mess1">Вы не выбрали сообщение</div>
                    <div id="mess2">Нажмите на человека из списка или напишите новое сообщение</div>
                    <div id="mess3"> <Link to="/messages">Новое сообщение</Link></div>
                </div>
            </div>
        );
    }
}