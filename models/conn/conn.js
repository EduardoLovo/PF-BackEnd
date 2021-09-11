const mongoose = require('mongoose');

function Conn(url, porta, banco) {
    mongoose.connect(`mongodb+srv://dbUser:3Vaipo5fPavtgWA9@todolist.9kif8.mongodb.net/test`,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = Conn;