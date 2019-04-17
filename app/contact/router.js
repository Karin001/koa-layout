const router = require('koa-router')()
const ctrContact = require('./controller').renderContactPage
router.get('/',ctrContact)
module.exports = router.routes()