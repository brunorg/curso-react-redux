import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import Cabecalho from '../components/Cabecalho'
import NavMenu from '../components/NavMenu'
import Dashboard from '../components/Dashboard'
import Widget from '../components/Widget'
import TrendsArea from '../components/TrendsArea'
import Tweet from '../components/Tweet'

class HomePage extends Component {
    constructor() {
        super()

        this.state = {
            novoTweet: "Digite o que vier na sua cabeça",
            tweets: []
        }
    }

    componentDidMount() {
        fetch(`http://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem("TOKEN")}`)
            .then((respostaDoServer) => {
                return respostaDoServer.json()
            }).then((tweetsQueVieramDoServer) => {
                this.setState({
                    tweets: tweetsQueVieramDoServer
                })
            })
    }

    adicionaTweet = (infosDoEvento) => {
        infosDoEvento.preventDefault()
        const novoTweet = this.state.novoTweet;

        fetch(`http://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem("TOKEN")}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                // 'Authorization': localStorage.getItem('TOKEN')
            },
            body: JSON.stringify({ conteudo: novoTweet })
        }).then((respostaDoServer) => {
            return respostaDoServer.json()
        }).then((tweetQueVeioDoServer) => {
            console.log('Resposta: ', tweetQueVeioDoServer)
            this.setState({
                tweets: [tweetQueVeioDoServer, ...this.state.tweets],
                novoTweet: ''
            })
        })
    }

    removeTweet = (idDoTweet) => {
        fetch(`http://twitelum-api.herokuapp.com/tweets/${idDoTweet}?X-AUTH-TOKEN=${localStorage.getItem("TOKEN")}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((respostaConvertida) => {
                console.log(respostaConvertida)

                const listaAtualizada = this.state.tweets.filter((tweetAtual) => {
                    return tweetAtual._id !== idDoTweet
                })

                this.setState({
                    tweets: listaAtualizada
                })
            })
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
                                            removeHandler={() => this.removeTweet(tweetAtual._id)} />
                                    })
                                }
                            </div>
                        </Widget>
                    </Dashboard>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;
