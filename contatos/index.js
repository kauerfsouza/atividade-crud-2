// configuração
const express = require('express')
const app = express()

// middlewares
app.use(express.json())

//rotas
app.get('/', (req, res) => {
    res.json("OK")
})

// rotas importadas do roteador
const pessoasRouter = require('./routes/pessoas')

app.use(pessoasRouter)

//start
app.listen(3000, () => {
    console.log("rodando em http://localhost:3000")
})
