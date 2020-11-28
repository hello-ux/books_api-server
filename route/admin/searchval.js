const Books = require('../../model/books')
module.exports = (req,res) => {
    let str = req.query.searchval
    let reg = new RegExp(req.query.searchval,'i')
    Books.find({'book_name': {$regex: reg}}).then(data => {
        res.send(data)
    })
}