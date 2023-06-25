const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todos',  { useNewUrlParser: true });
const connection = mongoose.connection;

module.exports =  connection;
