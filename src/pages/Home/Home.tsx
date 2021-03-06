import React, { useEffect, useState } from "react";
import { getMovieList } from "../../API/api";
import { Loading } from "./style";

import { CarouselComponent } from "./Main/Carousel/Carousel";
import { MovieList } from "./Main/MovieList/MovieList";
import { StudiosList } from "./Main/StudiosList/StudiosList";

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
      <main>
        {moviesList.length <= 0 ? <Loading /> : ""}
        <CarouselComponent />
        <StudiosList />
        <section>
          {moviesList.map((movie, key) => (
            <MovieList key={key} title={movie.title} items={movie.items} />
          ))}
        </section>
      </main>
    </>
  );
};

export { Home };
