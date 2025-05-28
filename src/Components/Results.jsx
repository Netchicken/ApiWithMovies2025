import React from "react";
import { Result } from "./Result";

export const Results = ({ resultData, openPopup }) => {
  return (
    <section className="results">
      {Array.isArray(resultData) && resultData.length > 0 ? (
        resultData.map((result) => (
          <Result key={result.imdbID} result={result} openPopup={openPopup} />
        ))
      ) : (
        <p>No Data</p>
      )}
    </section>
  );
};
