import React from "react";
import { ResultItem } from "./style";

interface Props {
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
  input: string;
}

export const SearchListItem: React.FC<Props> = ({ items, input }) => {
  const filteredItems = items?.results?.filter((item) => {
    return item.name?.toLocaleLowerCase().trim().includes(input);
  });

  return (
    <>
      {filteredItems?.map((item) => {
        return (
          <ResultItem key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
              alt={`movie or serie image: ${item.name}`}
            />
          </ResultItem>
        );
      })}
    </>
  );
};
