import React, { Component } from 'react';
import wolf from "../media/wolf.jpg";
import "./ProfileInfo.css"

export class ProfileInfo extends Component{
    render() {
        return(
            <>
                <div className="parent">
                    <div className="imm">Крутой фон этого профиля</div>
                    <div className="circleimg rounded-circle">АВА</div>
                    <div className="changeProf">Изменить профиль</div>
                    <div className="info">
                        Кусок воды
                        <div id="taq"> @kusok</div>
                    </div>
                    <div className="followers">
                        192
                        <span className="foll"> читаемых </span>
                        9
                        <span className="foll"> читателей</span>
                    </div>
                </div>
            </>
        );
    }
}