export const gener =
  "action|adventure|animation|biography|comedy|crime|documentary|drama|family|fantasy|film-noir|game-show||history|horror|music|musical|mystery|news|reality-tv|romance|sci-fi|short|sport|talk-show|thriller|war|western";

export const url = "https://imdb-api.com/en/API/";

export const key1 = "k_emd6dwx0";

export const key2 = "k_li516td4";

export const top_movies = "Top250Movies/";

export const popular_movies = "MostPopularMovies/";

export const popular_TVs = "MostPopularTVs/";

export const find_movie = "SearchMovie/";

export const all_details =
  "FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,";

export const allStorage = () => {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  return values;
};
