import React, { useEffect, useState } from "react";
import Exercise from "./Exercise";
import Profile from "./Profile";

const ShowDate = () => {
  const [clubData, setClubData] = useState([]);
  const [time, setTime] = useState(0);
  useEffect(() => {
    fetch("Fakedata.json")
      .then((res) => res.json())
      .then((data) => setClubData(data));
  }, []);
  const HandleTime = (getTime) => {
    setTime(time + parseInt(getTime));
  };
  return (
    <div className="element">
      <div className="row">
        <div className="col-md-7 col-lg-8">
          <div className="container">
            <div className="row">
              <div className="d-flex webName">
                <h2>
                  {" "}
                  <i class="fa-solid fa-person-walking"></i>
                </h2>
                <h2>Physical Exercise Club</h2>
              </div>
            </div>
            <div className="row mt-4">
              <h4>Select today's exercise</h4>
              {clubData.map((item, idx) => (
                <div key={idx} className="col-md-6 col-lg-4">
                  <Exercise HandleTime={HandleTime} item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-5 col-lg-4 profileElement">
          <Profile time={time} />
        </div>
      </div>
    </div>
  );
};

export default ShowDate;
