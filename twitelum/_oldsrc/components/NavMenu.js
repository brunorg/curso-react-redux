import React, { Component } from 'react';

export default class NavMenu extends Component {
    render() {
        return (
            <nav className="navMenu">
                <ul className="navMenu__lista">
                    <li className="navMenu__item">
                        <a className="navMenu__link" href="/">
                            Bem vindo(a): <br />
                            <strong>@{this.props.usuario}</strong>
                        </a>
                    </li>
                    <li className="navMenu__item">
                        <a className="navMenu__link" href="/">Página Inicial</a>
                    </li>
                    <li className="navMenu__item">
                        <a className="navMenu__link" href="/hashtags">Hashtags</a>
                    </li>
                    <li className="navMenu__item">
                        <a className="navMenu__link" href="/logout">Logout</a>
                    </li>
                </ul>
            </nav>
        )
    }
}