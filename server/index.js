require('babel-register')

if (process.env.NODE_ENV === "prod") {
    require('./server.prod.js')
}else{
    require('./server.js')
}
