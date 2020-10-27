const express = require('express')
require('dotenv').config()

const app = express()
const port = 8000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  require('./src/build_html').send_HTML(res)
})

app.listen(port, () => {
  console.log(`Polly app listening on port ${port}!`)
})
