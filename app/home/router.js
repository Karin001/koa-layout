const router = require('koa-router')()
const ctrHome = require('./controller').renderHomePage
router.get('/',ctrHome)
module.exports = router.routes()