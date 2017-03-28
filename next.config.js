const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

module.exports = {
  webpack: (config, {dev}) => {
    // Perform customizations to config
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
      ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
      ,
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );


    config.resolve.alias = {
      moment: 'moment'
    };

    config.plugins.push(
      new webpack.ContextReplacementPlugin(/^\.\/locale$/, context => {
        // check if the context was created inside the moment package
        if (!/\/moment\//.test(context.context)) {
          return
        }
        // context needs to be modified in place
        Object.assign(context, {
          // include only japanese, korean and chinese variants
          // all tests are prefixed with './' so this must be part of the regExp
          // the default regExp includes everything; /^$/ could be used to include nothing
          regExp: /^\.\/(fr|en)/,
          // point to the locale data folder relative to moment/src/lib/locale
          request: '../../locale'
        })
      })
    );

    // Important: return the modified config
    return config
  }
}