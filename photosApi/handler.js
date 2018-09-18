'use strict';

module.exports.getAllPhotos = async (event, context) => {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
      host     : 'photos.cluster-cswaejsadshe.us-east-1.rds.amazonaws.com',
      database : 'photos',
      user     : 'photo_user',
      password : 'Hot989lev999!',
  });

  connection.connect(function(err) {
      if (err) {
          console.error('Error connecting: ' + err.stack);
          return;
      }

      console.log('Connected as id ' + connection.threadId);
  });

  connection.query('SELECT * FROM photos', function (error, results, fields) {
      if (error)
          throw error;

      results.forEach(result => {
          console.log(result);
      });
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  module.exports.getCategoryPhotos = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      }),
    };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
