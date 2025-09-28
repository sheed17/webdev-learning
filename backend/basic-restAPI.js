const express = require("express")
const app = express()

//Basic REST API defining the routes and giving a means for the server to be able to comminicate with the client


/* GET    - client asks server to READ/GET data
/* POST   - client tells server to CREATE/ADD new data
/* PUT    - client tells server to UPDATE/REPLACE existing data
/* DELETE - client tells server to DELETE/remove data*/




app.get("/", (req, res) => {
    res.send("Returning requested data");
})

app.post("/", (req, res) => {
    res.send("Added new user");
})

app.put("/", (req, res) => {
    res.send("Updated user with requested ID");
})

app.delete("/", (req, res) => {
    res.send("Deleted user with requested ID!");
})

app.listen(3000);

