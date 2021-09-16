if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const express = require('express');
const cors = require('cors');

// const corsOptions = {
//     origin: "https://front-to-do-list.herokuapp.com",
//     optionsSuccessStatus: 200,
// }

const whitelist = ['https://front-to-do-list.herokuapp.com', 'http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const Conn = require('./models/conn/conn');

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

// Conn("localhost", 27017, "tarefas");

const port = 3002;

const tarefasRouter = require('./routers/tarefas.routes');
app.use('/tarefas', tarefasRouter);

app.listen(process.env.PORT || port, () => {
    console.info(`Servidor rodando na porta ${port}`);
})