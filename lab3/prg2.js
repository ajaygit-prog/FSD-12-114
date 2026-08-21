import http from 'http' 

const server  = http.createServer((req,res) =>{
    console.log('server hit by client') ;
    res.write("<h1>Hello Client") ;
    res.end() ;
}); 
server.listen(4444, ()=> console.log("server is running ...")); 