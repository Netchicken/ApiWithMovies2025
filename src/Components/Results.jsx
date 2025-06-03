import React, { useMemo } from "react";
import { Result } from "./Result";

// Results component displays a list of movie results or a "No Data" message
export const Results = ({ resultData, openPopup }) => {
  // Memoize the rendered list for performance
  const renderedResults = useMemo(() => {
    if (Array.isArray(resultData) && resultData.length > 0) {
      return resultData.map((result) => (
        <Result key={result.imdbID} result={result} openPopup={openPopup} />
      ));
    }
    return <p>No Data</p>;
  }, [resultData, openPopup]);

  return <section className="results">{renderedResults}</section>;
};
