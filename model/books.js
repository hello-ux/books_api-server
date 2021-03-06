const mongoose = require('mongoose')
const getDate = require('../untils')
const baseURL = require('../config/config')
const bookSchema = new mongoose.Schema({
    book_name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createDate: {
        type: String
    },
    imgPath: {
        type: String,
        default: baseURL+'default.jpg'
    }
})

const Books = mongoose.model('Books', bookSchema)
// Books.create({

//     book_name: '左道倾天',
//     author: '风凌天下',
//     createDate: getDate(new Date())
// })

module.exports = Books
