import React from "react";

export const Result = ({ result, openPopup }) => {
  return (
    <div className="col-md-4 mb-4">
      <div
        className="card h-100 shadow-sm result"
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
        </div>
      </div>
    </div>

    // <div className="result" onClick={() => openPopup(result.imdbID)} ><h3>{result.Title}</h3>
    //     <img src={result.Poster} />
    //     </div>
  );
};
