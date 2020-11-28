const Aside = require('../../model/aside')
module.exports = async (req,res) => {
    let data = await Aside.find()
    res.send(data)
}