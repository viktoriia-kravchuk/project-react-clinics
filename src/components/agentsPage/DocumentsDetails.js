import React from "react";
import DocumentsButton from "./DocumentsButton";

const DocumentsDetails = (props) => {
  if (!props.documents) {
    return <p className="text-warning" >No Documents Available For Agent</p>;
  }
  return (
    <p>
      {props.documents.map((document, i) => {
        return (
          <DocumentsButton href={document.doc_url} type={document.doc_type} key={i}/>
        );
      })}
    </p>
  );
};

export default DocumentsDetails;
