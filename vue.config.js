const externals = process.env.MODE === 'lib' ? { 'element-ui': 'element-ui'} : {}
const outputDir = process.env.NODE_ENV === 'build' ? 'kz-table' : 'dist'

module.exports = {
  baseUrl: process.env.NODE_ENV === 'development' ? '/' :'/kz-table/',
  outputDir,
  configureWebpack: {
    externals
  }
}