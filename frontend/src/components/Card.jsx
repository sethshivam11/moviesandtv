import React from "react";

const Card = (props) => {
  return (
    <div>
      <div
        className="card my-2 text-start"
        data-bs-theme={props.mode}
        style={{ width: "100%" }}
      >
        <img
          src={
            props.img
              ? "https://www.themoviedb.org/t/p/w220_and_h330_face" + props.img
              : "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1693550913/frrcvkfnhopxocbixsve.svg"
          }
          alt=""
          className="card-img-top"
        />
        <span
          className={`position-absolute top-0 start-100 badge rounded-pill bg-info`}
          style={{ marginLeft: "-3rem", transform: "scale(1.3)" }}
        >
          {props.ratings}
        </span>
        <div className="card-body">
          <h4 className="card-title">
            {props.name ? props.name : props.title}
          </h4>
          <p className="mb-1">
            <strong>{props.genre?"Genre: ":""} </strong>
            {props.genre?props.genre:""}
          </p>
          <p className="card-text">
            <strong>Overview: </strong>
            {props.overview
              ? props.overview
              : "Get Updates for Movies & TV Series"}
          </p>
          <p className="mb-1">
            <strong className="mb-3">Popularity: </strong>
            {props.popularity}
          </p>
          <p className="mb-2">
            <strong className="mb-3">
              {`${props.release ? "Release Date: " : "First Aired: "}`}
            </strong>
            {props.release? props.release: props.first_air_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
