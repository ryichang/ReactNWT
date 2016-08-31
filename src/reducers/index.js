import { combineReducers } from 'redux';
import ArticleReducer from './reducer_article';

const rootReducer = combineReducers({
  article: ArticleReducer
});

export default rootReducer;
