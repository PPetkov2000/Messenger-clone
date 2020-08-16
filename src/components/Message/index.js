import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import styles from "./message.module.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  const divWrapperClassName = isUser
    ? `${styles.message} ${styles["message__user"]}`
    : styles.message;
  return (
    <div ref={ref} className={divWrapperClassName}>
      <Card
        className={
          isUser ? styles["message__userCard"] : styles["message__guestCard"]
        }
      >
        <CardContent>
          <Typography color="textPrimary" variant="h5" component="h2">
            {`${message.username || "Unknown User"}: ${message.message}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
