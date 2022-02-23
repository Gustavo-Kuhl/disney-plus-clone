import React, { useEffect, useState } from 'react'
import { MoviesContainer, MoviesSection, Option, Select, Image } from './style'
import { getMovieList } from '../../API/api'

interface IMovies {
    category: string,
    title: string,
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

export const Movies: React.FC = () => {

    const [movies, setMovies] = useState<IMovies[]>()
    const [selected, setSelected] = useState<string>("Top rated")

    const getMovies = async (): Promise<void> => {
        const movieList = await getMovieList()
        setMovies(movieList)
    }

    useEffect(() => {
        getMovies()
    }, [])

    console.log(selected)

    return (
        <MoviesContainer>
            <div style={{display: "flex"}}>
                <h2>Movies</h2>
                
                <Select onChange={({target}) => setSelected(target.value)}>
                    <Option value="Top rated">Top rated</Option>
                    <Option value="Horror">Horror</Option>
                    <Option value="Documentary">Documentary</Option>
                    <Option value="Comedy">Comedy</Option>
                </Select>
            </div>
            <MoviesSection>
                {movies?.map(movie => {
                    return (
                        <>
                            {selected === movie.title ? (
                                movie.items?.results?.map(item => {
                                    return (
                                        <Image src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
                                    )
                                })
                            ): (
                                ""
                            )}
                        </>
                    )
                })}
            </MoviesSection>
        </MoviesContainer>
    )
}