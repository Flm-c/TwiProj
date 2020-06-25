import React, { Component } from 'react';
import './Sidebar.css';
import {Link} from "react-router-dom";
import logo from "../media/twitter_logo.png";
import logoHome from "../media/home.png";
import logoChat from "../media/envelope.png";
import logoProfile from "../media/pencil.png"

export class Sidebar extends Component {

    render() {
        return (
            <>
                <div className="sidebar">
                    <div><img className="icon" src={logo} /></div>
                    <div className="linkk">
                        <div className="inline"><img className="logoHome" src={logoHome} width="28" height="30" /></div>
                        <div className="inline lower"><Link to="/">Главная</Link></div>
                    </div>
                    <div className="linkk">
                        <div className="inline"><img className="logoChat" src={logoChat} width="26" height="24" /></div>
                        <div className="inline"><Link to="/messages">Сообщения</Link></div>
                    </div>
                    <div className="linkk">
                        <div className="inline"><img className="logoProfile" src={logoProfile} width="31" height="30" /></div>
                        <div className="inline"><Link to="/profile">Профиль</Link></div>
                    </div>
                    <div className="halfCircle">
                        <Link to="">Твитнуть</Link>
                    </div>
                </div>
                <div className="next">
                    {this.props.children}
                </div>
            </>
        );
    }
}
