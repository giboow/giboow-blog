import promisify from 'es6-promisify'
import fs from 'fs'
import path from 'path'
import glob from 'glob-promise'


async function initRoutes() {
  const readdir = promisify(fs.readdir);

  const appPath = global.appPath;

  await glob('/**/*.js', {root: path.join(appPath, 'routes')})
    .then(files => files.map((file) => {
        let route = require(file).default;
        new route();
      })
    )

  /*
   let routesPath = path.join(__dirname, '/../routes')

   await readdir(routesPath).then((files) => {
   files.forEach((file) => {
   let route = require(path.join(routesPath, file)).default;
   new route();
   });
   }).catch(console.error);*/
};
export {initRoutes}

