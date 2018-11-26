import { createStore } from 'redux'

function tweetsReducer(stateDaStore = [], acaoDisparada) {
    console.log('Alguém disparou uma ação')
    if (acaoDisparada.type === 'CARREGA_TWEETS') {
        return acaoDisparada.tweets
    }

    return stateDaStore
}

const store = createStore(tweetsReducer)

export default store