import React, { Component } from 'react'

class Input extends Component {

    constructor () {
        super()
        this.state = {
            value: 'Valor inicial',
            checked: false
        }
    }

    render () {
        return (
            <form>
                <input type="text" value={ this.state.value } onChange={ (e) => {
                    this.setState({ value: e.target.value })
                } } />
                <label>
                    <input type="checkbox" value="user" checked={ this.state.checked } onChange={ 
                        (e) => { this.setState({ checked: e.target.checked }) }
                     } />
                    checkbox
                </label>
            </form>
        )
    }
}

export default Input