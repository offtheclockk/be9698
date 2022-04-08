import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
    borderRadius: '0 10px 10px 10px',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    padding: 8,
  },
  attachmentContainer: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "510px",
  },
  attachment: {
    width: ({ imageCount }) => (imageCount === 1 ? "180px" : "160px"),
    height: ({ imageCount }) => (imageCount === 1 ? "150px" : "130px"),
    objectFit: "cover",
    margin: ({ imageCount }) => (imageCount === 1 ? "5px 5px 0px 5px " : "5px"),

    borderRadius: ({ imageCount, text }) =>
      imageCount === 1 && text ? "10px 10px 0px 0px" : "10px 10px 0 10px",
  },
  multipleAttachments: {},
}));

const OtherUserBubble = ({ text, time, otherUser, attachments }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        <Box className={classes.bubble}>
          {text && <Typography className={classes.text}>{text}</Typography>}
          {attachments?.map((image, key) => (
              <img
                key={key}
                className={classes.attachment}
                src={image}
                alt="Attachment not found"
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
