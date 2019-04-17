const router = require('koa-router')()
const contact = require('../app/contact/router')
const home = require('../app/home/router')

router.use('/contact',contact)
router.use('/home',home)

module.exports = router