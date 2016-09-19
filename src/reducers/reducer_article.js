import { FETCH_ARTICLE } from '../actions/index';
import { FETCH_TOPIC } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLE:
      // return state.concat([ action.payload.data ]);
      // const prevArticles = state.sportsArticle
      // const newArticles = prevArticles.concat([action.payload.data])
      // return { ...state, sportsArticle: newArticles}
      return {...state, article: action.payload.data};
    case FETCH_TOPIC:
      console.log('received', action.payload.data)
    // console.log('reudcer received', action.payload.data.response.docs[0]._id);
      return {...state, article: action.payload.data};
      // return {article: action.payload.data, ...state };
    default:
      return state;
  }
}
