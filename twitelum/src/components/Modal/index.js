import React, { Component } from 'react';
import './modal.css';
import PropTypes from 'prop-types';

class Modal extends Component {
    mostraModal() {
        return this.props.isAberto && 'modal--active'
    }

    fechandoModal = (infosDoEvento) => {
        const elementoClicado = infosDoEvento.target
        const isModal = elementoClicado.classList.contains('modal')
        if (isModal) {
            console.log('Fecha o modal')
            this.props.onFechandoModal()
        }
    }

    render() {
        return (
            <div className={`modal ${this.mostraModal()}`} onClick={this.fechandoModal}>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    isAberto: PropTypes.bool.isRequired,
    onFechandoModal: PropTypes.func.isRequired
}

export default Modal;