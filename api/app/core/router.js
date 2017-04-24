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
};
export {initRoutes}

