const User = require('../model/user')
const bcrypt = require('bcryptjs')
module.exports = (req,res) => {
    let { email, password } = req.body
    if(email.trim().length == 0 || password.trim().length ==0) {
        res.status(400).send({msg: '邮箱或密码错误'})
    }

    User.findOne({email}).then( async (data) => {
        let isEqual = bcrypt.compare(password,data.password)
        if(isEqual) {
            let salt = await bcrypt.genSalt(10)
            res.send({msg: '登陆成功',state: 200,token: salt})
        }
    })
}