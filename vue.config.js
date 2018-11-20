const externals = process.env.NODE_ENV === 'production' ? { 'element-ui': 'element-ui'} : {}
const outputDir = process.env.NODE_ENV === 'publish' ? 'kz-table' : 'dist'

module.exports = {
  baseUrl: process.env.NODE_ENV === 'development' ? '/' :'/kz-table/',
  outputDir,
  configureWebpack: {
    externals
  }
}