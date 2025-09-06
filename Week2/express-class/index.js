// Creating an http server
// express
// node default library => no

const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("Hey CapX");
})

app.listen(3000);
