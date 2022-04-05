import React, { useEffect } from "react";
import { Navigate } from 'react-router-dom';

function ExternalLink(props) {
  useEffect(() => {
    window.location.replace(props.link);
    //window.open(props.link);
    //
    //
  }, []);

  return (
    <div>
      <h2>{props.name}</h2>
      {/* <Navigate replace to='/'/> */}
    </div>
  );
}

export default ExternalLink;