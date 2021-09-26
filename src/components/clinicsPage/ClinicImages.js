import React from "react";

const ClinicImages = (props) => {
  if (!props.images) {
    return (
      <div className="row">
        <h3 className="text-center">
          {" "}
          No Images Available For Clinic Please Upload Some{" "}
        </h3>
      </div>
    );
  }
  return (
    <div className="row">
      {props.images.map((image) => (
        <div className="col-sm-6 col-md-4 ng-scope" key={image.type}>
          <div className="img-thumbnail"><img src={image.id} key={image.type} className="img" alt={image.type}/>
          <div className="caption"><h3>{image.type}</h3>
          <p><button className="btn btn-danger">Delete</button></p></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClinicImages;
