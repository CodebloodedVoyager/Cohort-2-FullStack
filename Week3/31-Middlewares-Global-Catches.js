// Middlewares explained using Doctors Cabin and Patient analogy

//Equivalent code for Doctors Canbin

/* 
- In real world we have pre-checks
- Answer: Middlewares
*/

// Below is the Dumb way of doing input validation & authentication

const express = require("express");
const app = express();
app.get("/health-checkup", function (req,res){
    // do the health checks
   const kidneyId = req.query.kidneyId;
   const username = req.headers.username;
   const password = req.headers.password;

   if (!(username === "Applexity" && password === "pass")){
    if (username != "Applexity" || password != "pass")
        res.status(400).json({"msg": "something up with your inputs"})
        return;
   }

    if (kidneyId != 1 && kidneyId !=2){
        res.status(400).json({"msg": "something up with your inputs"})
        return;      
    }   
    // do something with kidney here
    res.json({
        msg: "your kidney is fine"
    })      

    // do something with kedneys here
    res.json({
        msg: "Your Kidney is fine!"
    })
});

app.listen(3000);

