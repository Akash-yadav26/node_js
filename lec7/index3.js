//get --> all action we made in website get in get request
//post --> if if we made username and password the data of username and password is store in post
//not commonly used
//put--> to put something on server like upload image and document
//patch--> to change existing entry in data on server
//delete-->to delete account or any thing on server
const http = require("http");
const fs = require("fs");
const url = require("url");
const myserver = http.createServer((req,res)=>{
    if(req.url ==="/favicon.ico")return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New req recieved\n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("log3.txt",log,(err,data)=>{
        switch(myUrl.pathname){
            case "/":
                if(req.method === 'GET') res.end("garuav");
                break;
            case "/about":
                const username = myUrl.query.myname;
                req.end(`Hi,${username}`);
                break;
            case "/search":
            const search = myUrl.query.search_query;
            res.end("Here are your results for"+ search);
            break;
            case "/signup" :
                if(req.method === 'GET') res.end('this is a signup form');
                else if(req.method === "POST"){
                    // db query
                    res.end("Success");
                }
            default:
                res.end("404 Not Found");
                        
        }
    });
})
myserver.listen(8000,()=> console.log("Server Started"));
