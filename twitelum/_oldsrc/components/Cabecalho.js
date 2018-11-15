import React, { Component } from 'react';
import './cabecalho.css'
import './navMenu.css'

class Cabecalho extends Component {
    render() {
        console.log();
        return (
            <header className="cabecalho">
                <div className="cabecalho__container container">
                    <h1 className="cabecalho__logo">
                        <a href="/">Twitelum</a>
                    </h1>
                </div>
                {this.props.children}
            </header>
        )
    }
}

export default Cabecalho;