//https://www.manuelkruisz.com/blog/posts/strapi-react-google-authentication-provider
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import SideBySide from 'layout/SideBySide';

export interface IAuthCallback {
  jwt: string;
  user: {
    id: number;
    name: string;
    email: string;
    image: string;
    provider: string;
  };
  id: number;
  expires: string;
}


function GoogleAuthCallback() {
  const [auth, setAuth] = useState<IAuthCallback>()
  const location = useLocation()
  useEffect(() => {
    if (!location) {
      return
    }
    const { search } = location
    axios({
      method: 'GET',
      url: `https://localhost/cms/api/auth/google/callback?${search}`,
    })
      .then((res) => res.data)
      .then(setAuth)
  }, [location])

  return (
    <div>
      <SideBySide>
      {auth && (
        <>
          <div>Jwt: {auth.jwt}</div>
          <div>User Id: {auth.user.id}</div>
          <div>Provider: {auth.user.provider}</div>
        </>
      )}
      </SideBySide>
    </div>
  )
}

export default GoogleAuthCallback