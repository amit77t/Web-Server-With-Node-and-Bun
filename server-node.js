const http= require("http");

const hostname='127.0.0.1';

const port=3000;

const server=http.createServer((req, res)=>{
   if  (req.url=== "/"){    //if the url is equal to the root{
     res.statusCode=200;
     res.setHeader('Content-Type', 'text/plain')
     res.end("Hello World\n");
   }
   else  if(req.url==="/about"){
       res.statusCode=200;
       res.setHeader('Content-Type', 'text/plain')
       res.end("About Page\n")
   }
   else{
       res.statusCode=404;
       res.setHeader('Content-Type', 'text/plain')
       res.end("404: Page Not Found\n")
   }
})


server.listen(port, hostname, ()=>{
    console.log(`Server is listening to http://${hostname}:${port}`);
});