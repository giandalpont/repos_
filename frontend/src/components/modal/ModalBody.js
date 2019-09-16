import React from 'react'
import PropTypes from 'prop-types'

const ModalBody = ({ repository }) => (
    
    <div className="modal fade" id="modal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalCenterTitle">{ repository.full_name }</h2>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Informação</h4>
                            <p>
                                Nome: { repository.name } <br />
                                Followers: { repository.followers } <br/>
                                following: { repository.following }
                                <a href={ repository.url } target="_blank" >Clique aqui </a>e acesa o perfil
                            </p>
                        </div>
                    </div>
                    { repository.full_name }
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
)

ModalBody.propType = {
    repository: PropTypes.shape({
        full_name: PropTypes.string.isRequired
    })
}

export default ModalBody