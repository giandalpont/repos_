const db = require('../../config/db')


module.exports = {
    repositorios(parent, args, ctx) {
        ctx && ctx.validarAdmin()
        return db('repositorios')
    },
    repositorio(_, { filtro }, ctx) {
        ctx && ctx.validarUsuarioFiltro(filtro)
        
        if(!filtro) return null
        const { id, name } = filtro
        if(id) {
            return db('repositorios')
                .where({ id })
                .first()
        } else if(name) {
            return db('repositorios')
                .where({ name })
                .first()
        } else {
            return null
        }
    },
}