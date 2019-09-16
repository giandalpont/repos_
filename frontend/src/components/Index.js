import React from 'react'
import Header from './header/Header'
import Search from './search/Search'
import Card from './card/Card'
import ModalBody from './modal/ModalBody'

const IndexComp = ({ searchCode , handleSearch, getRepos, repository, modal }) => (
    <section>
        <header className="conteudo">
            <Header />
        </header>
        <section className="conteudo">
            <div className="container mt30 mb30">
                <div className="row">
                    <div className="col-md-12">
                        <Search handleSearch={ handleSearch } />
                    </div>
                </div>
                <div className="row">
                    {!!searchCode && < Card
                        searchCode={ searchCode }
                        getRepos={ getRepos }
                    />}
                </div>
                { modal && <ModalBody repository={ repository } /> }
            </div>
        </section>
    </section>
)

export default IndexComp