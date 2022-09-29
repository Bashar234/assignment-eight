import React from "react";

const Break = () => {
  let breakFromLS;
  breakFromLS = JSON.parse(localStorage.getItem("break"));
  return (
    <div>
      <div className="brakTime">
        <h5>Break time</h5>
        <h5>{breakFromLS ? breakFromLS.breaktime : 0}</h5>
      </div>
    </div>
  );
};

export default Break;
