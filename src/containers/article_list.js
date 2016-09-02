import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArticleList extends Component {
  renderArticle(articleData) {
    return (
      <tr>
        <td>{articleData.response.meta.hits}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Headline print_headline</th>
            <th>Multimedia url</th>
            <th>Lead Paragraph</th>
            <th>Keywords section_name</th>
            <th>publication date</th>
          </tr>
        </thead>
        <tbody>
            {this.props.article.map(this.renderArticle)}
        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state) {
//   return { article: state.article};
// }
//ES6 Syntax
function mapStateToProps({ article }) {
  return { article };
}

export default connect(mapStateToProps)(ArticleList);
