import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "context/AuthContext";

import { API } from "constant";
import { setToken } from "helpers";


const SignIn = () => {
  
  const navigate = useNavigate();

  const { setUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [open, setOpen] = React.useState(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log({
      email: formData.get('email'),
      password: formData.get('password'),
    });
  
    setIsLoading(true);
    try {
      const value = {
        identifier: formData.get('email'),
        password: formData.get('password'),
      };
      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        setUser(data.user);

        navigate("/profile", { replace: true });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      
    </Fragment>
  );
};

export default SignIn;