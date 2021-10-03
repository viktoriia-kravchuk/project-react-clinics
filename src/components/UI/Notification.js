import React from "react";

const Notification = (props) => {
    return (
        <span style={{color: "green"}}>
          <h2>{props.title}</h2>
          <p>{props.message}</p>
        </span>
      );

}

export default Notification;