import glob from 'glob-promise'
import metaMarked from 'meta-marked'
import fs from 'fs'
import path from 'path'
import promisify from 'es6-promisify'
import {GraphQLList, GraphQLString, GraphQLNonNull} from 'graphql'
import PostType from '../types/PostType'

function getPost(parent, {path: filePath}, ast) {
  const contentPath = global.contentPath
  const fullPath = path.join(contentPath, filePath+'.md');

    const readFile = promisify(fs.readFile);

    return readFile(fullPath, 'utf-8').then(content => {
      let document = metaMarked(content);

      // transform path
      document.path = filePath

      return document
  })
}

const post = {
  type: PostType,
  args: {
    path: {type: new GraphQLNonNull(GraphQLString)},
  },
  resolve : getPost
}


export default post