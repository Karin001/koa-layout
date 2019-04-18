const router = require('koa-router')()
const controller = require('./controller')
router.post('/upload', async (ctx,next) => {
    await controller.upload(ctx)
    next()
})
router.get('/', async (ctx,next) => {
    await controller.view(ctx)
    next()
})
module.exports = router.routes()