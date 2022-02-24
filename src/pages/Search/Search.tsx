import React, { useState, useEffect } from "react";
import {
  SearchContainer,
  Input,
  SearchListContainer,
  SearchList,
} from "./style";
import { getMovieList } from "../../API/api";
import { SearchListItem } from "./SearchListItem";

interface IMovieList {
  category?: string;
  title?: string;
  items?: {
    results?: [
      {
        id?: number;
        name?: string;
        overview?: string;
        poster_path?: string;
        vote_average?: number;
      }
    ];
  };
}

export const Search: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [moviesList, setMoviesList] = useState<IMovieList[]>([]);

  async function getMovies() {
    const response = await getMovieList();
    setMoviesList(response);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SearchContainer>
      <Input
        placeholder="Search by title, character or genre"
        onChange={({ target }) => setInput(target.value)}
      ></Input>


      <SearchListContainer>
        <SearchList>
          {moviesList.map((movie, index) => {
            return (
              <SearchListItem
                key={index}
                items={movie.items}
                input={input}
              />
            );
          })}
        </SearchList>
      </SearchListContainer>
    </SearchContainer>
  );
};
