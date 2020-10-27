var fs = require('fs')

const start = '<!DOCTYPE html><html>'
const end = '</html>'

const scripts = [
  'https://sdk.amazonaws.com/js/aws-sdk-2.779.0.min.js'
]

function sendHTML (res) {
  const secretScripts = (require('./secrets').include_secrets())
  const params = {
    scripts: scripts,
    secrets: secretScripts
  }
  let html = start
  html += require('./build_head').build_head(params)
  fs.readFile('./html/body.html', 'utf8', function (err, data) {
    if (err) throw err
    html += data
    html += end
    res.write(html)
    res.end()
  })
}

module.exports = {
  send_HTML: sendHTML
}
