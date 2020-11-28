// 格式化日期
const getDate = (date) => {
    const yy = date.getFullYear()
    const mm = date.getMonth() + 1
    const dd = date.getDate()
    return yy+ '-'+ mm + '-'+ dd
}
module.exports = getDate