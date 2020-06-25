import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {

    render() {
        return (
            <header>
                <div className="headText">
                    {this.props.children}
                </div>
            </header>
        );
    }
}