/**
 *  Libraries
 */
import path from 'path'
import Express from 'express'
import webpack from 'webpack'
import compression from 'compression';


/**
 *  Middlewares
 */
import webpackDevMiddleware from 'webpack-dev-middleware'


/**
 *  React Libraries
 */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import {Helmet} from 'react-helmet';


/**
 *  Components
 */
import App from '../src/common/App'
import store from '../src/store/store.prod'


/**
 *  Variables
 */
import webpackConfig from '../config/webpack.prod.config'
const app = new Express()
const port = 80
const compiler = webpack(webpackConfig)


/**
 *  User compression
 */
app.use(compression())


/**
 *  Set static path
 */
app.use(Express.static(path.resolve(__dirname, '../dist')));


/**
 * Use webpack-dev-middleware to pass the compiler parameters/options
 * @https://github.com/webpack/webpack-dev-middleware
 *
 * Use webpack-hot-middleware to hot reload the elements on dev
 * @https://github.com/glenjamin/webpack-hot-middleware
 */
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))


/**
 * Render handler 
 * @param  {object} req [HTTP request done to the server]
 * @param  {object} res [Response sent to user]
 */
const handleRender = (req, res) => {

    const finalState = store.getState()
    const context = {}

    const html = renderToString(
          <Provider store={store}>
              <StaticRouter location={req.url} context={context}>
                  <App />
              </StaticRouter>
          </Provider>
        )

    res.send(renderFullPage(html, finalState))
}

/**
 * HTML document to be rendered on the response
 * @param  {string} html           []
 * @param  {object} preloadedState [State loaded by the server to be stored on the first load]
 * @return {string}                [returns an entire ready-to-load HTML]
 */
const renderFullPage = (html, preloadedState) => {

  const helmet = Helmet.renderStatic();
  return `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body>
        <div id="app">${html}</div>
        <script> window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')} </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `
}


app.use(handleRender);


/**
 * Init server on Localhost
 * @param  {string} port   [Server port]
 */
app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}.`)
    console.info(`==> 🌎  Open up http://[serverIP]/ in your browser.`)
  }
})