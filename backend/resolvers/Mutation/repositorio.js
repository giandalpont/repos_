const db = require('../../config/db')

module.exports = {
    async novoRepositorio(_, { dados }, ctx) {
        ctx && ctx.validarAdmin()
       
        try {
            const [ id ] = await db('repositorios')
                .insert(dados)
            return db('repositorios')
                .where({ id }).first()
        } catch(e) {
            throw new Error(e.sqlMessage)
        }
    }
}