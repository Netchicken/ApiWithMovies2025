import { React, useState } from "react";
import "./App.css";
import { Search } from "./Components/Search";
import { useApiSearch, apiOpenPopup } from "./Utilities/Api";
import { Results } from "./Components/Results";
import { Popup } from "./Components/Popup";

function App() {
  // State for the search input value
  const [search, setSearch] = useState(""); //the search term for the movie
  // State for the currently selected movie (for popup)
  const [selected, setSelected] = useState(""); //show the popup if true
  // Custom hook to handle movie search API logic
  // const { results, loading, error, searchMovies } = useApiSearch();

  // Handle input changes in the search box
  const handleInput = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  // Trigger search when the Enter key is pressed
  const searchCall = (event) => {
    console.log("searchCall ", event);
    if (event.key === "Enter") {
      searchMovies(search); // Call the search function from the custom hook
      return results;
    }
  };

  // Open the popup with movie details by fetching data from the API
  const openPopup = (id) => {
    apiOpenPopup(id)
      .then((result) => {
        console.log("Api apiOpenPopup ", result);
        setSelected(result);
      })
      .catch((error) => {
        console.log("Api Search error ", error);
      });
  };

  // Close the popup by clearing the selected movie
  const closePopup = () => {
    setSelected("");
    return { selected };
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
        {typeof selected.Title !== "undefined" ? (
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
      </main>
    </div>

    // <div>
    //   <header>
    //     <h1>Movie Database</h1>
    //     <h4>Search and then click on a Movie to see the plot</h4>
    //   </header>
    //   <main>
    //     {/* Pass handlers and state to the Search component */}
    //     <Search handleInput={handleInput} search={searchCall} />
    //     {/* Pass search results and popup handler to Results */}
    //     <Results resultData={results} openPopup={openPopup} />
    //     {/* Conditionally render the Popup if a movie is selected */}
    //     {typeof selected.Title != "undefined" ? (
    //       <Popup selected={selected} closePopup={closePopup} />
    //     ) : null}
    //     {/* Show loading and error messages */}
    //     {loading && <div>Loading...</div>}
    //     {error && <div>Error: {error}</div>}
    //   </main>
    // </div>
  );
}

export default App;
