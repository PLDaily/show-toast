// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'test/*.js'
    ],
    exclude: [],
    preprocessors: {
      'test/*.js': ['webpack'],
      'index.js': ['coverage']
    },
    reporters: ['progress', 'coverage', 'coveralls'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                "presets": ["es2015"],
                "plugins": [["istanbul"], ["transform-runtime"]]
              }
            }
          }
        ]
      }
    },
    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/'
    },
    plugins: [
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-mocha',
      'karma-chai',
      'karma-coveralls'
    ],
  })
}