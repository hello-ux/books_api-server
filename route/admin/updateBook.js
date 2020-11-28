const Books = require('../../model/books')
module.exports = (req,res) => {
    let {id,book_name,author,createDate} = req.body
    Books.updateOne({_id: id},{$set: {
            book_name: book_name,
            author: author,
            createDate: createDate.split("T")[0]
        }}).then(data => {
        console.log(data)
        res.send({msg: '修改成功'})
    }).catch(() => {
        res.send({msg: '修改失败'})
    })
}