import glob from 'glob-promise'
import metaMarked from 'meta-marked'
import fs from 'fs'
import path from 'path'
import {GraphQLList, GraphQLInt} from 'graphql'
import PostType from '../types/PostType'

function getCollection() {
  const contentPath = global.contentPath + '/'

  return glob("/posts/**/*.md", {root: contentPath})
    .then((files) => files.map((file) => {
      let content = fs.readFileSync(file, 'utf-8')
        let document = metaMarked(content);
        document.path = path.relative(contentPath, file)
        console.log(file)
        return document
      })
    )
}

const posts = {
  type: new GraphQLList(PostType),
  args: {
    limit: {type: GraphQLInt},
    page: {type: GraphQLInt},
  },
  resolve : getCollection
}


export default posts