import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { USERS_GET_ME } from "../../helpers/UsersGraphQL";

function useProfile(props) {
  console.log("useProfile");
  const history = useHistory();
  const { loading, error, data } = useQuery(USERS_GET_ME);
  if (loading) return null;
  if (error) {
    console.log(error);
    if (error.graphQLErrors.length) {
      let message = error.graphQLErrors[0].message;
      if (message === "Signature has expired") {
        history.push("/login");
      }
    }

    return null;
  }
  return data;
}

export default useProfile;
