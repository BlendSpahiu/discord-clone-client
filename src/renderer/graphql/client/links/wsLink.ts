import { WebSocketLink } from '@apollo/client/link/ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
// config
// import { getHasuraUserId, getHasuraUserRole, readAuthToken } from 'utils/auth';

// utils

export const wsClient = new SubscriptionClient(
  'http://localhost:8060/v1/graphql',
  {
    reconnect: true,
    lazy: true,
    connectionParams: () => {
      // fetch token
      const token = localStorage.getItem('access_token');
      let headers = {};
      if (token) {
        headers = {
          Authorization: `Bearer ${token}`,
        };
      }
      return {
        headers,
      };
    },
  }
);

export const wsLink = new WebSocketLink(wsClient);
