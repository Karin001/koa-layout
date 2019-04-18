const UserInfo = require('./model')
exports.upload = async function (ctx) {
    try {
        const data =ctx.request.body
        // do data validation
        console.log('data1')
        console.log('data',JSON.stringify(data))
        await UserInfo.create(data)
        ctx.status = 200
        ctx.body = {
            success: true
        }
    } catch (error) {
        ctx.status = 403
        //console.log('errorinfo',errorInfo)
        ctx.body = {
            success: false,
            error
        }
    }
}
exports.view = async function (ctx) {
    try {
        const list = await UserInfo.find()
        ctx.status = 200
        ctx.body = {
            success: true,
            payload:list
        }
    } catch (error) {
        ctx.status = 403
        ctx.body = {
            success: false       
        }
    }
}