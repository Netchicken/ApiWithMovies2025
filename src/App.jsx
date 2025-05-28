import { React, useState } from "react";
import "./App.css";
import { Search } from "./Components/Search";
import { apiSearch, apiOpenPopup } from "./Utilities/Api";
import { Results } from "./Components/Results";
import { Popup } from "./Components/Popup";

function App() {
  const [search, setSearch] = useState(""); //the search term for the movie
  const [selected, setSelected] = useState(""); //show the popup if true
  const [apiResults, setApiResults] = useState([]); //hold the results from the API

  const handleInput = (event) => {
    setSearch(event.target.value);
    console.log(search);
    // return { search };
  };
  const searchCall = (event) => {
    if (event.key === "Enter") {
      apiSearch(search) //run the search from api.js
        .then((result) => {
          console.log("Api Search  from Api.js ", result);
          setApiResults(result);
        })
        .catch((error) => {
          console.log("Api Search error ", error);
          return;
        });
      console.log("apiResults  ", apiResults);
    }
  };

  const openPopup = (id) => {
    apiOpenPopup(id)
      .then((result) => {
        console.log("Api apiOpenPopup ", result);
        setSelected(result);
      })
      .catch((error) => {
        console.log("Api Search error ", error);
        return;
      });

    return { selected };
  };

  const closePopup = () => {
    setSelected("");
    return { selected };
  };

  return (
    <div>
      <header>
        <h1>Movie Database</h1>
        <h4>Search and then click on a Movie to see the plot</h4>
      </header>
      <main>
        <Search handleInput={handleInput} search={searchCall} />
        <Results resultData={apiResults} openPopup={openPopup} />

        {typeof selected.Title != "undefined" ? (
          <Popup selected={selected} closePopup={closePopup} /> //show the popup
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
