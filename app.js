const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

// Controllers
todoController(app);        // Function call

app.listen(1000, console.log("Server running on Port 1000"));