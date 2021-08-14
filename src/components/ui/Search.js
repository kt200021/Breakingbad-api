import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (q) => {
    console.log(q);
    setText(q);
    getQuery(q);
  };
  console.log(text);
  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
