import React from "react";

export const Result = ({ result, openPopup }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
      <div
        className="card h-100 shadow-sm result "
        style={{ cursor: "pointer" }}
        onClick={() => openPopup(result.imdbID)}
      >
        <img
          src={result.Poster}
          className="card-img-top"
          alt={result.Title}
          style={{ objectFit: "cover", height: "400px" }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title text-center">{result.Title}</h5>
          <p className="card-text text-center text-muted mb-0">{result.Year}</p>
          <button
            className="btn btn-outline-primary mt-3"
            onClick={(e) => {
              e.stopPropagation();
              openPopup(result.imdbID);
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
