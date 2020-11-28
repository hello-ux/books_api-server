const Books = require('../../model/books')
module.exports = async (req,res) => {
    const dataTotal = await Books.find()
    const data = await Books.find().limit(5)
    if(req.query.id) {
        Books.find({_id: req.query.id}).then(data => {
            res.send(data)
        })
    }
   else if(req.query.pagesize) {
        console.log(req.query.pageNum)
        let size = req.query.pagesize - 0
        let page = (req.query.pageNum - 1 )*size
        const newData = await Books.find().skip(page).limit(size)
        res.send({
            data:newData,
            total: dataTotal.length,
            pagesize: size
        })
    }
else {
        res.send({
            data:data,
            total: dataTotal.length,
            pagesize: 5
        })
    }


}