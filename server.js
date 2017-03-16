import "babel-core/register"
import "babel-polyfill"

import path from 'path'
import express from 'express'
import {initRoutes} from './api/core/router'
import schema from './api/data/schema'
import graphqlHTTP from 'express-graphql'

import next from 'next'

class Server {
  app;

  server;

  constructor() {
    let dev = this.isDev();
    this.app = next({dev})
  }

  isDev() {
    return process.env.NODE_ENV !== 'production'
  }

  start() {

    this.app.prepare()
      .then(() => express())
      .then(server => this.server = server)
      // init API
      .then((server) => this.initApiRoutesPromise(server))
      //init next routes
      .then((server) => this.initFrontRoutesPromise(server))
      //launch server
      .then(server => {
        server.listen(3000, function () {
          console.log('Example app listening on port 3000!');
        });

        return server
      });
  }

  initApiRoutesPromise(server) {
    return new Promise(resolve => {
      initRoutes()

      server.use('/graphql', graphqlHTTP({
          schema: schema,
          graphiql: this.isDev()
        })
      )

      resolve(server)
    })

  }

  initFrontRoutesPromise(server) {
    return new Promise(resolve => {
      const handle = this.app.getRequestHandler()

      server.get('*', (req, res) => {
        return handle(req, res)
      })

      resolve(server)
    })
  }

}


global.rootPath = __dirname;
global.appPath = path.join(__dirname, 'app')
global.contentPath = path.join(__dirname, 'content')
global.server = new Server();
global.server.start();