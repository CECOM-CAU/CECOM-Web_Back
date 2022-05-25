//server.js
const http = require('http');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const server = http.createServer(app);

const noticeRouter = require("./router/notice");

const maria = require('./database/connect/maria');

app.use("/notice",noticeRouter);


const PORT = 8080;

app.use(cors()); // cors 미들웨어를 삽입합니다.

app.get('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다.
  res.send({message:'hello'});
});

app.get("/send_mysql", async function(req,res){

  maria.query('SELECT * FROM student',function(error,result,fields){
    if(error){
      console.log(error);
    }
    res.send(result);
  })
})


server.listen(PORT, ()=>{
  console.log('server is running on ${PORT}')
})
