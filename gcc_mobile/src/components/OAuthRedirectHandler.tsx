import React, { useEffect, useState } from 'react';
import { RouteComponentProps, Redirect } from 'react-router';
import axios from "axios";
import { useUserContext } from '../context/user';

const OAuthRedirectHandler: React.FC<RouteComponentProps> = ({ location }) => {
  const [_, code] = location?.search?.substr(1)?.split('=');
  const [loading, setLoading] = useState(true);
  const { setUser } = useUserContext();

  useEffect(() => {
    if (!code) return;

    const access_token_url = `https://gcc-global-dev.herokuapp.com/github/login/${code}`;

    axios.get<any>(access_token_url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.status == 200) {
        const qrCodeLink = "https://credit-suisse.com/pwp/hr/en/codingchallenge/#/howtoplay?promocode=" + response?.data?.login;
        setUser({
          loggedInGitHub: true,
          githubUsername: response?.data?.login,
          qrCodeLink: qrCodeLink,
          contestantId: response?.data?.contestantId,
          githubAvatar: response?.data?.avatar_url
        });
      }
    }).catch(error => {
      console.error(error);
    }).finally(() => {
      setLoading(false);
    });
  }, [])

  if (!code) {
    return <Redirect to="/tab1" />;
  }

  return loading ? <div>Loading...</div> : <Redirect to="/tab1" />;
}

export default OAuthRedirectHandler;