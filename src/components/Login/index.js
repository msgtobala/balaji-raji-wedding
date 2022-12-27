import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import { toast } from 'react-toastify';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { db } from '../../services/firebase';
import { getDoc, setDoc, doc } from 'firebase/firestore';
import './style.scss';
import ProfileCard from './ProfileCard';

const Login = () => {
  const push = useNavigate();

  const [value, setValue] = useState({
    username: '',
    mobile: '',
  });
  const [errorMessage, setErrorMessage] = useState('error');
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      setLoggedUser(JSON.parse(user));
    }
  }, []);

  const changeHandler = async (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const saveData = async () => {
    const docRef = doc(db, 'users', value.mobile);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { mobile, username } = docSnap.data();
      if (
        username.toLowerCase() === value.username.toLowerCase() &&
        mobile === value.mobile
      ) {
        sessionStorage.setItem('user', JSON.stringify(docSnap.data()));
        setTimeout(() => {
          proceedToPlay();
        }, 500);
        return;
      } else {
        setErrorMessage('Account already exists');
        throw Error('Account incorrect');
      }
    }
    try {
      await setDoc(doc(db, 'users', value.mobile), {
        username: value.username,
        mobile: value.mobile,
        points: 0,
        highestScore: 0,
        gamesPlayed: 0,
        grabGems: 0,
        spinsLeftToday: 5,
        lastSpin: new Date(2022, 10, 10).toDateString(),
      });
      sessionStorage.setItem(
        'user',
        JSON.stringify({
          username: value.username,
          mobile: value.mobile,
          gamesPlayed: 0,
          highestScore: 0,
          grabGems: 0,
        })
      );
      setTimeout(() => {
        proceedToPlay();
      }, 500);
    } catch (e) {
      throw e;
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    const username = value.username;
    const mobile = value.mobile;

    if (username === '' || mobile === '') {
      toast.error('Empty field is not allowed!');
      return;
    }

    const userNameRegex = /^.{4,}$/;
    const mobileRegex =
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,4}$/g;

    if (!username.match(userNameRegex)) {
      toast.error('Empty valid username');
      return;
    }

    if (!mobile.match(mobileRegex)) {
      toast.error('Empty valid mobile number');
      return;
    }

    if (username.match(userNameRegex) && mobile.match(mobileRegex)) {
      toast.promise(saveData, {
        pending: 'Validating game account',
        success: 'Logging to game account',
        error: 'Failed to create account',
      });
      setValue({
        username: '',
        mobile: '',
      });
    }
  };

  const resetForm = () => {
    setLoggedUser(null);
  };

  const proceedToPlay = () => {
    push('/play');
  };

  return loggedUser ? (
    <ProfileCard
      user={loggedUser}
      resetForm={resetForm}
      confirm={proceedToPlay}
    />
  ) : (
    <Grid className="loginWrapper container">
      <Grid className="loginForm">
        <h2>Sign Up</h2>
        <p>Sign up to game your account</p>
        {
          <p
            style={{
              visibility: errorMessage !== 'error' ? 'visible' : 'hidden',
              color: '#D66371',
            }}
          >
            {errorMessage}
          </p>
        }
        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Username"
                value={value.username}
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
                value={value.mobile}
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
      <p style={{ textAlign: 'center', marginTop: '14px' }}>
        For login issues call +91-9578309780
      </p>
    </Grid>
  );
};

export default Login;
