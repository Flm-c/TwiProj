import React, { Component } from 'react';
import "./MessageContent.css"


export class MessageContent extends Component{
    render() {
        return(
            <div className="glob">
                <div className="searchMenu container">
                    <div className="searchArr">Поиск людей</div>
                </div>
                <div className="content">
                    <div className="imag rounded-circle inlinebl"></div>
                    <div className="big inlinebl">
                        <div className="nick">Мистер мэм <span id="tag">@mrMem</span></div>
                        <div className="message">Привет, Олег!</div>
                    </div>

                </div>
            </div>
        );
    }
}