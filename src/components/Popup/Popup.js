import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Dialog, Grid, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { collection, addDoc, doc } from 'firebase/firestore';

import './styles.css';
import FullStar from '../../images/hero/star.svg';
import EmptyStar from '../../images/hero/star_stock.svg';
import { db } from '../../services/firebase';

const newLikes = [
  {
    id: 0,
    filled: false,
  },
  {
    id: 1,
    filled: false,
  },
  {
    id: 2,
    filled: false,
  },
  {
    id: 3,
    filled: false,
  },
  {
    id: 4,
    filled: false,
  },
];

const likedPages = [
  {
    value: 'All',
    label: 'All',
  },
  {
    value: 'Dashboard',
    label: 'Dashboard',
  },
  {
    value: 'Games',
    label: 'Games',
  },
  {
    value: 'Gallery',
    label: 'Gallery',
  },
  {
    value: 'Watch Live',
    label: 'Watch Live',
  },
  {
    value: 'Wedding Details',
    label: 'Wedding Details',
  },
];

const likedGames = [
  {
    value: 'All',
    label: 'All',
  },
  {
    value: 'Quiz',
    label: 'Quiz',
  },
  {
    value: 'Memory game',
    label: 'Memory game',
  },
  {
    value: 'Spin The Wheel',
    label: 'Spin The Wheel',
  },
  {
    value: 'Stone Paper Scissor',
    label: 'Stone Paper Scissor',
  },
  {
    value: 'Tic Tac Toe',
    label: 'Tic Tac Toe',
  },
  {
    value: 'Toss A Coin',
    label: 'Toss A Coin',
  },
  {
    value: 'Share And Earn',
    label: 'Share And Earn',
  },
];

const Popup = (props) => {
  const { show, handleClose, maxWidth } = props;
  const [username, setUsername] = useState('');
  const [feedTitle, setFeedTitle] = useState('');
  const [feedComment, setFeedComment] = useState('');
  const [haveLikedGame, setHaveLikedGame] = useState(null);
  const [likedPage, setLikedPage] = useState('All');
  const [likedGame, setLikedGame] = useState('All');
  const [likes, setLikes] = useState(JSON.parse(JSON.stringify(newLikes)));

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;

    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <i className="ti-close"></i>
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const decideLike = (currentIndex, index) => currentIndex <= index;


  const updateLikes = (index) => {
    const updatedLikes = JSON.parse(JSON.stringify(likes));
    const updatedNewLikes = JSON.parse(JSON.stringify(newLikes));
    for (let i = 0; i < updatedLikes.length; i++) {
      updatedNewLikes[i].filled = decideLike(i, index, updatedLikes[i].filled);
    }
    setLikes(updatedNewLikes);
  };

  const resetPopup = () => {
    setUsername('');
    setFeedTitle('');
    setFeedComment('');
    setLikes(JSON.parse(JSON.stringify(newLikes)));
    setHaveLikedGame(null);
    setLikedGame('Dashboard');
    setLikedGame('Quiz');
    handleClose();
  };

  const submitData = async () => {
    console.log(likes);
    const feedLikes = likes.reduce((acc, val) => acc + (val.filled ? 1 : 0), 0);
    const query = collection(db, 'feedback');
    const ref = doc(query);
    await addDoc(query, {
      id: ref.id,
      name: username,
      ratings: feedLikes,
      haveYouPlayedGame: haveLikedGame,
      comments: feedComment,
      commentTitle: feedTitle,
      likedGame,
      likedPage,
      createdAt: new Date(),
    });
    resetPopup();
  };

  return (
    <Dialog
      open={show}
      onClose={resetPopup}
      className="modalWrapper quickview-dialog set-modal-width"
      maxWidth={maxWidth}
    >
      <DialogTitle id="customized-dialog-title" onClose={resetPopup}>
        Feedback
      </DialogTitle>
      <Grid className="modalBody modal-body">
        <Grid className="modalBody modal-body">
          <form>
            <div className="feedback-intro">
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Username"
                value={username}
                variant="outlined"
                name="username"
                label="Username"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Feedback Title"
                value={feedTitle}
                variant="outlined"
                name="feedback-title"
                label="Feedback Title"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setFeedTitle(e.target.value)}
              />
            </div>
            <div className="feedback-ratings-inp">
              <div>
                <p>Rating</p>
                {likes.map((like, index) => (
                  <img
                    key={like.id}
                    src={like.hovered || like.filled ? FullStar : EmptyStar}
                    alt={like.filled}
                    onClick={() => updateLikes(index)}
                  />
                ))}
              </div>
              <div>
                <p>Have you Played games?</p>
                <div className="liked-game-section">
                  <div
                    className={haveLikedGame === true ? 'selected' : ''}
                    onClick={() => setHaveLikedGame(true)}
                  >
                    Yes
                  </div>
                  <div
                    className={haveLikedGame === false ? 'selected' : ''}
                    onClick={() => {
                      setHaveLikedGame(false);
                      setLikedGame('-');
                    }}
                  >
                    No
                  </div>
                </div>
              </div>
            </div>
            <div className="feedback-comment">
              <TextField
                className="inputOutline"
                fullWidth
                multiline
                minRows={5}
                placeholder="Feedback Comments"
                value={feedComment}
                variant="outlined"
                name="feedback-comments"
                label="Feedback Comments"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setFeedComment(e.target.value)}
              />
            </div>
            <div className="feedback-comment liked-pages">
              <div>
                <TextField
                  id="liked-page"
                  fullWidth
                  className="inputOutline"
                  select
                  defaultValue="Dashboard"
                  variant="outlined"
                  name="liked-page"
                  label="Liked Page"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setLikedPage(e.target.value)}
                >
                  {likedPages.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              {haveLikedGame !== null && <div>
                {haveLikedGame ? (
                  <TextField
                    id="liked-game"
                    fullWidth
                    className="inputOutline"
                    select
                    defaultValue="Quiz"
                    variant="outlined"
                    name="liked-game"
                    label="Liked Game"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => setLikedGame(e.target.value)}
                  >
                    {likedGames.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : (
                  <div className="engage-games">
                    <Link to="/games">Checkout games</Link>
                  </div>
                )}
              </div>}
            </div>
          </form>
          <br />
          <button className="feedback-submit-btn" onClick={submitData}>
            Submit
          </button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default Popup;
