const URL = "https://api.themoviedb.org/3";
const KEY = import.meta.env.VITE_TMDB_KEY;

const apiFetch = async (endpoint: string) => {
  const response = await fetch(`${URL}${endpoint}`);
  const json = await response.json();
  return json;
};

export const getMovieList = async () => {
  return [
    {
      category: "originals",
      title: "Originals",
      items: await apiFetch(
        `/discover/tv?with_network=213&language=pt-BR&api_key=${KEY}`
      ),
    },
    {
      category: "trending",
      title: "Trending",
      items: await apiFetch(`/trending/all/week?language=pt-BR&api_key=${KEY}`),
    },
    {
      category: "toprated",
      title: "Top rated",
      items: await apiFetch(`/movie/top_rated?language=pt-BR&api_key=${KEY}`),
    },
    {
      category: "action",
      title: "Action",
      items: await apiFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${KEY}`
      ),
    },
    {
      category: "comedy",
      title: "Comedy",
      items: await apiFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${KEY}`
      ),
    },
    {
      category: "horror",
      title: "Horror",
      items: await apiFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${KEY}`
      ),
    },
    {
      category: "romance",
      title: "Romance",
      items: await apiFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${KEY}`
      ),
    },
    {
      category: "documentary",
      title: "Documentary",
      items: await apiFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${KEY}`
      ),
    },
  ];
};
