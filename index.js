require("dotenv").config();

const Koa = require('koa')
const path = require('path')
const router = require('./routing')
const koaBody = require('koa-body')
const render = require('koa-art-template')
const database = require('./database')
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
    try {
        await database.connect()
        console.log('Connected to database')
        const port = process.env.PORT
        await app.listen(port)
        console.log(`Connected on port: ${port}`)
      } catch (error) {
        console.log('Something went wrong')
        console.log(error)
      }
}
start()