const Books = require('../../model/books')
module.exports = (req,res) => {
    let {id,book_name,author,createDate,imgPath} = req.body
    Books.updateOne({_id: id},{$set: {
            book_name: book_name,
            author: author,
            createDate: createDate.split("T")[0],
            imgPath: imgPath
        }}).then(data => {
        console.log(data)
        res.send({msg: '修改成功'})
    }).catch(() => {
        res.send({msg: '修改失败'})
    })
}