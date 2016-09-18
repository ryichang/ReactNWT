import { combineReducers } from 'redux';
import ArticleReducer from './reducer_article';
import SearchBarReducer from './reducer_search_bar';

const rootReducer = combineReducers({
  article: ArticleReducer,
  searchBar: SearchBarReducer
});

export default rootReducer;
