import React, { Component } from 'react'
import Tweet from './'
import * as TweetsAction from '../../actions/TweetsAction'

// Sempre que você você precisa

class TweetContainer extends Component {
    remove = () => {
        const idDoTweet = this.props.tweetAtual._id

        TweetsAction.remove(idDoTweet).then(() => {
            this.props.onRemove(idDoTweet)
        })
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