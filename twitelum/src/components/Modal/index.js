import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
    mostraModal() {
        return this.props.isAberto && 'modal--active'
    }

    render() {
        return (
            <div className={`modal ${this.mostraModal()}`}>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;