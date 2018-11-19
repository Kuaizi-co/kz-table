module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/kz-table/'
    : '/',
  configureWebpack: {
    externals: {
      'element-ui': 'element-ui'
    }
  }
}