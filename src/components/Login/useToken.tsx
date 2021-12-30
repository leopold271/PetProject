import { useState } from 'react';

export default function useToken() {

  const getToken = () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      return token
    }
  }

  const [token, setToken] = useState('');

  const saveToken = (token: string): void => {
    sessionStorage.setItem('token', JSON.stringify(token));
    setToken(token)
  }


  return {
    getToken,
    setToken: saveToken,
  }
}