import { createStore } from 'redux'

function tweetsReducer(stateDaStore = [], acaoDisparada) {
    console.log('Alguém disparou uma ação')
    if (acaoDisparada.type === 'CARREGA_TWEETS') {
        return acaoDisparada.tweets
    }
    if (acaoDisparada.type === 'ADD_TWEET') {
        return [acaoDisparada.tweet, ...stateDaStore]
    }
    if (acaoDisparada.type === 'REMOVE_TWEET') {
        return stateDaStore.filter((tweetAtual) => {
            return tweetAtual._id !== acaoDisparada.idDoTweet
        })
    }

    return stateDaStore
}

const store = createStore(tweetsReducer)

export default store