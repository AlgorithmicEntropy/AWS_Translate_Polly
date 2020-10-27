function includeSecrets () {
  const secretScripts = []
  secretScripts.push('<script>var accessKey = "' + process.env.ACCESS_KEY + '";</script>\n')
  secretScripts.push('<script>var secretKey = "' + process.env.SECRET_KEY + '";</script>\n')
  secretScripts.push('<script>var sessionToken = "' + process.env.SESSION_TOKEN + '";</script>\n')
  return secretScripts
}

module.exports = {
  include_secrets: includeSecrets
}
