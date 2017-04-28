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
    category: {
      type: GraphQLString,
      description: "Post category",
    },
    tags: {
      description: "Post date",
      type: new GraphQLList(GraphQLString),
      defaultValue: []
    },
    author: {
      description: "Post author",
      type: GraphQLString
    }
  }
})

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    html: {type: new GraphQLNonNull(GraphQLString)},
    meta: {type: PostMetaType},
    path: {type : GraphQLString}
  }
})

export default PostType