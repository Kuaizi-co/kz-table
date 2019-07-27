const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const pkg = require('./package.json')
const now = (new Date()).toLocaleString() || ''

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
  'index': {
    commonjs: {
      output: {
        file: 'dist/index.js',
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
    },
    esm: {
      output: {
        file: 'dist/index.esm.js',
        format: 'es',
        banner
      },
      plugins: []
    }
  },

  'table': {
    commonjs: {
      output: {
        file: 'dist/kz-table.js',
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
    },
    esm: {
      output: {
        file: 'dist/kz-table.esm.js',
        format: 'es',
        banner
      },
      plugins: []
    }
  },

  'table-column': {
    commonjs: {
      output: {
        file: 'dist/kz-table-column.js',
        format: 'cjs',
        banner
      },
      plugins: [
        babel({
          babelrc: false,
          presets: [['es2015', { modules: false }]],
        }),
        commonjs()
      ]
    },
    esm: {
      output: {
        file: 'dist/kz-table-column.esm.js',
        format: 'es',
        banner
      },
      plugins: []
    }
  }
}

export default ['index', 'table', 'table-column'].reduce((prev, file) => {
  const c = Object.keys(config[file]).map(mode => ({
    input: `./src/${file}.js`,
    output: Object.assign(config[file][mode].output, {
      globals: {
        'element-ui': 'element-ui'
      }
    }),
    external: [ 'element-ui' ],
    plugins: config[file][mode].plugins
  }))
  return prev.concat(c)
}, [])