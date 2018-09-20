'use strict';
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

module.exports.getAllPhotos = async (event, context) => {
  var params = {
   Bucket: "photography-photos",
   MaxKeys: 50
  };
  try{
    var allKeys = [];
    var res = await s3.listObjectsV2(params).promise();
    res['Contents'].forEach((k) => {
      if(k['Key'].includes(".jpg")){
        allKeys.push(k['Key']);
      }
    });
  } catch (err){
    console.log(err.message);
  }
    return {
    statusCode: 200,
    body: JSON.stringify({
      response: allKeys,
      input: event,
    }),
  };
};

module.exports.getCategoryPhotos = async (event, context) => {
  if (event.body !== null && event.body !== undefined) {
    let body = JSON.parse(event.body)
    if (body.category)
        var cat = body.category;
  }
  var params = {
   Bucket: "photography-photos",
   MaxKeys: 50,
   Prefix: cat
  };
  try{
    var allKeys = [];
    var res = await s3.listObjectsV2(params).promise();
    res['Contents'].forEach((k) => {
      if(k['Key'].includes(".jpg")){
        allKeys.push(k['Key']);
      }
    });
  } catch (err){
    console.log(err.message);
  }
    return {
    statusCode: 200,
    body: JSON.stringify({
      response: allKeys,
      input: event,
    }),
  };
};
