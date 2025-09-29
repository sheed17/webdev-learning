//missing post but yk what it does

const express = require('express')
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send("Users list");
})

routes.get('/new', (req, res) => {
    res.send("User New Form");
})

const users = [{name: "bob"}, {name: "Steve"}];

routes.param("id", (req, res, next, id) => {
    req.user = users[id]
    next();
})

routes.get("/:id", (req, res) => {
    console.log(req.user)
    res.send(`Get user with ID ${req.params.id}`)
})

routes.put("/:id", (req, res) => {
    res.send(`Update user with ID ${req.params.id}`)
})

routes.delete("/:id", (req, res) => {
    res.send(`Delete user with ID ${req.params.id}`)
})



module.exports = routes;
