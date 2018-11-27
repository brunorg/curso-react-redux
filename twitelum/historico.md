## Inclusao do redux

`npm install redux`

- foi adicionado ao _index.js_ para ser importado direto ao objeto **window**
- O reducer é uma função executada como um filtro para atualizar algo na store
- É necessário passar um action ao chamar (fazer o dispatch) o reducer
- O componentDidMount fui utilizado para registar o observer do store

## Inclusão do react-redux

`npm install react-redux`

A ideia nesse caso é tirar o store do objeto window para que possa ser usado fora do navegador (Native)

## Separando as responsabilidades 1

Criar as chamadas REST e atualização da store em pasta de actions

## Separando as responsabilidades 2

- Ao migrar metodo adiciona para Action e coloca o novo type no store
- O metodo adiciona deve retornar uma promisse para limpar o campo do tweet apenas após o sucesso
- Observar que na store para acessar o estado atual da store ela está disponível como param 