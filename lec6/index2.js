// hhtps --> hyper text transfer protocol secure -> they have ssl certificate
// http --> hyper text transfer protocol--> they do not have ssl certificate

const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico") return res.end();
 const log = `${Date.now()}: ${req.url} new req recieved\n`
 const myurl = url.parse(req.url,true);
 console.log(myurl);
    fs.appendFile("log2.txt",log,(err,data)=>{
        // res.end("end url") you can aslo use a switch case
        switch(myurl.pathname){
            case '/': res.end("Homepage");
            break
            case '/about': 
            const username = myurl.query.myname;
            res.end(`Hi,${username}`);
            break
            case "/search":
                const search = myurl.query.search_query;
                res.end("here are your results for" + search);
            default: res.end("404 Not found");
        }
    })
})
myserver.listen(8000,()=> console.log("server started !"));
