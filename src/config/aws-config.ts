import { Amplify } from 'aws-amplify';

const awsConfig = {
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_AWS_USER_POOL_WEB_CLIENT_ID,
      signUpVerificationMethod: 'code',
      loginWith: {
        email: true,
        phone: false,
        username: false
      }
    }
  },
  API: {
    REST: {
      'mkww-api': {
        endpoint: import.meta.env.VITE_APP_API_ENDPOINT,
        region: 'us-east-1'
      }
    },
    GraphQL: {
      endpoint: `${import.meta.env.VITE_APP_API_ENDPOINT}/graphql`,
      region: 'us-east-1',
      defaultAuthMode: 'userPool'
    }
  },
  Storage: {
    S3: {
      bucket: 'mkww-website',
      region: 'us-east-1'
    }
  }
} as const;

export const configureAWS = () => {
  Amplify.configure(awsConfig);
};

export default awsConfig; 