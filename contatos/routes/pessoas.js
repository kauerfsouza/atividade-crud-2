const express = require('express')
const router = express.Router()

const listapessoas = ["nome: kaue", "idade:19", "email:kaue@gmail.com", "telefone:00000-0000"]

//Buscar todos 
router.get('/pessoas', (req, res) => {
    res.json(listapessoas)
})

//Busca por id
router.get('/pessoas/:id', (req, res) => {
    const id = req.params.id
    res.json(listapessoas[id])
})

//Criar 
router.post('/pessoas', (req, res) => {
    const { nome, idade, email, telefone} = req.body;
    const pessoas = { nome, idade, email, telefone};
    listapessoas.push(pessoas.nome)
    res.json({ mensagem: " criado com sucesso!" })
})

//Deletar 
router.delete('/pessoas/:id', (req, res) => {
    const id = req.params.id
    listapessoas.splice(id, 1)
    res.json({ mensagem: " excluido com sucesso!" })
})

//Atualizar 
router.put('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const pessoasAlterada = req.body
    listaContatos[id] = contatoAlterado.nome
    res.json({ mensagem: " alterada com sucesso!" })
})

module.exports = router
