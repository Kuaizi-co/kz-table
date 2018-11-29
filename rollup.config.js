var commonjs = require('rollup-plugin-commonjs')
const babel = require("rollup-plugin-babel")
const pkg = require('./package.json')
const mode = (process.env.MODE || 'default').trim()
const now = (new Date()).toLocaleString() || ''
console.log('😎 building ' + mode)

const banner = `
/**
* ${pkg.name}
* -------------
* VERSION: v${pkg.version}
* UPDATE: ${now.split(' ')[0]}
*
* by tomieric <tomieric@gmail.com> 
* (c) www.kuaizi.ai
*/
`

const config = {
  default: {
    output: {
      file: 'dist/kzTable.js',
      format: 'cjs',
      banner
    },
    plugins: [
      babel({
        babelrc: false,
        presets: [['es2015', { modules: false }]],
      })
    ]
  },
  umd: {
    output: {
      file: 'dist/kzTable.umd.js',
      format: 'umd',
      name: 'kzTable',
      banner
    },
    plugins: [
      babel({
        babelrc: false,
        presets: [['es2015', { modules: false }]],
      })
    ]
  },
  esm: {
    output: {
      file: 'dist/kzTable.esm.js',
      format: 'es',
      banner
    },
    plugins: []
  },
  common: {
    output: {
      file: 'dist/kzTable.common.js',
      format: 'cjs',
      banner
    },
    plugins: [
      commonjs({
        include: 'node_modules/**',
      }),
      babel({
        babelrc: false,
        presets: [['es2015', { modules: false }]],
      })
    ]
  }
}

export default {
  input: './kz-table.js',
  output: Object.assign(config[mode].output, {
    globals: {
      'element-ui': 'element-ui'
    }
  }),
  external: [ 'element-ui' ],
  plugins: config[mode].plugins
}