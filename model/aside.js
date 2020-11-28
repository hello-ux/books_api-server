const mongoose = require('mongoose')
const asideSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    aside_name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
})
const Aside = mongoose.model('Aside', asideSchema)
// Aside.create({id: 0, aside_name: '图书管理', path: '/books'})
// Aside.create({id: 1, aside_name: '用户管理',path: '/users'})
module.exports = Aside