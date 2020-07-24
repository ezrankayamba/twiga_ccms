import { gql } from "apollo-boost";
export const USERS_GET_TOKEN = gql`
  mutation getToken($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

export const USERS_GET_ME = gql`
  query getMe {
    me {
      id
      username
    }
  }
`;

export const USERS = gql`
  query getUsers {
    users {
      id
      username
      email
      firstName
      lastName
    }
  }
`;
