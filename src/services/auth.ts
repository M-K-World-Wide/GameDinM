import { signUp, confirmSignUp, signIn, signOut, getCurrentUser, resetPassword, confirmResetPassword } from 'aws-amplify/auth';

export interface User {
  username: string;
  email: string;
  attributes?: {
    email_verified: boolean;
    sub: string;
  };
}

export const signUpUser = async (email: string, password: string): Promise<User> => {
  try {
    const { isSignUpComplete, userId } = await signUp({
      username: email,
      password,
      options: {
        userAttributes: {
          email
        }
      }
    });
    return { 
      username: email, 
      email, 
      attributes: { 
        email_verified: false, 
        sub: userId || email 
      } 
    };
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const confirmSignUpUser = async (email: string, code: string): Promise<void> => {
  try {
    await confirmSignUp({
      username: email,
      confirmationCode: code
    });
  } catch (error) {
    console.error('Error confirming sign up:', error);
    throw error;
  }
};

export const signInUser = async (email: string, password: string): Promise<User> => {
  try {
    const { isSignedIn } = await signIn({
      username: email,
      password
    });
    const user = await getCurrentUser();
    return {
      username: user.username,
      email: user.signInDetails?.loginId || email,
      attributes: {
        email_verified: true,
        sub: user.userId
      }
    };
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export const signOutUser = async (): Promise<void> => {
  try {
    await signOut();
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const getCurrentUserDetails = async (): Promise<User | null> => {
  try {
    const user = await getCurrentUser();
    return {
      username: user.username,
      email: user.signInDetails?.loginId || '',
      attributes: {
        email_verified: true,
        sub: user.userId
      }
    };
  } catch (error) {
    return null;
  }
};

export const resetUserPassword = async (email: string): Promise<void> => {
  try {
    await resetPassword({
      username: email
    });
  } catch (error) {
    console.error('Error requesting password reset:', error);
    throw error;
  }
};

export const confirmResetUserPassword = async (email: string, code: string, newPassword: string): Promise<void> => {
  try {
    await confirmResetPassword({
      username: email,
      confirmationCode: code,
      newPassword
    });
  } catch (error) {
    console.error('Error confirming password reset:', error);
    throw error;
  }
}; 