const nrwlConfig = require('@nrwl/react/plugins/webpack.js')

module.exports = config => {
  nrwlConfig(config)

  // Allow IE11 in Parallels to connect
  config.devServer.disableHostCheck = true

  return config
}
