// swagger/swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts'
  },
  host: 'contact-api-ja.onrender.com', // localhost:3000' changed to Render domain upon deployed
  schemes: ['https'],
  basePath: '/api',
  schemes: ['https'], // ✅ Secure scheme
};

const outputFile = 'swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
