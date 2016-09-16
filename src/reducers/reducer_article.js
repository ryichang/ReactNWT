import { FETCH_ARTICLE } from '../actions/index';
import { FETCH_TECHNOLOGY } from '../actions/index';

export default function(state = [], action) {
  console.log('Action received', action);
  switch (action.type) {
    case FETCH_ARTICLE:
      // return state.concat([ action.payload.data ]);
      // const prevArticles = state.sportsArticle
      // const newArticles = prevArticles.concat([action.payload.data])
      // return { ...state, sportsArticle: newArticles}
      return [ action.payload.data, ...state ];
    case FETCH_TECHNOLOGY:
      return [action.payload.data, ...state ];
  }
  return state;
}
