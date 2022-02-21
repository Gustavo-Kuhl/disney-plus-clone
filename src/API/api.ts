const URL = "https://api.themoviedb.org/3";
const KEY = "f7b56b18c2a0160a4719505ed41e9431";

const apiFetch = async (endpoint: string) => {
  const response = await fetch(`${URL}${endpoint}`);
  const json = await response.json();
  return json;
};

export const getMovieList = async () => {
  return [
    {
      category: "originals",
      title: "Originais do Disney Plus ",
      items: await apiFetch(
        `/discover/tv?with_network=213&language=pt-BR&api_key=${KEY}`
      ),
    },
    {
      category: "trending",
      title: "Recomendados para voce",
      items: await apiFetch(`/trending/all/week?language=pt-BR&api_key=${KEY}`),
    },
    {
      category: "toprated",
      title: "Em alta",
      items: await apiFetch(`/movie/top_rated?language=pt-BR&api_key=${KEY}`),
    },
    {
      category: "action",
      title: "Ação",
      items: await apiFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${KEY}`
      ),
    },
    {
      category: "comedy",
      title: "Comédia",
      items: await apiFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${KEY}`
      ),
    },
    {
      category: "horror",
      title: "Terror",
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
      title: "Documentário",
      items: await apiFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${KEY}`
      ),
    },
  ];
};
