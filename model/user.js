const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
// 创建集合规则
const userSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    id: {
        required: true,
        type: Number
    }
})
// 创建集合
const User = mongoose.model('User',userSchema)
// // 向集合插入文档
// async function createUser() {
//     let salt =await bcrypt.genSalt(10)
//     let pass =await bcrypt.hash('123456',salt)
//     User.create({
//         id: 1,
//         email: '123456@qq.com',
//         password: pass
//
//     })
// }
// createUser()
module.exports = User