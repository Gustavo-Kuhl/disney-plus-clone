import React, { useContext, useEffect, useState } from "react";
import { MovieListContainer, List, ListItem, NavigateButton, ListArea } from "./style";

import { MoviesContext } from "../../../../context/MoviesContext";

interface Props {
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

export const MovieList: React.FC<Props> = ({ title, items }) => {

  const [scrollX, setScrollX] = useState<number>(0)

  function handleLeftButton() {

    // Pegando metade da tela para poder fazer a rolagem
    let x = scrollX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0
    } 
    setScrollX(x)
  }

  function handleRightButton() {

    // Pegando metade da tela para poder fazer a rolagem
    let x =  scrollX - Math.round(window.innerWidth / 2);

    let listWidth = items!.results!.length * 367

    if ((window.innerWidth - listWidth) > x) {
      x = (window.innerWidth - listWidth) + 20
    }

    setScrollX(x)
  }

  return (
    <MovieListContainer>
      <h2>{title}</h2>
      <NavigateButton onClick={handleLeftButton} left={true}>
        &lt;
      </NavigateButton>
      <NavigateButton onClick={handleRightButton} right={true}>
        &gt;
      </NavigateButton>
      <ListArea>
        <List style={{marginLeft: scrollX}}>
          {items?.results?.length != undefined &&
            items.results.map((movie) => (
              <ListItem key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="movie"
                />
              </ListItem>
            ))}
        </List>
      </ListArea>
    </MovieListContainer>
  );
};
