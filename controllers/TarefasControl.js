const tarefaModel = require("../models/tarefas");

const getTarefa = async (req, res) => {
  await tarefaModel.find({}, (err, tarefa) => {
    if (err) {
      return res.status(400).send("Tarefa invalida");
    }
    if (!tarefa) {
      return res.status(404).send("Tarefa não encontrada");
    }
    res.status(200).send(tarefa);
  });
};


const getTarefaById = async (req, res) => {
  await tarefaModel.find({ _id: req.params.id }, (err, tarefa) => {
    if (err) {
      return res.status(404).send("Tarefa não encontrada");
    }
    res.status(200).send(tarefa);
  });
};


const createTarefa = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).send("Tarefa invalida");
  }
  const tarefa = new tarefaModel(body);
  tarefa
    .save()
    .then(() => res.status(201).send("Tarefa criada com sucesso"))
    .catch(() =>
      res.status(400).send(`Não foi possivel criar tarefa, tente novamente`)
    );
};


const updateTarefa = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).send("Tarefa invalida, tente novamente");
  } else {
    await tarefaModel
      .updateOne({ _id: req.params.id }, req.body)
      .then(() => res.status(200).send("Tarefa atualizada com sucesso"))
      .catch(() => res.status(400).send("Não foi possivel atualizar tarefa, tente novamente"));
  }
};


const deleteTarefa = async (req, res) => {
  await tarefaModel
    .deleteOne({_id: req.params.id })
    .then(() => res.status(200).send("Tarefa deletada com sucesso"))
    .catch((err) => res.status(404).send("Tarefa não encontrada"));
};


module.exports = { getTarefa, getTarefaById, createTarefa, updateTarefa, deleteTarefa };