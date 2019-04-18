const {Schema,model} = require('mongoose')
const userInfoSchema = new Schema({
    name:String,
    email:String,
    message:String
})
const UserInfo = model('UserInfo',userInfoSchema)
module.exports = UserInfo