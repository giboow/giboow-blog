import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql'

import GraphQLDate from 'graphql-date'

const PostMetaType = new GraphQLObjectType({
  name: 'Meta',
  fields: {
    title: {
      type: GraphQLString,
      description: "Post title",
    },
    date: {
      type: GraphQLDate,
      description: "Post date",
    },
    tags: {
      description: "Post date",
      type: new GraphQLList(GraphQLString),
      defaultValue: []
    }
  }
})

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    html: {type: new GraphQLNonNull(GraphQLString)},
    meta: {type: PostMetaType}
  }
})

export default PostType