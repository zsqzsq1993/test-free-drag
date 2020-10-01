const express = require('express')

const fs = require('fs')

const https = require('https')

const app = express()

const port = 9003

app.use(express.static('./dist'))

const cert = fs.readFileSync('/etc/nginx/1_dollylosingweight.today_bundle.crt')

const key = fs.readFileSync('/etc/nginx/2_dollylosingweight.today.key')

const credential = {cert, key}

const httpsServer = https.createServer(credential, app)

httpsServer.listen(port, () => {
    console.log('listen at https://localhost:' + port)
})
