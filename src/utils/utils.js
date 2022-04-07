export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "imdb-data-searching.p.rapidapi.com",
    "X-RapidAPI-Key": "679822f7ccmsha9dc8a7cf98d2e9p1f5c67jsnd6e4ca1ecc76",
  },
};

// fetch('https://imdb-data-searching.p.rapidapi.com/om?t=the%20game', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

export const gener =
  "action|adventure|animation|biography|comedy|crime|documentary|drama|family|fantasy|film-noir|game-show||history|horror|music|musical|mystery|news|reality-tv|romance|sci-fi|short|sport|talk-show|thriller|war|western";

export const url = "https://imdb-api.com/en/API/";

export const key = "k_emd6dwx0";

export const top_movies = "Top250Movies/";

export const popular_movies = "MostPopularMovies/";

export const popular_TVs = "MostPopularTVs/";

export const find_movie = "SearchMovie/";

export const all_details =
  "FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,";
