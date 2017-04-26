// var express = require('express');
// var app = express();
//
// var fs = require('fs');
  // var metaMarked = require('meta-marked');
//
// /**
//  * List of posts
//  */
// app.get('/posts', function (req, res) {
//   var glob = require("glob")
//
// // options is optional
//   var collection = [];
//   glob("posts/**/*.md", {root : __dirname}, function (er, files) {
//     res.send(files)
//   });
//   /*var readme = fs.readFileSync(__dirname + '/posts/readme.md', 'utf-8');
//   var document = metaMarked(readme);
//   res.json({
//     html: document.html,
//     meta: document.meta
//   });*/
// });

import "babel-core/register"
import "babel-polyfill"

import Server from './server'
import path from 'path'


global.rootPath = __dirname;
global.appPath = path.join(__dirname, 'app')
global.contentPath = path.join(__dirname, 'content')
global.server = new Server();
global.server.start();