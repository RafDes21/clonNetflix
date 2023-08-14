const KEY = import.meta.env.VITE_API_KEY;

export const fetchSeriesByGenre = async (
  id: number,
  page: number,
  sort: string
) => {
  const API = `https://api.themoviedb.org/3/discover/tv?api_key=${KEY}&page=${page}&with_genres=${id}&sort_by=${sort}`;

  const response = await fetch(API);
  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  const data = await response.json();
  return data.results;
};

export const getCagories = async () => {
  const API = `https://api.themoviedb.org/3/genre/tv/list?api_key=${KEY}&language=en-US`;
  const response = await fetch(API);
  const result = await response.json();
  return result.genres;
};
