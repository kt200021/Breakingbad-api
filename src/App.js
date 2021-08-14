import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/ui/Header";
import axios from "axios";
import Search from "./components/ui/Search";
import Pagination from "./components/pagination.js";
import CharacterItem from "./components/characters/CharacterItem.js";
import DisplayCharacter from "./components/characters/DisplayCharacter";

const App = () => {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [listDisplay, setDisplay] = useState(false);
  const [character, setCharacter] = useState("");
  const [Page, setPage] = useState(1);

  useEffect(() => {
    const fetchItems = async () => {
      console.log(items);
      console.log(query);
      const result = await axios(
        `https://breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      console.log(items);

      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  console.log(listDisplay);
  const mainPage =
    Page === 1 ? (
      <div className="App">
        <Header />
        <Search
          getQuery={(query) => {
            setQuery(query);
          }}
        />
        :{}
        {/* <CharacterGrid isLoading={isLoading} items={items} /> */}
        <div>
          {items.length > 0 ? (
            <>
              <Pagination
                data={items}
                RenderComponent={CharacterItem}
                title="Posts"
                pageLimit={5}
                dataLimit={10}
                setDisplay={setDisplay}
                setCharacter={setCharacter}
                setPage={setPage}
              />
            </>
          ) : (
            <h1>No Posts to display</h1>
          )}
        </div>
      </div>
    ) : (
      <div className="App">
        <Header />

        <div>
          {items.length > 0 ? (
            <>
              <Pagination
                data={items}
                RenderComponent={CharacterItem}
                title="Posts"
                pageLimit={5}
                dataLimit={10}
                setDisplay={setDisplay}
                setCharacter={setCharacter}
                setPage={setPage}
              />
            </>
          ) : (
            <h1>No Posts to display</h1>
          )}
        </div>
      </div>
    );

  const content = listDisplay ? (
    <DisplayCharacter
      item={character}
      setDisplay={setDisplay}
      setCharacter={setCharacter}
    />
  ) : (
    mainPage
  );
  console.log(content, "bejj");
  return content;
};

export default App;
