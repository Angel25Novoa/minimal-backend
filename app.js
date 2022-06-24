const express = require('express')
const app = express()
const PORT = 3001

app.listen(PORT, () => {
    console.log(`El servidor esta activo en el puerto ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("<h2>Titulo ejemplo hola mundo</h2>")
})