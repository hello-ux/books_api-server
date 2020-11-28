const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/book',{ useNewUrlParser: true,useUnifiedTopology: true }).then(() => {
    console.log('数据库连接成功')
}).catch((res) => {
    console.log(res)
})