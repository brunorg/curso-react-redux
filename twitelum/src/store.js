import { createStore } from 'redux'

function tweetsReducer(stateDaStore = [], acaodisparada) {
    console.log('Alguém disparou uma ação')
    if (acaodisparada.type === 'CARREGA_TWEETS') {
        return acaodisparada.tweets
    }

    return stateDaStore
}

const store = createStore(tweetsReducer)

export default store