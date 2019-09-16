import React, { Component } from 'react'
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import IndexComp from './components/Index'
import './style/App.css'

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' })


class App extends Component {

    constructor (props) {
        super(props)
        this.state = {
            searchCode: [],
            repository: [],
            modal: false
        }
    }

    handleSearch (e) {
        const value = e.target.value
        const ENTER = 13
        const keyCode = e.which || e.keyCode
        const type = 'repositories'
        if( keyCode === ENTER ){
            fetch(`https://api.github.com/search/${type}?q=${value}&type=${type}`)
            .then(res => res.json())
            .then( 
                (result) => {
                    const item = result.items
                    this.setState({
                        searchCode:  item.map( res => {
                            return [{
                                id: res.id,
                                name: res.name,
                                login: res.owner.login,
                                full_name: res.full_name,
                                description: res.description,
                                language: res.language,
                                clone_url: res.clone_url,
                                forks: res.forks,
                                open_issues: res.open_issues,
                                stargazers: res.stargazers,
                                watchers: res.watchers,
                                score: res.score
                            }]
                        })
                    })
                }
            )
            .catch(err => {
                throw err;
            })
        }
    }

    getRepos (event) {
        fetch(`https://api.github.com/repos/${event}`)
        .then(res => res.json())
        .then( result =>  {
            this.setState({ 
                repository: {
                    id: result.id,
                    name: result.name,
                    full_name: result.full_name,
                    url: result.html_url,
                    description: result.description,
                    language: result.language,
                    forks: result.forks,
                    issues: result.open_issues,
                    stargazers: result.stargazers_count,
                    subscribers: result.subscribers_count,
                },
                modal: true
            })
            console.log(result)
            var  dados =  this.state.repository
            client.mutate({
                mutation: gql`{
                    novoRepositorio(
                        dados: {
                            id_repositorio: 21
                            name: "teste"
                            full_name: "teste"
                            url: "teste"
                            description: "teste"
                            language: "HTML"
                        }
                    ) {
                        id name full_name
                    }
                }`
            })
        })
    }


    render () {
        return (
            <ApolloProvider client={ client }>
                <IndexComp 
                    searchCode={ this.state.searchCode } 
                    handleSearch={ e => this.handleSearch(e) }
                    getRepos={ event => this.getRepos(event) }
                    repository={ this.state.repository }
                    modal={ this.state.modal }
                />
            </ApolloProvider>
        )
    }
}

export default App
