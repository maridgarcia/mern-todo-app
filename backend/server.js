const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/todos',  { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});