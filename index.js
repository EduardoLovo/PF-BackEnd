const express = require('express');

const app = express();
app.use(express.json());

const Conn = require('./models/conn/conn');
// const db_url = process.env.DB_URL;
// const db_user = process.env.DB_USER;
// const db_pass = process.env.DB_PASS;
// const db_data = process.env.DB_DATA;

// Conn(db_url,db_user,db_pass,db_data);

Conn("localhost", 27017, "tarefas");

const port = 3000;

const tarefasRouter = require('./routers/tarefas.routes');
app.use('/tarefas', tarefasRouter);

app.listen(port, () => {
    console.info(`Servidor rodando na porta ${port}`);
})