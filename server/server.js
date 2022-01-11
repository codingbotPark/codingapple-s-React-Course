const express = require('express')
const path = require('path');
const app = express();

const http = require('http').createServer(app)
http.listen(8080,function (){
    console.log('listending on 8080')
})


//미들웨어, html,css,js 파일을 저버에서 잘 보내고 싶다면 static파일들이 어디에 담겼는지 알려(기록)주어야 한다
app.use(express.static(path.join(__dirname,'../shopProject/build')))

//누군가 메인페이지에 접속하면 index.html파일을 보낸다
app.get('*',function (요청,응답){
    응답.sendFile(path.join(__dirname, '../shopProject/build/index.html'))
})