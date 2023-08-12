const key = import.meta.env.VITE_API_KEY;

export const getPopular = async () => {
  try {
    const API = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc`;
    const response = await fetch(API);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error getting popular movies", error);
  }
};

export const getTheater = async () => {
  try {
    const API = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;
    const response = await fetch(API);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error getting theater movies", error);
  }
};
