const express = require('express');
const router = express.Router();
const Tarefa = require('../models/tarefas');
const tarefaController = require('../controllers/TarefasControl')

router.get('/', tarefaController.getTarefa);

router.post('/add', tarefaController.createTarefa);

router.get('/findById/:id', tarefaController.getTarefaById);

router.put('/update/:id', tarefaController.updateTarefa);

router.delete('/delete/:id', tarefaController.deleteTarefa);

module.exports = router;


