const Books = require('../../model/books')
module.exports = (req,res) => {
    let arr = req.query.arrId
    Books.remove({_id: {$in: arr}}).then(() => {
        res.send({msg: '删除成功'})
    }).catch(() => {
            res.send({msg: '删除失败'})
        })

}