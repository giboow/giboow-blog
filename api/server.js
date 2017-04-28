import express from 'express'
import {initRoutes} from './core/router'
import schema from './data/schema'
import graphqlHTTP from 'express-graphql'
import cors from 'express-cors'


export default class Server {
  app;

  constructor() {
    this.app = express();
  }

  start() {

      this.app.get('/posts/*', (req, res) => {
          return app.render(req, res, '/b', req.query)
      });
    initRoutes()

    let corsOrigin = [];
    if(this.isDev()) {
      corsOrigin.push('*')
    }

    this.app.use(cors({
      allowedOrigins: corsOrigin
    }));
    this.app.use('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true
      })
    );




    this.app.listen(3001, function () {
      console.log('Example app listening on port 3001!');
    });
  }
}