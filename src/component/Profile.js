import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Break from "./Break";

let setBreak = { breaktime: 0 };

const Profile = ({ time }) => {
  const [brk, setBrk] = useState(0);

  const handleBreak = (bt) => {
    setBrk(bt);
    setBreak.breaktime = bt;
    localStorage.setItem("break", JSON.stringify(setBreak));
  };

  const notify = () => toast("Wow!Your work is done.");
  return (
    <div className="bg-secondary text-white profileCard">
      <div className="d-flex p-3">
        <div className="profileImg ">
          <img
            className="img-fluid mx-2"
            src="https://media.istockphoto.com/photos/male-business-professional-picture-id183582611?k=20&m=183582611&s=612x612&w=0&h=udibgF5Q_VLGEZ29dnti-F5Gr6ccu8BBVscs5HGc4Cs="
            alt=""
          />
        </div>
        <div className="profileName">
          <h6>Md.Hannan.Khan </h6>
          <i className="fas mx-1 fa-map-marker-alt"></i>
          <small>Dhaka,Bangladesh</small>
        </div>
      </div>
      <div className="card  p-2 m-2 bg-info">
        <div className="bodyInformation">
          <div className="weight">
            <h5>
              70 <small>Kg</small>
            </h5>
            <h6>Weight</h6>
          </div>
          <div className="height">
            <h5>6</h5>
            <h6>Height</h6>
          </div>
          <div className="age">
            <h5>
              23 <small>Yr</small>
            </h5>
            <h6>Age</h6>
          </div>
        </div>
      </div>
      <div className="break p-2 mt-3">
        <h5 className="my-2">Add a break</h5>
        <div className="card bg-info p-3">
          <div className="breakBtn">
            <button onClick={() => handleBreak(10)}>10s</button>
            <button onClick={() => handleBreak(20)}>20s</button>
            <button onClick={() => handleBreak(30)}>30s</button>
            <button onClick={() => handleBreak(40)}>40s</button>
            <button onClick={() => handleBreak(50)}>50s</button>
          </div>
        </div>
      </div>
      <div className="exerciseDetails mt-3">
        <h5 className="mx-2">Excercise in Details</h5>
        <div className="card bg-info p-3 m-2">
          <div className="excerciseTime">
            <h5>Excercise time</h5>
            <h5>{time}</h5>
          </div>
        </div>
        <div className="card bg-info p-3 m-2">
          <Break />
        </div>
      </div>
      <div className="toastBtn">
        <button onClick={notify} className="btn btn-danger form-control my-5">
          Activity completed
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Profile;
