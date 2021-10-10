import React from "react";

const DocumentsButton = (props) => {
  return (
    <a
      className="btn btn-outline-secondary btn-sm me-md-2"
      target="blank"
      href={props.href}
      key={props.href}
    >
      {props.type}
    </a>
  );
};

export default DocumentsButton;
