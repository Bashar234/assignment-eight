import React from "react";

const Exercise = ({ item, HandleTime }) => {
  return (
    <div>
      <div className="card bg-dark text-white my-3 exerciseList">
        <img
          className="card-img-top img-fluid"
          src={item.img}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <small className="card-text description">{item.description}</small>
          <h6 className="my-3">Time required:{item.time}</h6>
          <a
            onClick={() => HandleTime(item.time)}
            className="btn btn-primary form-control"
          >
            Add to list
          </a>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
