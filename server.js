import "babel-core/register"
import "babel-polyfill"

import path from 'path'
import express from 'express'
import {initRoutes} from './api/core/router'
import schema from './api/data/schema'
import graphqlHTTP from 'express-graphql'

import PrettyError from 'pretty-error'

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
        let port = this.isDev() ? 3001 : 3000;
        server.listen(port, function () {
          console.log(`Example app listening on port ${port}!`);
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

      let prettyError = new PrettyError();

      // and use it for our app's error handler:
      server.use(function(err, req, res, next){
        console.log(prettyError.render(err));
        next();
      });

      prettyError.skipNodeFiles(); // this will skip events.js and http.js and
      prettyError.skipPackage('express'); // similar core node files

      resolve(server)
    })
  }

}


global.rootPath = __dirname;
global.appPath = path.join(__dirname, 'app')
global.contentPath = path.join(__dirname, 'content')
global.server = new Server();
global.server.start();