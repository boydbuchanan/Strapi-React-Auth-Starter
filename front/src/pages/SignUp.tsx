import React, { Fragment, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "context/AuthContext";
import { API } from "constant";
import { setToken } from "helpers";
import { Alert, Link, Box, Button, Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";

import { Copyright } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const SignUp = () => {
  
  const navigate = useNavigate();

  const { setUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onFinish = async (values: any) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
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
const [open, setOpen] = React.useState(true);
  return (
    <Fragment>
      <Box component="form" noValidate onSubmit={onFinish} sx={{ mt: 1 }}>
        {error ? (
            <Alert
              className="alert_error"
              severity="error"
              onClick={() => {
                setOpen(false);
              }}
            >
            {error}
            </Alert>
          ) : null}
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Button 
          variant="contained"
          startIcon={<FacebookIcon/>}
          href='/cms/api/connect/facebook'>
            Connect with Facebook
        </Button>
        <Button 
          variant="contained"
          startIcon={<GoogleIcon/>}
          href='/cms/api/connect/google'>
            Connect with Google
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
      
    </Fragment>
  );
};

export default SignUp;