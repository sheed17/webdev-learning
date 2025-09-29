//Middleware - a function that runs between a request and response, so if you have a request then there is a middleware,
//that is dealt with first, then moves on to the next middleware or route using next()
/*so whenever there is a request if there is a middleware it handles that first then moves on to the response
*/



const express = require('express')
const routes = express.Router();

routes.use(logger)

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

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
} 



module.exports = routes;
