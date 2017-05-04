import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import posts from './queries/posts';
import post from './queries/post';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      posts,
      post
    },
  }),
});

export default schema;
