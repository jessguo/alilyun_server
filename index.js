var express = require('express')

var app = express()

var port = 3000
app.use(express.static('./public'))

app.listen(port, function (error) {
    if (error) {
        console.log(error)
        return
    }
    console.log(`start port in ${port}`)
})