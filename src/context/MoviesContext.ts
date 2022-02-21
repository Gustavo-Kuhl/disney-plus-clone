import { createContext } from "react";

interface IMovieList {
    category?: string,
    title?: string,
    items?: {
        results?: [
            {
                id?: number,
                name?: string,
                overview?: string,
                poster_path?: string,
                vote_average?: number
            }
        ]
    }
}

interface IMoviesContext {
    moviesList: IMovieList[],
    setMoviesList: (state: object[]) => void
}

const initialState = {
    moviesList: [],
    setMoviesList: () => {}
}

export const MoviesContext = createContext<IMoviesContext>(initialState);

