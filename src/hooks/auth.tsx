import React, { createContext, useCallback, useState, useContext } from 'react';
import { api } from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthUserData {
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthState {
  token: string;
  user: AuthUserData;
}

interface AuthContextData {
  user: AuthUserData;
  signIn(creadentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: AuthUserData): void;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(`@${process.env.REACT_APP_NAME}:token`);
    const user = localStorage.getItem(`@${process.env.REACT_APP_NAME}:user`);

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const { data: session } = await api.post('/sessions', {
      email,
      password,
    });

    const { user, token } = session;

    if (!token) {
      throw new Error('The credentials are incorrect');
    }

    localStorage.setItem(`@${process.env.REACT_APP_NAME}:token`, token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    localStorage.setItem(
      `@${process.env.REACT_APP_NAME}:user`,
      JSON.stringify(user),
    );

    setData({
      token,
      user,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(`@${process.env.REACT_APP_NAME}:token`);
    localStorage.removeItem(`@${process.env.REACT_APP_NAME}:user`);

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback((user: AuthUserData) => {
    setData(newData => {
      return { ...newData, user };
    });

    localStorage.setItem(
      `@${process.env.REACT_APP_NAME}:user`,
      JSON.stringify(user),
    );
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('userAuth must be used within an AuthProvider');
  }

  return context;
};
