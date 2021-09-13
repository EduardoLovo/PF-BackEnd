const mongoose = require('mongoose');

function Conn(url, porta, banco) {
    mongoose.connect(`mongodb+srv://dbUser:V9n0s2ucSuRxIwS1@projetofinal.wplzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        // user: user,
        // pass: pass,
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = Conn;