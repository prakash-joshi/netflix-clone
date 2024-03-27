export const LOGIN_BACKGROUND_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const USER_AVATAR = "https://robohash.org/test";

const TMDB_API_READ_ACCESS_TOKEN = import.meta.env
  .VITE_TMDB_API_READ_ACCESS_TOKEN;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + TMDB_API_READ_ACCESS_TOKEN,
  },
};

export const API_MOVIE_NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
