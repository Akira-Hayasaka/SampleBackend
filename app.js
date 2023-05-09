var express = require("express");
const cors = require('cors');
const port = process.env.PORT || 3000;

var app = express();

const corsOptions = {
    origin: 'http://localhost:${port}', // 許可するドメイン
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 許可する HTTP メソッド
    allowedHeaders: ['Content-Type', 'Authorization'], // 許可するヘッダー
    credentials: true, // クレデンシャル（Cookieなど）を許可する場合は true
};

app.use(cors(corsOptions));

var server = app.listen(port, function() {
    console.log("Node.js is listening to PORT:" + server.address().port);
});


// 写真のサンプルデータ
var photoList = [
    {
        id: "001",
        name: "photo001.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo001.jpg"
    },{
        id: "002",
        name: "photo002.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo999.jpg"
    }
]

// 写真リストを取得するAPI
app.get("/api/photo/list", function(req, res, next){
    console.log("484");
    res.json(photoList);
});