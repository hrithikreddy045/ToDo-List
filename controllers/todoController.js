const express = require('express');
let data = [];

const urlencodedParser = express.urlencoded({ extended : false });      // For POST Request

module.exports = (app) => {
    
    app.get('/todo', (req, res) => {
        res.render('todo', { todos : data });
    });

    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', (req, res) => {
        data = data.filter((todo) => todo.item.replace(/ /g, '-') !== req.params.item);
        res.json(data);
    }); 
};