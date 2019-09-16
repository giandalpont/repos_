import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ handleSearch }) => (
    <div className="input-group mb-3">
        <input 
            type="text" 
            className="form-control" 
            placeholder="Buscar..."
            onKeyUp={ handleSearch }
        />
    </div>
)
Search.propType = {
    handleSearch: PropTypes.func.isRequired
}

export default Search