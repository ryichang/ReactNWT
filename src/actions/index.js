const API_KEY = '6c28641ec7424a5fa0ca019acd34ba24';
// const ROOT_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json' + API_KEY;
const ROOT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?appid=${API_KEY}`;

export const FETCH_ARTICLE = 'FETCH_ARTICLE';

export function fetchArticle(article) {
  const url = `${ROOT_URL}&q=${article}`;

  return {
    type: FETCH_ARTICLE
  };
}
