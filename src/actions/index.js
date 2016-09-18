import axios from 'axios';

const API_KEY = '6c28641ec7424a5fa0ca019acd34ba24';
// const ROOT_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json' + API_KEY;
const ROOT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?appid=${API_KEY}`;

export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const FETCH_TOPIC = 'FETCH_TOPIC';
export const SET_INPUT_CHANGE = 'SET_INPUT_CHANGE';

export function fetchArticle(article) {
  const url = `${ROOT_URL}&q=${article}`;
  const request = axios.get(url);

  console.log('Request', request);

  return {
    type: FETCH_ARTICLE,
    payload: request
  };
}

export function fetchTopic(topic) {
  let url;
  if (topic === "TopStories") {
    url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=6c28641ec7424a5fa0ca019acd34ba24'
  } else {
    url = `${ROOT_URL}&q=${topic}`;
  }

  const request = axios.get(url);
  console.log('Request', request);

  return {
    type: FETCH_TOPIC,
    payload: request
  }
}

export function setInputChange(term) {
  return {
    type: SET_INPUT_CHANGE,
    term: term
  }
}
