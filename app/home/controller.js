function renderHomePage(ctx,next){
    ctx.render('home')
    next()
}
module.exports = {
    renderHomePage
}