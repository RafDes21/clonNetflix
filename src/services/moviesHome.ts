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

export const getChildren = async () => {
  try {
    const API = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&certification_country=US&certification.lte=G&sort_by=popularity.desc`;
    const response = await fetch(API);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error getting theater movies", error);
  }
};

export const getComedy = async () => {
  try {
    const API = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35&with_cast=23659&sort_by=revenue.desc`;

    const response = await fetch(API);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error getting Comedy movies", error);
  }
};

export const getTop = async () => {
  try {
    const API = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&primary_release_year=2023&sort_by=popularity.desc`;
    const response = await fetch(API);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error getting Top movies", error);
  }
};
