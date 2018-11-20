const externals = process.env.NODE_ENV === 'production' ? { 'element-ui': 'element-ui'} : {}
const outputDir = process.env.NODE_ENV === 'publish' ? 'docs' : 'dist'
console.log(process.env.NODE_ENV, process.env.NODE_ENV === 'publish', outputDir)

module.exports = {
  baseUrl: process.env.NODE_ENV === 'development' ? '/' :'/kz-table/',
  outputDir,
  configureWebpack: {
    externals
  }
}