const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { PROJECT_PATH } = require('../constant')
const WebpackBar = require('webpackbar')
const { isDevelopment, isProduction } = require('../env')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const getCssLoaders = (module) => {
  const cssLoaders = [
    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        url: true,
        modules: module ? {
          // mode: 'global',
          // auto: /\.module\.less$/i,
          // exportGlolals: false,
          localIdentName: '[local]--[hash:base64:5]',
          localIdentContext: path.resolve(PROJECT_PATH, "src"),
        } : false,
        sourceMap: isDevelopment
      }
    }
  ]

  isProduction && cssLoaders.push({
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                grid: true
              }
            }
          ]
        ]
      }
    }
  })

  return cssLoaders
}

module.exports = {
  entry: {
    index: path.resolve(PROJECT_PATH, './src/index.tsx')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_PATH, './public/index.html')
    }),
    new WebpackBar({
      name: 'Link Startou!!!',
      color: '#52c41a'
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       context: 'public',
    //       from: '*',
    //       to: path.resolve(PROJECT_PATH, './dist/public'),
    //       toType: 'dir',
    //       globOptions: {
    //         dot: true,
    //         gitignore: true,
    //         ignore: ['**/index.html']
    //       }
    //     }
    //   ]
    // }),
    new CleanWebpackPlugin()
  ],
  cache: {
    type: 'filesystem',     // 缓存类型，值为 memory 或 filesystem，分别代表基于内存的临时缓存，以及基于文件系统的持久化缓存
    buildDependencies: {
      config: [__filename]  // 当配置文件内容或配置文件依赖的模块文件发生变化时，当前的构建缓存即失效`
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [...getCssLoaders()]
      },
      {
        test: /\.less$/,
        exclude: /src/,
        use: [
          ...getCssLoaders(),
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDevelopment,
              lessOptions: {
                globalVars: {
                  'testcolor': 'red',    // ten可以是ten，也可以是@ten，效果一样，下同
                },
                modifyVars: {
                  // 'primary-color': '#1DA57A',
                  // 'link-color': '#1DA57A',
                  // 'border-radius-base': '2px'
                },
                javascriptEnabled: true,
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          ...getCssLoaders(true),
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDevelopment,
              lessOptions: {
                globalVars: {
                  'testcolor': 'red',    // ten可以是ten，也可以是@ten，效果一样，下同
                },
                modifyVars: {
                  // 'primary-color': '#1DA57A',
                  // 'link-color': '#1DA57A',
                  // 'border-radius-base': '2px'
                },
                javascriptEnabled: true,
              }
            }
            // }, {
            //   loader: 'style-resources-loader',
            //   options: {
            //     patterns: [ // 只有一条时也可以写成对象形式
            //       path.resolve(PROJECT_PATH, 'src/assets/styles/common.less'),
            //       // path.resolve(PROJECT_PATH, 'path/to/scss/mixins/*.less'),
            //     ],
            //     // injector: 'append' // 如果在样式文件之后导入就加此行配置
            //   }
          }
        ]
      },
      {
        test: /\.styl/,
        use: [
          ...getCssLoaders(),
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: isDevelopment,
            }
          }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          }
        }
      },
      {
        test: [/\.(eot|svg|ttf|woff|woff2?)$/],
        type: 'asset/resource'
      },
      // {
      //   test: [/\.json$/],
      //   type: 'asset/inline'
      // }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': path.resolve(PROJECT_PATH, 'src'),
      '@layout': path.resolve(PROJECT_PATH, 'src/layout'),
      '@assets': path.resolve(PROJECT_PATH, 'src/assets'),
      '@comps': path.resolve(PROJECT_PATH, 'src/components'),
      '@pages': path.resolve(PROJECT_PATH, 'src/pages'),
      '@store': path.resolve(PROJECT_PATH, 'src/store'),
      '@locales': path.resolve(PROJECT_PATH, 'src/locales'),
      '@routes': path.resolve(PROJECT_PATH, 'src/routes'),
      '@utils': path.resolve(PROJECT_PATH, 'src/utils'),
    }
  },
}