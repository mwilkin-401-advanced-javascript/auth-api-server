# LAB: Auth-Api-Server

[![Build Status](https://www.travis-ci.com/mwilkin-401-advanced-javascript/auth-api-server.svg?branch=dev)](https://www.travis-ci.com/mwilkin-401-advanced-javascript/auth-api-server)

### Author: Matt Wilkin

### Links and Resources
 
* [Heroku-master](https://damp-gorge-26033.herokuapp.com/)

* [Heroku-dev]()

* [Submission PR](https://github.com/mwilkin-401-advanced-javascript/auth-api-server/pull/1)

* [Travis](https://www.travis-ci.com/mwilkin-401-advanced-javascript/auth-api-server)

### Documentation

* [UML]()

* [UML] <img src="./assets/lab14_UML.jpg" width="400">


### env setup

refer to env-sample file

### Dependencies

  bcrypt
  cors 
  debug 
  dotenv
  eslint
  express
  jest
  jsonwebtoken
  mongodb-memory-server
  mongoose
  mongoose-schema-jsonschema
  morgan
  require-directory
  supertest
  swagger-ui-express
  express-swagger-generator

### Routes

* Endpoint: `/signup`
  * not used in this project.
* Endpoint: `/signin`
  * not used in this project.
* Endpoint: `/oauth`
  * authorization route
* Endpoint: `/roles`
  * initialize roles
* Endpoint `/public-stuff`
  * auth route
* Endpoint `/hidden-stuff`
  * hidden stuff
* Endpoint `/something-to-read`
  * read
* Endpoint `/create-a-thing`
  * create
* Endpoint `/update`
  * update
* Endpoint `/jp`
  * patch/update
* Endpoint `/bye-bye`
  * delete
* Endpoint `/everything`
  * get all superuser


### Setup

Running the app

`npm i`

`npm start`

### Tests

How do you run tests?

`npm test`


Create a UML diagram that describes the code (and potential data) flow for each route:
  * `GET /api/v1/:model`
  * `GET /api/v1/:model/:id`
  * `POST /api/v1/:model`
  * `DELETE /api/v1/:model/:id`
  * `PUT /api/v1/:model/:id`
  
Your diagram should include proper module and functional definitions, connections and parameter/data transfers:
  * Does each function get called when the route is fired and send results to the browser?
  * What params are being sent between the functions?
  * What data is coming back?
  * Is the request object being modified?
  


