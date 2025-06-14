const express = require("express");
const app = express();
app.get('/',(req,res)=>{
    res.send("heelo wlecome to server" + req.query.name);
})
app.listen(8000,()=>console.log("server started"));
