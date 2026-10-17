'use strict';
const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'index.html'));
const server=http.createServer((req,res)=>{
  if(req.url==='/'||req.url==='/index.html'){
    res.writeHead(200,{'content-type':'text/html; charset=utf-8','cache-control':'no-cache','x-content-type-options':'nosniff','referrer-policy':'no-referrer'});res.end(html);
  }else if(req.url==='/health'){
    res.writeHead(200,{'content-type':'text/plain; charset=utf-8'});res.end('ok');
  }else{res.writeHead(404,{'content-type':'text/plain; charset=utf-8'});res.end('Not found');}
});
server.listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('CONVERGENCE listening on '+server.address().port));
