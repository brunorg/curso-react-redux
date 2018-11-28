import React, { Component } from 'react'
import Tweet from './'

class TweetContainer extends Component {
    remove = () => {
        this.props.onRemove(this.props.tweetAtual._id)
    }

    render() {
        const tweetAtual = this.props.tweetAtual
        return <Tweet
            id={tweetAtual._id}
            texto={tweetAtual.conteudo}
            usuario={tweetAtual.usuario}
            likeado={tweetAtual.likeado}
            totalLikes={tweetAtual.totalLikes}
            removivel={tweetAtual.removivel}
            removeHandler={this.remove}
        />
    }
}

export default TweetContainer;