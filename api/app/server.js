import express from 'express'
import {initRoutes} from './core/router'
import schema from './data/schema'
import graphqlHTTP from 'express-graphql'


export default class Server {
  app;

  constructor() {
    this.app = express();
  }

  start() {

    initRoutes()

    this.app.use('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true
      })
    )

    this.app.listen(3001, function () {
      console.log('Example app listening on port 3001!');
    });
  }
}