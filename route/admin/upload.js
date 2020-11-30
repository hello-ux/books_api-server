const path = require('path')
const baseURL = require('../../config/config')
const formidable = require('formidable')
module.exports = (req,res) => {
        const form = new formidable.IncomingForm();
        //创设置文件上传路径
        form.uploadDir = path.join(__dirname,'../','../', 'public','upload');
        form.keepExtensions = true;
        form.parse(req, async(err, fields, files) => {
                let index = files.file.path.lastIndexOf('\\')
                let imgStr = files.file.path.substr(index+1)
                let imgPath = baseURL + imgStr
                res.send(imgPath)

        })

}