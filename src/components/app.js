import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';

import SearchBar from '../containers/search_bar';
import ArticleList from '../containers/article_list';
import SideBar from '../containers/sidebar';


export default class App extends Component {

  // static contextTypes = {
  //   router: PropTypes.object
  // }

  render() {
    const topicName = this.props.params.topic;

    return (
      <div className="col-md-12">
        <SideBar />
        <SearchBar />
        <ArticleList topic={topicName} />
      </div>
    );
  }
}
