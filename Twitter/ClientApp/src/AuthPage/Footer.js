import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2 footer-block">О нас</div>
                        <div className="col-2 footer-block">Условия</div>
                        <div className="col-4 footer-block">Политика конфиденциальности</div>
                        <div className="col-2 footer-block">Блог</div>
                        <div className="col-2 footer-block">Бренд</div>
                    </div>
                    <div className="footer-block copywriteFooter">©Twitter, Inc., 2020.</div>
                </div>
            </footer>
        );
    }
}
