import store from '../store'

export function carrega() {
    fetch(`http://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem("TOKEN")}`)
        .then((respostaDoServer) => {
            return respostaDoServer.json()
        }).then((tweetsQueVieramDoServer) => {
            store.dispatch({
                type: 'CARREGA_TWEETS',
                tweets: tweetsQueVieramDoServer
            })
        })
}