import React, { useState } from "react";
import "./App.css";
import { Search } from "./Components/Search";
import { useApiSearch, useApiOpenPopup } from "./Utilities/Api";
import { Results } from "./Components/Results";
import { Popup } from "./Components/Popup";

function App() {
  // State for the search input value
  const [search, setSearch] = useState(""); // the search term for the movie

  // Custom hook to handle movie search API logic
  const { results, loading, error, searchMovies } = useApiSearch();

  // local variable using Object destructuring to hold Custom hook to handle popup movie details pass data from API
  const {
    movie: selected,
    loading: popupLoading,
    error: popupError,
    fetchMovie,
  } = useApiOpenPopup();

  // Handle input changes in the search box
  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  // Trigger search when the Enter key is pressed
  const searchCall = (event) => {
    if (event.key === "Enter") {
      searchMovies(search); // Call the search function from the custom hook
      console.log("Search term:", search); // Log the search term for debugging
    }
  };

  // Open the popup with movie details by fetching data from the API
  const openPopup = (id) => {
    fetchMovie(id);
  };

  // Close the popup by clearing the selected movie
  const closePopup = () => {
    fetchMovie(null); // Optionally reset the movie in the hook, or you can add a reset function to the hook
  };

  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="display-4 text-center">2025 Movie Database</h1>
        <h4 className="text-center ">
          Search and then click on a Movie to see the plot
        </h4>
      </header>
      <main>
        {/* Pass handlers and state to the Search component */}
        <div className="row justify-content-center mb-6">
          <div className="col-md-8">
            <Search handleInput={handleInput} search={searchCall} />
          </div>
        </div>
        {/* Pass search results and popup handler to Results */}
        <div className="row">
          <div className="col-12">
            <Results resultData={results} openPopup={openPopup} />
          </div>
        </div>
        {/* Conditionally render the Popup if a movie is selected */}
        {selected && typeof selected.Title !== "undefined" ? (
          <Popup selected={selected} closePopup={closePopup} />
        ) : null}
        {/* Show loading and error messages */}
        {loading && (
          <div className="alert alert-info text-center mt-3">Loading...</div>
        )}
        {error && (
          <div className="alert alert-danger text-center mt-3">
            Error: {error}
          </div>
        )}
        {popupLoading && (
          <div className="alert alert-info text-center mt-3">
            Loading details...
          </div>
        )}
        {popupError && (
          <div className="alert alert-danger text-center mt-3">
            Error: {popupError}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
