# SNS2S3 Server

[![Code Climate][code-climate-img]][code-climate-url]
[![Test Coverage][code-climate-test-coverage-img]][code-climate-test-coverage-url]

[code-climate-img]: https://codeclimate.com/github/realguess/sns2s3-server/badges/gpa.svg
[code-climate-url]: https://codeclimate.com/github/realguess/sns2s3-server
[code-climate-test-coverage-img]: https://codeclimate.com/github/realguess/sns2s3-server/badges/coverage.svg
[code-climate-test-coverage-url]: https://codeclimate.com/github/realguess/sns2s3-server

Place Amazon SNS messages into Amazon S3 bucket.


## Usage

Obtain [crendentials from environment variables][1]:

```
$ PORT=3000 \
  AWS_ACCESS_KEY_ID=akid \
  AWS_SECRET_ACCESS_KEY=secret \
  S3_BUCKET=bucket \
  node server
```

[1]: http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html#Credentials_from_Environment_Variables
