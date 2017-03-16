import glob from 'glob-promise'
import metaMarked from 'meta-marked'
import fs from 'fs'
import path from 'path'

const contentPath = global.contentPath + '/'


async function getCollection() {
  return glob("/posts/**/*.md", {root: contentPath})
    .then((files) => files.map((file) => {
        let content = fs.readFileSync(file, 'utf-8')
        let document = metaMarked(content);
        document.path = path.relative(contentPath, file)
        return document
      })
    )
}
export {getCollection}
