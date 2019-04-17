require("dotenv").config();
const Koa = require('koa')
const path = require('path')
const router = require('./routing')
const koaBody = require('koa-body')
const render = require('koa-art-template')

const app = new Koa()
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});
app.use(require('koa-static')(path.join(__dirname, 'public')))
app.use(koaBody())
app.use(router.routes())

const start = async function(){
    await app.listen(process.env.PORT)
    console.log("listen!")
}
start()