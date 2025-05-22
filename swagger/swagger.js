// swagger/swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts'
  },
  host: 'localhost:3000', // change to Render domain when deployed
  schemes: ['http'],
  basePath: '/api'
};

const outputFile = 'swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
