const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('Servidor creado con express.js')
})

app.listen(3000, () => {
    console.log('Aplicación con express ejecutandose en el puerto 3000')
})