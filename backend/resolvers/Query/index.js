const usuario = require('./usuario')
const perfil = require('./perfil')
const repositorio = require('./repositorio')

 module.exports = {
    ...usuario,
    ...perfil,
    ...repositorio
 }