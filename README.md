# SNS2S3 Server

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
