import React, { Component } from 'react';

import SearchBar from '../containers/search_bar.js';
import ArticleList from '../containers/article_list';

export default class App extends Component {
  render() {
    return (
      <div data-wow-delay="2s" class="col-md-12 wow fadeIn">
        <SearchBar />
        <ArticleList />
      </div>
    );
  }
}
