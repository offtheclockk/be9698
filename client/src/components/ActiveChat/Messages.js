import React, {useEffect, useRef} from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';

const useStyles = makeStyles(() => ({
  messageContainer: {
    overflowY: "scroll",
  },
}));

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  messages.sort((msg1, msg2) => {return new Date(msg1.createdAt) < new Date(msg2.createdAt)? -1 : 1});
  const classes = useStyles();

  let ref = useRef();

  const scrollToBottom = () => {
    ref.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  return (
    <Box className={classes.messageContainer}>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <SenderBubble 
          key={message.id} 
          text={message.text} 
          time={time}
          attachments={message?.attachments} />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            attachments={message?.attachments}
            otherUser={otherUser}
          />
        );
      })}
      <Box ref={ref}></Box>
    </Box>
  );
};
export default Messages;