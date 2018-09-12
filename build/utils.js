const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const babel = require('babel-core')

exports.assetsPath = function (_path) {
  let assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    let loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {indentedSyntax: true}),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

// Get routes array from /docs/router/routes.js
exports.getDocumentRoutes = () => {
  const pathsWithoutI18n = ['/']
  const pathsWithI18n = [
    '/getting-started',
    '/i18n',
    '/button',
    '/button-group',
    '/collapse',
    '/dropdown',
    '/modal',
    '/tooltip',
    '/popover',
    '/multi-select',
    '/typeahead',
    '/date-picker',
    '/time-picker',
    '/alert',
    '/notification',
    '/message-box',
    '/navbar',
    '/tabs',
    '/breadcrumbs',
    '/pagination',
    '/progress-bar',
    '/carousel',
    '/affix',
    '/scroll-spy'
  ]
  const supportedLangs = ['zh-CN']
  let allPath = [...pathsWithoutI18n, ...pathsWithI18n]
  supportedLangs.forEach(lang => {
    allPath = [...allPath, ...pathsWithI18n.map(path => `/${lang}${path}`)]
  })
  // console.log(allPath)
  return allPath
}
