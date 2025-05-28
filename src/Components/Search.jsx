//rafc
import React from "react";

export const Search = ({ handleInput, search }) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Search for a movie...'
        className='searchbox'
        onChange={handleInput}
        onKeyDown={search}
      />
    </div>
  );
};
