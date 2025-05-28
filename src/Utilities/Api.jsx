import { useState, useCallback } from "react";
import axios from "axios";

const apiUrl = "https://www.omdbapi.com/?apikey=9189dcef";

export function useApiSearch() {
  //useState is a React Hook that lets you add state to function components.
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //useCallback is a React Hook that lets you cache a function definition between re-renders.
  //This is useful for performance optimization, especially when passing functions to child components.
  //useCallback returns a memoized version of the callback that only changes if one of the dependencies has changed.
  //In this case, the callback function is searchMovies, and it has no dependencies, so it will not change between re-renders.
  const searchMovies = useCallback(async (search) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(`${apiUrl}&s=${search}`);
      console.log("ApiResult raw data", data);
      setResults(data.Search);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
    //To cache a function between re-renders of your component, wrap its definition into the useCallback Hook: []
  }, []);

  return { results, loading, error, searchMovies };
}

//   return new Promise((resolve, reject) => {
//     //if no method is provided, GET will be used as the default value.
//     axios
//       .get(searchUrl)
//       .then(({ data }) => {
//         console.log("ApiResult raw data", data);
//         //don't forget {data} to deconstruct down to the data layer else use data.data
//         const result = data.Search;
//         console.log("Api Result search ", result);
//         resolve(result);
//         return;
//       })
//       .catch((err) => {
//         reject(err.message);
//         return;
//       });
//   });
// };

export const apiOpenPopup = (id) => {
  let searchUrl = apiUrl + "&i=" + id;

  return new Promise((resolve, reject) => {
    //if no method is provided, GET will be used as the default value.
    axios
      .get(searchUrl)
      .then(({ data }) => {
        const result = data;
        console.log("Api apiOpenPopup ", result);
        resolve(result);
        return;
      })
      .catch((err) => {
        reject(err.message);
        return;
      });
  });
};
