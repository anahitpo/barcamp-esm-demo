# The Hidden Hero Behind AWS Lambda in Action

Hello and welcome! Here you can find all the code from my BarCamp demo: _The Hidden Hero Behind AWS Lambda In Action_.

The AWS infrastructure is created and managed by [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html). The application code is in TypeScript.

## Prerequisites
* Node.js 16.x
* npm
* TypeScript 2.7 or later (`npm -g install typescript`)
* AWS CLI
  * Configure AWS account credentials and region (`aws configure`)
* AWS CDK (`npm install -g aws-cdk`)
  * Bootstrap CDK resourses (`cdk bootstrap aws://ACCOUNT-NUMBER/REGION`)

## Useful CDK commands

 * `npm install`     install project dependencies 
 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emit the synthesized CloudFormation template
 * `cdk destroy`     destroy this stack from your AWS account

## Lambda functions

The two lambda functions that act as a Kinesis producer and a Kinesis consumer are in the `lambdas` directory. The lambda code itself is Node.js.

### Deploying lambdas

From the corresponding lambda directories, run
```
  npm i --production
```

After that, the actual deployment should be handled by CDK, along with the rest of the AWS resources (`cdk deploy` from the root directory).
