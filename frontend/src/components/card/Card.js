import React from 'react'
import PropTypes from 'prop-types'
import ModalTitle from '../modal/ModalTitle'

const Card = ({ searchCode, getRepos }) => (
    <>
        {searchCode.map((repo) => (
            <div className="col-md-6 mt30" key={ repo[0].id }>
                <div className="card" style={{ width: '100%' }}>
                    <div className="card-body">
                        <a className="card-link" >
                            <ModalTitle
                                title={ repo[0].full_name }
                                getRepos={ getRepos }
                            />
                        </a>
                        <h6 className="card-subtitle mb-2 text-muted">{ repo[0].description }</h6>
                        <p className="card-text">
                            <small>{repo[0].license}</small>
                        </p>
                        <p>{ repo[0].language }</p>
                        <div className="float-right">
                            <a href="inicial" className="card-link float-right" >
                                <small>Star { repo[0].stargazers }</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
        ))}
    </>
)

Card.propType = {
    searchCode: PropTypes.shape({
        id: PropTypes.number.isRequired,
        full_name: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        stargazers: PropTypes.number.isRequired
    }),
    getRepos: PropTypes.func.isRequired
}

export default Card