import { useState, useCallback } from "react";
import axios from "axios";

const apiUrl = "https://www.omdbapi.com/?apikey=9189dcef";

export function useApiSearch() {
  //useState is a React Hook that lets you add state to function components.
  const [results, setResults] = useState([]);
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

/// This function is used to open a popup with the details of a movie when clicked.
// It takes the movie ID as a parameter and returns a promise that resolves with the movie details.
/**
 * Custom hook to fetch movie details by ID (for popup)
 * Returns: { movie, loading, error, fetchMovie }
 */
export function useApiOpenPopup() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Memoized function to fetch movie details
  const fetchMovie = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(`${apiUrl}&i=${id}`);
      setMovie(data);
      console.log("Api apiOpenPopup ", data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { movie, loading, error, fetchMovie };
}
