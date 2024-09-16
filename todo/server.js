//express and mongoose module
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//create an instance of express
const app = express();
app.use(express.json())
app.use(cors())


//connecting mongoose
mongoose.connect('mongodb://127.0.0.1:27017/mern-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 50000
})
.then(() => {
    console.log('DB connected');
})
.catch((err) => {
    console.error('DB connection error:', err);
});


//creating schemas
const todoSchema = new mongoose.Schema({
    title: {
        required: true,
        type : String
    },
    description:String
})

//creating model
const todoModel = mongoose.model('Todo', todoSchema);

//create the new todo items

app.post('/todos', async(req, res) => {
    const {title, description } = req.body;
    //const newTodo = {
    //  id: todos.length + 1,
    //title,
    //description
    //};
    //todos.push(newTodo);
    //console.log(todos);
    try {
        const newTodo = new todoModel({title, description});
        await newTodo.save();
        res.status(201).json(newTodo);
    }catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

//Get all items

app.get('/todos', async(req, res) => {
    try {
        const todos = await todoModel.find();
        res.json(todos);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
    
})

//update todo items

app.put("/todos/:id", async(req, res) => {
    try {
            const { title, description } = req.body;
    const id = req.params.id;
    const updatedTodo = await todoModel.findByIdAndUpdate(
        id,
        { title, description },
        {new : true}
    )

    if (!updatedTodo) {
        return res.status(404).json({message: "Todo not found"})
    }
        res.json(updatedTodo)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

})


//delete the todo item

app.delete('/todos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await todoModel.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

})


//start the server

const port = 8000;
app.listen(port, () => {
    console.log("server listening to the port" + port)
})