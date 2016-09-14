import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from '../components/article'

class ArticleList extends Component {
  renderArticle(articleData) {
    let articles = articleData.response.docs.map(doc => {
      const prefix = "http://static01.nyt.com/";
      const media = doc.multimedia[2];
      let url = media ? prefix + media.url : "../img/img-nyt.png"
      // if (!src || src === undefined){ src= "../img/img-nyt.png"; }
      // else { const url = prefix + src}
      // const url = prefix + image;
      console.log(url);

      return <Article
        headline={doc.headline.main}
        snippet={doc.snippet}
        section={doc.section_name}
        web={doc.web_url}
        image={url}
      />

    })

    return articles


    // return (
    //   // const name = articleData.response.meta.hits;
    //
    //
    //   <tr key={articleData.response.meta.hits}>
    //     <td>{articleData.response.meta.hits}</td>
    //   </tr>
    // )
  }

  render() {
    return (
      <div className="col-md-12 list-group">
        {this.props.article.map(this.renderArticle)}
      </div>
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
