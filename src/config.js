export default {
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'notes-app-api-prod-serverlessdeploymentbucket-1w9s2kak5e39t'
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://tmtc8imx0m.execute-api.us-east-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_rFChqC0WL',
    APP_CLIENT_ID: '28vsd7v4c89agca3e6nc6rqi6e',
    IDENTITY_POOL_ID: 'us-east-2:9f7bc074-eca6-4c7f-a1b7-f5f274d4c321'
  }
};
