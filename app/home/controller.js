const rq = require('request-promise-native')
async function renderHomePage(ctx, next) {
    const options = {
        uri: 'http://localhost:3000/api/userInfo',
        json: true // Automatically parses the JSON string in the response
    };
        let body = await rq(options)

         ctx.render('home', {
             list:body.payload
         })
       next()
   
}
module.exports = {
    renderHomePage
}