import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import Cabecalho from '../components/Cabecalho'
import NavMenu from '../components/NavMenu'
import Dashboard from '../components/Dashboard'
import Widget from '../components/Widget'
import TrendsArea from '../components/TrendsArea'
import Tweet from '../components/Tweet'
import Modal from '../components/Modal';
import PropTypes from 'prop-types';
import * as TweetsAction from '../actions/TweetsAction'

class HomePage extends Component {
    constructor() {
        super()

        this.state = {
            novoTweet: "Digite o que vier na sua cabeça",
            tweets: [],
            tweetAtivo: {}
        }
    }

    static contextTypes = {
        store: PropTypes.object
    }

    componentDidMount() {
        const store = this.context.store

        store.subscribe(() => {
            console.log('Dentro do subscribe: ', store.getState())
            this.setState({
                tweets: store.getState()
            })
        })

        TweetsAction.carrega()
    }

    adicionaTweet = (infosDoEvento) => {
        infosDoEvento.preventDefault()
        const novoTweet = this.state.novoTweet;

        TweetsAction.adiciona(novoTweet).then(() => {
            this.setState({
                novoTweet: ''
            })
        })
    }

    removeTweet = (idDoTweet) => {
        TweetsAction.remove(idDoTweet).then(() => {
            this.fechaModal();
        })
    }

    abreModal = (objetoDoTweetClicado) => {
        this.setState({
            tweetAtivo: objetoDoTweetClicado
        })
        console.log(objetoDoTweetClicado);
    }

    fechaModal = () => {
        this.setState({
            tweetAtivo: {}
        })
        console.log('Modal fechado')
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>{`Home (${this.state.tweets.length}) - Twitelum`}</title>
                </Helmet>
                <Cabecalho>
                    <NavMenu usuario="@omariosouto" />
                </Cabecalho>
                <div className="container">
                    <Dashboard>
                        <Widget>
                            <form className="novoTweet" onSubmit={this.adicionaTweet}>
                                <div className="novoTweet__status">
                                    <span className={"novoTweet__status" +
                                        (this.state.novoTweet.length > 140 ?
                                            " novoTweet__status--invalido" : "")
                                    }>{this.state.novoTweet.length}/140</span>
                                    <textarea
                                        value={this.state.novoTweet}
                                        onChange={(infosDoEvento) => {
                                            const novoValor = infosDoEvento.target.value
                                            this.setState({
                                                novoTweet: novoValor
                                            })
                                        }}
                                        className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={
                                        this.state.novoTweet.length > 140 ||
                                        this.state.novoTweet.length === 0}
                                    className="novoTweet__envia">Tweetar</button>
                            </form>
                        </Widget>
                        <Widget>
                            <TrendsArea />
                        </Widget>
                    </Dashboard>
                    <Dashboard posicao="centro">
                        <Widget>
                            <div className="tweetsArea">
                                {
                                    this.state.tweets.length === 0 ? 'Loading...' : ''
                                }
                                {
                                    this.state.tweets.map((tweetAtual, indice) => {
                                        return <Tweet
                                            key={indice}
                                            id={tweetAtual._id}
                                            texto={tweetAtual.conteudo}
                                            usuario={tweetAtual.usuario}
                                            likeado={tweetAtual.likeado}
                                            totalLikes={tweetAtual.totalLikes}
                                            removivel={tweetAtual.removivel}
                                            removeHandler={() => this.removeTweet(tweetAtual._id)}
                                            handleAbreModal={() => this.abreModal(tweetAtual)} />
                                    })
                                }
                            </div>
                        </Widget>
                    </Dashboard>
                </div>
                <Modal isAberto={Boolean(this.state.tweetAtivo._id)} onFechandoModal={this.fechaModal} >
                    <Widget>
                        <Tweet
                            id={this.state.tweetAtivo._id}
                            texto={this.state.tweetAtivo.conteudo}
                            usuario={this.state.tweetAtivo.usuario}
                            likeado={this.state.tweetAtivo.likeado}
                            totalLikes={this.state.tweetAtivo.totalLikes}
                            removivel={this.state.tweetAtivo.removivel}
                            removeHandler={() => this.removeTweet(this.state.tweetAtivo._id)}
                            handleAbreModal={() => this.abreModal(this.state.tweetAtivo)}
                        />
                    </Widget>
                </Modal>
            </Fragment>
        );
    }
}

export default HomePage;


