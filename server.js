// Put Amazon SNS messages into Amazon S3 bucket.

'use strict';

var aws = require('aws-sdk');
var server = require('sns-server');
var s3 = new aws.S3();
var port = process.env.PORT || 3000;
var bucket = process.env.S3_BUCKET;
var options = {
  notify: function (data, done) {
    var key = new Date().toISOString();

    s3.putObject({ Bucket: bucket, Key: key, Body: data }, done);
  }
};

server(options).listen(port);
