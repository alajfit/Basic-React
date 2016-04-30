# Basic-React
Basic React Test

* To run Dev Server - webpack-dev-server --content-base src

* View with reload in browser - http://localhost:8080/webpack-dev-server/index.html

* If we add the below to the scripts in NPM package, we can then use "npm run dev" for livereload
** Pointing to the node_modules bin removes the need to install dev server globally

"scripts": {
  "dev": "./mode_modules/.bin/webpack-dev-server --content-base src --inline --hot",
  "test": "echo \"Error: no test specified\" && exit 1"
}


# Important Notes

* Any class element must only have one root element NB !
* Templates use single curly brackets for replacement
