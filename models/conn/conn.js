const mongoose = require('mongoose');

function Conn(db_url, db_user, db_pass, db_data) {
    mongoose.connect(`${db_url}/${db_data}`, {
        user: db_user,
        pass: db_pass,
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = Conn;