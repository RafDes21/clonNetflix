import React, { ReactNode } from "react";

export type HeaderProps = {
  image: string;
  title: string;
  description: string;
};

export interface ContentSectionProps {
  children: ReactNode;
  
}

export interface ContentSectionLoadingProps {
  children: ReactNode;
  loading:boolean
}

export interface ContentMovieChildren {
  movies: MovieData[];
  title: string;
  isMobile: boolean;
}
export interface DataApi {
  title: string;
  poster_path: string;
  release_date: string;
  backdrop_path: string;
  overview: string;
  id: string;
}

export interface MovieData {
  title: string;
  poster: string;
  date: string;
  image: string;
  description: string;
  id: string;
}
export interface MovieHomeState {
  popular: MovieData[];
  teather: MovieData[];
  children: MovieData[];
  comedies: MovieData[];
  top: MovieData[];
}

export interface MovieSeriesState {
  news: MovieData[];
  crime: MovieData[];
  family: MovieData[];
  kids: MovieData[];
  comedies: MovieData[];
  setCategories: Categorie[];
}

export interface MovieMovieState {
  action: MovieData[];
  adventure: MovieData[];
  family: MovieData[];
  fantasy: MovieData[];
  comedies: MovieData[];
  moviesCategories: Categorie[];
}

export interface Categorie {
  id: number;
  name: string;
}

export interface RandomMovie {
  poster: string;
  image: string;
}
export interface ListCardsProps {
  movies: MovieData[];
  isMobile: boolean;
}
export interface ItemCardProps {
  id: string;
  image: string;
  title: string;
}
