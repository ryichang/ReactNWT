import axios from 'axios';

const API_KEY = '6c28641ec7424a5fa0ca019acd34ba24';
// const ROOT_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json' + API_KEY;
const ROOT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?appid=${API_KEY}`;
const TOPIC_URL = `https://api.nytimes.com/svc/topstories/v2/`;
const POPULAR_KEY = 'e4cbd64f281e46f882876736e874cff6';
const POPULAR_URL = `http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=`


export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const FETCH_TOPIC = 'FETCH_TOPIC';
export const SET_INPUT_CHANGE = 'SET_INPUT_CHANGE';

export function fetchArticle(article) {
  const url = `${ROOT_URL}&q=${article}`;
  const request = axios.get(url);

  // console.log('SEARCH IS', request);

  return {
    type: FETCH_ARTICLE,
    payload: request
  };
}

export function fetchTopic(topic) {
  let url;
  if (topic === "TopStories") {
    url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=6c28641ec7424a5fa0ca019acd34ba24'
  } else if (topic === "popular") {
    url = `${POPULAR_URL}${POPULAR_KEY}`;
  } else {
    url = `${TOPIC_URL}${topic}.json?api-key=${API_KEY}`;
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
