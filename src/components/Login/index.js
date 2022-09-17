import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import SimpleReactValidator from 'simple-react-validator';
import { toast } from 'react-toastify';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';

import './style.scss';

const Login = () => {
  const push = useNavigate();

  const [value, setValue] = useState({
    username: '',
    mobile: '',
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: 'errorMessage',
    })
  );

  const submitForm = (e) => {
    console.log(e);
    e.preventDefault();
    if (validator.allValid()) {
      setValue({
        username: '',
        mobile: '',
      });

      const userRegex = /^user+.*/gm;
      const email = value.email;

      if (email.match(userRegex)) {
        toast.success('Successfully logged!');
        push('/home');
      }
    } else {
      toast.error('Empty field is not allowed!');
    }
  };
  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Sign Up</h2>
        <p>Sign up to game your account</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Username"
                value={value.email}
                variant="outlined"
                name="username"
                label="Username"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Mobile Number"
                value={value.password}
                variant="outlined"
                name="mobile"
                type="text"
                label="Mobile Number"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid className="formFooter">
                <Button fullWidth className="cBtnTheme" type="submit">
                  Proceed to Play
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
        <div className="shape-img">
          <i className="fi flaticon-honeycomb"></i>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
