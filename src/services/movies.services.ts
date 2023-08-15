const KEY = import.meta.env.VITE_API_KEY;

export const fetchMoviesByGenre = async (
  id: number,
  page: number,
  sort: string
) => {
  const API = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&page=${page}&with_genres=${id}&sort_by=${sort}`;

  const response = await fetch(API);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  const data = await response.json();
  return data.results;
};

export const getMoviesCagories = async () => {
  try {
    const API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`;
    const response = await fetch(API);
    const result = await response.json();
    return result.genres;
  } catch (error) {
    console.log(error);
  }
};
