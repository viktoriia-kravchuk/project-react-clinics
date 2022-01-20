import React from "react";

const CardLayout = (props) => {
    return( <div className="col-md-3 col-sm-6">
        <div className={props.class}>
            <div className="card-body">
                <h4 className="text-primary">{props.text}</h4>
                <h3>{props.value}</h3>
            </div>
        </div>

    </div>)
}

export default CardLayout;