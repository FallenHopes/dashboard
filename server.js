const express = require('express')
const app = express()

app.listen(5000, err => {
    if (err){
        console.log(err)
        process.exit(1)
    }
    console.log('Server started...')
})