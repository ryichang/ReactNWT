import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import ArticleList from '../containers/article_list';
import NavBar from '../containers/navbar';

export default class App extends Component {
  render() {
    return (
      <div className="col-md-12">
        <NavBar />
        <SearchBar />
        <ArticleList />
      </div>
    );
  }
}
