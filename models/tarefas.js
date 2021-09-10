const mongoose = require('mongoose');

const tarefasModel = new mongoose.Schema({
    Titulo: { type: String, required: true},
    Descricao: { type: String, required: true},
    Prioridade: { type: String, required: true},
    Status: { type: String, required: true},
    Prazo: { type: String, required: true},
    DataCriacao: { type: Date, default: Date.now}
})

const Tarefa = mongoose.model("tarefas", tarefasModel);

module.exports = Tarefa;