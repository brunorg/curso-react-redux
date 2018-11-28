import { createStore, combineReducers } from 'redux'

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

function notificacaoReducer(state = '', action = {}) {
    if (action.type === 'ADD_NOTIFICACAO') {
        return action.msg
    }
    if (action.type === 'REMOVE_NOTIFICACAO') {
        return ''
    }
    return state
}

const store = createStore(combineReducers({
    tweets: tweetsReducer,
    notificacao: notificacaoReducer
}))

export default store