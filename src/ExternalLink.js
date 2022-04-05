import React, { useEffect } from "react";

function ExternalLink(props) {
  useEffect(() => {
    window.location.replace(props.link);
  }, []);

  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
}

export default ExternalLink;