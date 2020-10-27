function buildHead (params) {
  let html = '<head>\n'
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
        html += '<link rel="stylesheet" href="' + sheet + '"\\>\n'
      })
    }

    html += '</head>\n'
    return html
  }
}

module.exports = {
  build_head: buildHead
}
