const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./models/connection');
let todo = require('./models/todo_model');

const todoRoutes = express.Router();

const app = express();

app.use(cors());
app.use(bodyParser.json());

todoRoutes.route('/').get((_req, res) => {
    todo.find((err, todos) => {
        if(err) {
            res.json(err.message);
        } else {
            res.json(todos);
        }
    });
});


todoRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    todo.findById(id, (err, todo) => {
        if(err) {
            res.json(err.message);
        } else {
            res.json(todo);
        }
    });
});

todoRoutes.route('/update/:id').post((req, res) => {
    todo.findById(req.params.id, (err, todo) => {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.task = req.body.task;
            todo.responsible = req.body.responsible;
            todo.priority = req.body.priority;
            todo.completed = req.body.completed;

            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

todoRoutes.route('/add').post((req, res) => {
    let newTodo = new todo(req.body);
    newTodo.save()
        .then(todo => {
            res.status(201).json({ 'todo': 'new task added successfully!' });
        }).catch(err => {
            res.status(400).send(`${err.message}\noops, cannot add new todo :(`);
        });
});

todoRoutes.route('/:id').delete((req, res) => {
    todo.deleteOne({ _id: req.params.id }).then(todo => {
        res.status(200).json({ "todo": "task deleted successfully!" });
    }).catch(e => res.json(400).send(err.message))

});

app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});