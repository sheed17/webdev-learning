/* The way it works
Server grabs data (from DB, API, etc.).

Server passes that data into an EJS template.

Template looks like HTML but has <%= %> and <% %> tags.

These tags let you “manipulate and mess around” with data: loops, conditions, etc.

EJS engine generates the final HTML.

Client (browser) just displays that HTML.

*/


const express = require("express");
const app = express();


app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index", {text: "World"})
  
})

app.listen(3000);
