const express = require('express')

const admin = express.Router()
// 登录功能
admin.post('/login', require('./login'))

// 侧边栏
admin.get('/aside', require('./admin/getAside'))
// 书籍列表
admin.get('/books',require('./admin/getBooks'))

// 查询关键字
admin.get('/searchval', require('./admin/searchval'))
// 添加图书
admin.post('/addbooks', require('./admin/addBooks'))
// 更新图书
admin.post('/updatebook', require('./admin/updateBook'))
// 删除图书
admin.delete('/deleteBook',require('./admin/deleteBook'))
module.exports = admin