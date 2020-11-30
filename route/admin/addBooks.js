const Books = require('../../model/books')
const getDate = require('../../untils')
module.exports = async (req,res) => {
    let {book_name,author,createDate,imgPath} = req.body
    console.log(req.body)
    var data = await Books.find()
    let arr = []
    data.forEach(item => {
        arr.push(item.id)
    })
    let id = Math.max.apply(null, arr)+ 1
    if(imgPath) {
        Books.create({
            id: id,
            book_name: book_name,
            author: author,
            createDate: createDate.split("T")[0] || getDate(new Date()),
            imgPath: imgPath
        }).then(data => {
            res.send({msg: '添加成功'})
        }).catch(() => {
            res.send({msg: '添加失败'})
        })
    }else {
        Books.create({
            id: id,
            book_name: book_name,
            author: author,
            createDate: createDate.split("T")[0] || getDate(new Date())
        }).then(data => {
            res.send({msg: '添加成功'})
        }).catch(() => {
            res.send({msg: '添加失败'})
        })
    }

}