import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {
  searchState: any,
};

const SearchFilter = ({ searchState }: Props) => {
  const {value, onChange, type} = searchState;
    console.log(searchState)

  return (
    <div className="search-input">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search projects"
      />
      <BsSearch />
    </div>
  );
};

export default SearchFilter;
