# Client Protoype

This is Mymoria protoype for Case Management Application.

### Get Started with DOCKER
I would personally recommend to go ahead and install docker on your machine which is pretty easy to install and then simply run following 
commands and magically all what we need to start on development environment is ready and open your browser and start developing.

One of the main advantages of using Docker is that we are pretty sure our environment is similar to each other, therefore, you are not worried about debugging to get this app to work. We are also able to deploy this Docker later. However, this is just designed for development environment for now. 

Please after making sure Docker is up and running on your machine go ahead and hit the commands below: 

1. make sure you are in root app directory into CLIENT folder.
2. `docker-compose up`  start building image and run container then
3. Open your browser and hit http://localhost:3030 and start editing files. 

### Get Started on your local Machine if you prefer
**Make sure about Initial Machine Setup below and then Install Yarn**. `https://yarnpkg.com/docs/install` 

**Run the setup script**. `npm run setup`
This will run the automated build process, start up a webserver, and open the application in your default browser.

**Start app**. `yarn start OR npm start`

###Initial Machine Setup
1. **Install [Node 4.0.0 or greater](https://nodejs.org)** - (5.0 or greater is recommended for optimal build performance). Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [n](https://github.com/tj/n). I personally recommend to use node 7+ and I have setup my docker-node with this version.
2. **Install [Git](https://git-scm.com/downloads)**. 
3. On a Mac? You're all set. If you're on Linux or Windows, complete the steps for your OS below.  
 
**On Linux:**  

 * Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) on the number of files Linux will watch. [Here's why](https://github.com/coryhouse/react-slingshot/issues/6).    
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` 

**On Windows:** 
 
* **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.
* **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows. [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler. Or, if you already have Visual Studio installed: Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop. The C++ compiler is used to compile browser-sync (and perhaps other Node modules).

### Commands

```json
    "setup": "yarn install",
    "start-message": "babel-node tools/startMessage.js",
    "prestart": "npm-run-all --parallel start-message remove-dist",
    "start": "npm-run-all --parallel test:watch open:src lint:watch",
    "open:src": "babel-node tools/srcServer.js",
    "open:dist": "babel-node tools/distServer.js",
    "lint": "esw webpack.config.* src tools --color",
    "lint:watch": "npm run lint -- --watch",
    "clean-dist": "npm run remove-dist && mkdir dist",
    "remove-dist": "rimraf ./dist",
    "prebuild": "npm run clean-dist && npm run lint && npm run test",
    "build": "babel-node tools/build.js && npm run open:dist",
    "test": "mocha tools/testSetup.js \"src/**/*.spec.js\" --reporter progress",
    "test:cover": "babel-node node_modules/isparta/bin/isparta cover --root src --report html node_modules/mocha/bin/_mocha -- --require ./tools/testSetup.js \"src/**/*.spec.js\" --reporter progress",
    "test:cover:travis": "babel-node node_modules/isparta/bin/isparta cover --root src --report lcovonly _mocha -- --require ./tools/testSetup.js \"src/**/*.spec.js\" && cat ./coverage/lcov.info | node_modules/coveralls/bin/coveralls.js",
    "test:watch": "npm run test -- --watch",
    "open:cover": "npm run test:cover && open coverage/index.html"
```

###Technologies
This app offers a rich development experience using the following technologies:

| **Tech** | **Description**
|----------|-------|
| [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.   
| [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).
| [React Router](https://github.com/reactjs/react-router) | A complete routing library for React 
| [React Toolbox](http://react-toolbox.com/) | React Toolbox is a set of React components that implement Google's Material Design specification. 
| [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.    
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr).
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices.
| [Mocha](http://mochajs.org) | Automated tests with [Chai](http://chaijs.com/) for assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node.
| [Isparta](https://github.com/douglasduteil/isparta) | Code coverage tool for ES6 code transpiled by Babel.
| [TrackJS](https://trackjs.com/) | JavaScript error tracking.
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. 
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. 
| [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS 
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc).
| [Yarn](https://yarnpkg.com)| install all dependencies quick with yarn package management 
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build.

### Debugging 

I strongly recommend to use Chrome latest version and install  

1- [React Dev Tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
2- [Redux Dev Tool](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) 

