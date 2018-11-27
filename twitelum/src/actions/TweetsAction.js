import store from '../store'

export function carrega() {
    fetch(`http://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem("TOKEN")}`, {
    }).then((respostaDoServer) => {
        return respostaDoServer.json()
    }).then((tweetsQueVieramDoServer) => {
        store.dispatch({
            type: 'CARREGA_TWEETS',
            tweets: tweetsQueVieramDoServer
        })
    })
}

export function adiciona(novoTweet) {
    return fetch(`http://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem("TOKEN")}`, {
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
        store.dispatch({
            type: 'ADD_TWEET',
            tweet: tweetQueVeioDoServer
        })
    })
}