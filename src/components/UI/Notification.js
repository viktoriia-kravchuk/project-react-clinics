import React from "react";

const Notification = (props) => {
    return (
        <section style={{color: "green"}}>
          <h2>{props.title}</h2>
          <p>{props.message}</p>
        </section>
      );

}

export default Notification;