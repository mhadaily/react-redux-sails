# Server Protoype 

####[ just for development purposes]

This is Mymoria protoype for Case Management Application.

### Get Started with DOCKER
I would personally recommend to go ahead and install docker on your machine which is pretty easy to install and then simply run following 
commands and magically all what we need to start on development environment is ready and open your browser and start developing.

One of the main advantages of using Docker is that we are pretty sure our environment is similar to each other, therefore, you are not worried about debugging to get this app to work. We are also able to deploy this Docker later. However, this is just designed for development environment for now. 

Please after making sure Docker is up and running on your machine go ahead and hit the commands below: 

1. make sure you are in root app directory into SERVER folder.
2. `docker-compose up`  start building image and run container then
3. Open your browser and hit http://localhost:3040 and start editing files. 

**Note:** It will run two container one is for sails with Node version 7.4 and another one is building Database container
. Database container will be using port 3050 so use this if you want to communicate with database directly. 
However, if you are running all on your Localhost please go to `config/models.js` and change model to `mymoriaLocalMongodbServer`
 otherwise please use docker with `mymoriaDockerMongodbServer`. Configuration can be found in `config/connection..js`

I assume you are using Docker though you don't need to do anything but if you are wiiling to run on your local machine 
please do change all configuration to get this app run. 

### Get Started on your local Machine if you prefer

1- **Make sure about Initial Machine Setup below and then Install Yarn if you like**. `https://yarnpkg.com/docs/install` 

2- **Install sails globally** `npm install -g sails`

3- **Install MongdoDB and Run** please see mongodb guide to install on their website.

3- **Start app**. `npm run lift or sails lift`

**NOTE:** If you are not running docker please go to config/connection.js and change MongodbServer port to your local mongoDB which is 27018  

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
   "debug": "node debug app.js",
   "start": "node app.js",
   "lift": "sails lift",
   "startDev": "nodemon app.js" //watch all changes and restart server
```

###Technologies
This app offers a rich development experience using the following technologies:

| **Tech** | **Description**
|----------|-------|
| [Sails](https://sails.org/)  |   MVC framework for Node.   

###API

Sails server is being used only to be an API server. Though, Please open 
`api/models/` folders and you can find all attributes and relation between them. 

`api/controllers` folder is also showing all logic that we need for each model. 

Keep in mind that our main Model is CASE and the rest are related to this model. 

for more information about Sails standard model and controller (API) [please read this document](http://sailsjs.com/documentation/concepts). 


| **Name** | **Methods**
|----------|-------|
|  /case |      find, findOne, create, update, destroy, populate, add or remove.
|  /customer |      find, findOne, create, update, destroy, populate, add or remove.
|  /deceased |      find, findOne, create, update, destroy, populate, add or remove.
|  /address |      find, findOne, create, update, destroy, populate, add or remove.
|  /funeral |      find, findOne, create, update, destroy, populate, add or remove.


**Usage**

`HOST_API/customer/fineOne?id=:id` will return customer with id
`HOST_API/customer/find?owner=CASE_ID` will return customer for a case ID
`HOST_API/deceased/create?owner=CASE_ID&Name="whatever..."` will create customer for a case ID with other fields, please refer to model. 

