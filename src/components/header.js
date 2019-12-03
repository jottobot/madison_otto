import React from "react";

function header(props) {
  return (
    <div className="header">
        <p className="heading">{props.heading}</p>
    </div>
  );
}

export default header;
