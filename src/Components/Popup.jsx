import React from "react";

export const Popup = ({ selected, closePopup }) => {
  return (
    <section className="popup d-flex align-items-center justify-content-center">
      <div
        className="card content p-4"
        style={{ maxWidth: "700px", width: "100%" }}
      >
        <div className="card-body">
          <h2 className="card-title text-center mb-3">
            {selected.Title}{" "}
            <span className="text-muted">({selected.Year})</span>
          </h2>
          <p className="card-subtitle mb-2 text-center text-warning">
            Rating: {selected.imdbRating}
          </p>
          <div className="row align-items-center plot">
            <div className="col-md-5 text-center mb-3 mb-md-0">
              <img
                src={selected.Poster}
                alt={selected.Title}
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px" }}
              />
            </div>
            <div className="col-md-7">
              <p className="card-text">{selected.Plot}</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-primary close" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// export const Popup = ({ selected, closePopup }) => {
//   return (
//     <section className='popup'>
//       <div className='content'>
//         <h2>
//           {selected.Title} <span>({selected.Year})</span>
//         </h2>
//         <p className='rating'>Rating: {selected.imdbRating}</p>
//         <div className='plot'>
//           <img src={selected.Poster} alt='text' />

//           <p>{selected.Plot}</p>
//         </div>
//         <button className='close' onClick={closePopup}>
//           Close
//         </button>
//       </div>
//     </section>
//   );
// };
