import React, { Component } from 'react';
import './SidebarRight.css';
import {Link} from "react-router-dom";
import logo from "../media/twitter_logo.png";
import logoHome from "../media/home.png";
import logoChat from "../media/envelope.png";
import logoProfile from "../media/pencil.png"

export class SidebarRight extends Component {

    render() {
        return (
            <div className="right">
                <div className="otherAccs">
                    <div className="probRead">Кого читать</div>
                    <div className="accounts ">
                        <div className="rounded-circle image inline"></div>
                        <div className="nickname inline">
                            <div className="nick">Лентач</div>
                            <div className="ref">@oldLentach</div>
                        </div>
                        <div className="subscribe inline" id="sub1">
                            <Link to="/reg">Читать</Link>
                        </div>
                    </div>
                    <div className="accounts">
                        <div className="rounded-circle image inline"></div>
                        <div className="nickname inline">
                            <div className="nick">Вася Пупкин</div>
                            <div className="ref">@vaskapup</div>
                        </div>
                        <div className="subscribe inline" id="sub2">
                            <Link to="/auth">Читать</Link>
                        </div>
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}