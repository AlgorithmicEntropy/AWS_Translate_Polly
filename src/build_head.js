function buildHead (params) {
  let html = '<head>\n'

  // hardcode no index for now
  html += '<meta name="robots" content="noindex">\n'

  if (params.scripts) {
    params.scripts.forEach(script => {
      html += '<script src="' + script + '"></script>\n'
    })

    if (params.secrets) {
      params.secrets.forEach(secret => {
        html += secret + '\n'
      })
    }

    if (params.css) {
      params.css.forEach(sheet => {
        html += '<link type="text/css" rel="stylesheet" href="' + sheet + '"\\>\n'
      })
    }

    html += '</head>\n'
    return html
  }
}

module.exports = {
  build_head: buildHead
}
