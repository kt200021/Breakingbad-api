import React, { useState, useEffect } from "react";
import Header from "../ui/Header";
import axios from "axios";

const DisplayCharacter = (props) => {
  let { item, setCharacter, setDisplay } = props;
  console.log(item);
  const [quotes, setQuotes] = useState([]);
  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const result = await axios(
  //       `https://breakingbadapi.com/api/quotes/${item.id}`
  //     );
  //     setQuotes(result.data);
  //     console.log(quotes);
  //   };
  //   fetchItems();
  // });

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://breakingbadapi.com/api/quote?author=${item.name}`
      );
      setQuotes(result.data);
      console.log(quotes, "jellelelele", item.char_id);
    };
    if (quotes.length === 0) fetchItems();
    console.log(quotes);
  });
  return (
    <div class="display">
      <Header />
      <div class="back">
        <button
          class="btn"
          onClick={() => {
            setCharacter("");
            setDisplay(false);
            setCharacter([]);
          }}
        >
          <span> Go Back to Characters List</span>
        </button>
      </div>
      <img class="charimg" src={item.img} alt="" />
      <h1>{item.name}</h1>

      <ul>
        <li>
          <strong>Actor Name:</strong> {item.portrayed}
        </li>
        <li>
          <strong>Nickname:</strong> {item.nickname}
        </li>
        <li>
          <strong>Birthday:</strong> {item.birthday}
        </li>
        <li>
          <strong>Cccupation:</strong> {item.occupation}
        </li>
        <li>
          <strong>Seasons:</strong> {item.appearance}
        </li>
        <li>
          <strong>Status:</strong> {item.status}
        </li>
      </ul>
      <h3>Quotes</h3>
      <ul>
        {quotes.map((quote) => {
          console.log(quote.quote);
          return <li>" {quote.quote} "</li>;
        })}
      </ul>
    </div>
  );
};

export default DisplayCharacter;
