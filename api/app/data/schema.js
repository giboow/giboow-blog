import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import posts from './queries/posts';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      posts,
    },
  }),
});

export default schema;
