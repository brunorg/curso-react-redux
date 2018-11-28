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

## Migrando a ação de remover tweet para store redux

- Inicialmente chamar o dipatch do store para usar o redux
- Depois migrar a chamada REST para o arquivo de actions


## Necessidade do combineReducers para outro objeto na store

- Incluir a funcao combineReducers e associar cada redutor a um nome na store
- Remove nao vai para action por que nem sempre a intenção e aparecer a mensagem em toda remoção
- A mensagem na Home pode ser extraida para um componente
- Ao remover a mensagem no render ela deve ser passada como arrow function por que senao será executada à primeira vez
- O Tweet foi componentizado em um conteiner para evitar duplicacao de código