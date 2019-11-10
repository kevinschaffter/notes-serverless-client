import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from 'aws-amplify';
import config from './config';

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      font-family: "Open Sans", sans-serif;
      font-size: 16px;
      color: #333;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
      font-family: "PT Serif", serif;
  }
  select.form-control,
  textarea.form-control,
  input.form-control {
    font-size: 16px;
  }
  input[type=file] {
    width: 100%;
  }
`;

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: 'notes',
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      }
    ]
  }
});

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById('root')
);
