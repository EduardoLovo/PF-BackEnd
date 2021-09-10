const express = require('express');
const router = express.Router();
const Tarefa = require('../models/tarefas');

router.get('/', async (req, res) => {
    await Tarefa.find({})
    .then((tarefa) => {
        res.send(tarefa);
    })
    .catch((err) => {
        console.log(err);
    })
});


router.post('/add', async (req,res) => {
    await Tarefa.create(req.body)
    .then(() => {
        res.status(200).send("Tarefa adicionada com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Erro ao adicionar tarefa, tente novamente");
        console.error(err);
    })
});

router.get('/findById/:id', async (req, res) => {
    await Tarefa.find({_id : req.params.id})
    .then((tarefa) => {
        res.status(200).send(tarefa);
    })
    .catch((err) => {
        res.status(400).send("Erro ao pesquisar tarefa, tente novamente");
        console.error(err);
    })
});

router.put('/update/:id', async (req, res) => {
    await Tarefa.updateOne({_id : req.params.id}, req.body)
    .then(() => {
        res.status(200).send("Tarefa atualizada");
    })
    .catch((err) => {
        res.status(400).send("Erro ao atualizar tarefa, tente novamente");
        console.log(err);
    });
});

router.delete('/delete', async (req, res) => {
    await Tarefa.deleteOne({_id : req.params.id})
    .then(() => {
        res.status(200).send("Tarefa deletada com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Erro ao deletar tarefa, tente novamente");
        console.er(err);
    });
});

module.exports = router;


