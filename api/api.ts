import { Movie } from './../types/movie.d';
import axios, { AxiosResponse } from 'axios';
import { MOVIE_DB_API } from '@env';

const API_URL = 'https://api.themoviedb.org/3/';
const apiKey = MOVIE_DB_API;
const BASE_URL = `${API_URL}?api_key=${apiKey}`;

export const DISCOVER_API = `${API_URL}discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`