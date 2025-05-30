import { Amplify } from 'aws-amplify';

const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: '',
      userPoolClientId: '',
      signUpVerificationMethod: 'code' as const,
      loginWith: {
        email: true,
        phone: false,
        username: false
      }
    }
  },
  API: {
    REST: {
      api: {
        endpoint: '',
        region: 'us-east-1'
      }
    }
  },
  Storage: {
    S3: {
      bucket: '',
      region: 'us-east-1'
    }
  }
} as const;

Amplify.configure(amplifyConfig); 