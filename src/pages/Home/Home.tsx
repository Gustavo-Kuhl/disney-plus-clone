import React, { useContext, useEffect, useState } from "react";
import { getMovieList } from "../../API/api";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Loading } from "./style";

import { Carousel } from "./Main/Carousel/Carousel";
import { MovieList } from "./Main/MovieList/MovieList";
import { StudiosList } from "./Main/StudiosList/StudiosList";
import { MainContainer } from "./style";

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

const Home: React.FC = () => {
  const [moviesList, setMoviesList] = useState<IMovieList[]>([]);

  async function getMovies() {
    const response = await getMovieList();
    setMoviesList(response);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <MainContainer>
        {moviesList.length <= 0 ? <Loading /> : ""}
        <Carousel />
        <StudiosList />
        <section>
          {moviesList.map((movie, key) => (
            <MovieList key={key} title={movie.title} items={movie.items} />
          ))}
        </section>
      </MainContainer>
    </>
  );
};

export { Home };
