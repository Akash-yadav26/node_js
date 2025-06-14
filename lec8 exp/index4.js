// const http = require("http");
const express = require("express");

const app = express(); // this internally a handler function whose function is to manage request and response 

app.get('/',(req,res)=>{
    return res.send("Hello from Home page");
}); // this handler function is for this particular route only

app.get("/about",(req,res)=>{
    return res.send("Hello From About Page " + "hey" + req.query.name + 'you are' + req.query.age);
});
//app.post()

app.listen(8000,()=> console.log("Server Started"));

// const myServer = http.createServer(app);
// myServer.listen(8000,()=> console.log("Server Started"));
