const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
require('./model/index')
// require('./model/aside')
// require('./model/books')
const App = express()
// 设置允许跨域访问该服务
App.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', ['Content-Type','mytoken']);
    next();
});
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended: false}))

// 配置session
App.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'secret key'
}))

// 配置路由
const router = require('./route/index')
App.use('/api', router)
App.listen(8999)
console.log('服务器创建成功')
