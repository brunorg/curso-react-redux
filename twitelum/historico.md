## Inclusao do redux

`npm install redux`

- foi adicionado ao _index.js_ para ser importado direto ao objeto **window**
- O reducer é uma função executada como um filtro para atualizar algo na store
- É necessário passar um action ao chamar (fazer o dispatch) o reducer
- O componentDidMount fui utilizado para registar o observer do store

## Inclusão do react redux para

`npm install react-redux`

A ideia nesse caso é tirar o store do objeto window para que possa ser usado fora do navegador (Native)

