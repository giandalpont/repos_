import React from 'react'
import PropType from 'prop-types'

const ModalTitle = ({ title, getRepos }) => (
    <>
        <span data-toggle="modal" data-target="#modal">
            <h4 
                className="card-title"
                onClick={ () => getRepos(title) }
                >
                { title }
            </h4>
        </span>
    </>
)

ModalTitle.propType = {
    title: PropType.string.isRequired,
    getRepos: PropType.func.isRequired
}

export default ModalTitle