import React from "react";
import { Result } from "./Result";

// Results component displays a list of movie results or a "No Data" message
export const Results = ({ resultData, openPopup }) => {
  return (
    <section className="results">
      {/* 
        Check if resultData is a non-empty array.
        If so, map over the results and render a Result component for each movie.
        Otherwise, display "No Data".
      */}
      {Array.isArray(resultData) && resultData.length > 0 ? (
        resultData.map((result) => (
          // Pass each result and the openPopup handler to the Result component
          <Result key={result.imdbID} result={result} openPopup={openPopup} />
        ))
      ) : (
        // Show this message if there are no results to display
        <p>No Data</p>
      )}
    </section>
  );
};
