'use strict';

/**
 * API Server Module
 * @module src/app
 */

const cwd = process.cwd();

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require( `${cwd}/src/middleware/500.js`);
const notFound = require( `${cwd}/src/middleware/404.js` );
const v1Router = require( `${cwd}/src/api/v1.js` );
const authRouter = require( `${cwd}/src/api/auth/router.js` );
const newRouter = require(`${cwd}/src/api/auth/routes/routes.js`);

// Prepare the express app
const app = express();

const options = require('../docs/config/swagger.js');
const expressSwagger = require('express-swagger-generator')(app);
expressSwagger(options);

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('docs'));

// Routes
app.use(v1Router);
app.use(authRouter);
app.use(newRouter);

// Catchalls
app.use(notFound);
app.use(errorHandler);


let start = (port = process.env.PORT) => {
  app.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};

// from lab-14
// NTM: do I need this?
//let isRunning = false;
// module.exports = {
//   server: app,
//   start: (port) => {
//     if( ! isRunning ) {
//       app.listen(port, () => {
//         isRunning = true;
//         console.log(`Server Up on ${port}`);
//       });
//     }
//     else {
//       console.log('Server is already running');
//     }
//   },
// };


/**
* Export object with app and start methods attached
* @type {Object}
 */

module.exports = {app,start};
