import React from "react";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block mx-2"
      style={{ width: "18rem", display: "inline-block", marginRight: "10px" }}
    >
      <img
        src={src ? src : "..."}
        className="card-img-top"
        alt="News thumbnail"
        style={{ height: "200px", width: "100%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "Kindly click on read more"}
        </p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More..
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
