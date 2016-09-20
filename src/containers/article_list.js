import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from '../components/article'
import { fetchTopic } from '../actions/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { bindActionCreators } from 'redux';

class ArticleList extends Component {

  componentWillMount() {
    const topicName = this.props.topic;
    this.props.fetchTopic(topicName)
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.topic !== this.props.topic) {
      this.props.fetchTopic(nextProps.topic)
    }
  }

  renderArticle(articleData) {
    const topicName = this.props.topic;
    let articles;
    if (topicName === "popular" && articleData.response === undefined) {
      console.log('first', articleData)
      articles = articleData.results.map(result => {
        // const prefix="http://static01.nyt.com/";
        const media = result.media[0]['media-metadata'][0];
        let url = media ? media.url : "../img/img-nyt.png"

        return <Article
        key={result.title}
        headline={result.title}
        snippet={result.abstract}
        section={result.section}
        web={result.url}
        image={url}
        />
      })
    } else if (articleData.response !== undefined) {
      console.log('second', articleData)
      articles = articleData.response.docs.map(doc => {
        const prefix = "http://static01.nyt.com/";
        const media = doc.multimedia[2];
        const url = media ? prefix + media.url : "../img/img-nyt.png";

        return <Article
          key={doc._id}
          headline={doc.headline.main}
          snippet={doc.snippet}
          section={doc.section_name}
          web={doc.web_url}
          image={url}
        />

      })
    } else {
      console.log('third', articleData)
      articles = articleData.results.map(result => {
        const prefix = "http://static01.nyt.com/";
        const media = result.multimedia[1];
        let url = media ? media.url : "../img/img-nyt.png"

        return <Article
        key={result.title}
        headline={result.title}
        snippet={result.abstract}
        section={result.section}
        web={result.url}
        image={url}
        />

        // if (!src || src === undefined){ src= "../img/img-nyt.png"; }
        // else { const url = prefix + src}
        // const url = prefix + image;
        // console.log(url);

        // return <Article
        //   key={doc._id}
        //   headline={doc.headline.main}
        //   snippet={doc.snippet}
        //   section={doc.section_name}
        //   web={doc.web_url}
        //   image={url}
        // />

      })
    }

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
    // const topicName = this.props.topic;


    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 0,
      transitionLeaveTimeout: 0
    };

    console.log(" this.props.topic",  this.props.topic)

    if (_.isEmpty(this.props.article)){
      return (
        <div>

        </div>
      )
    }

    return (
      <div className="col-md-12 list-group content">
         {/* <ReactCSSTransitionGroup {...transitionOptions}> */}
        {/* {this.props.article.map(this.renderArticle)} */}
        {this.renderArticle(this.props.article)}
         {/* </ReactCSSTransitionGroup>  */}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { article: state.article};
// }
//ES6 Syntax
function mapStateToProps(state) {
  const { article } = state.article;
  // const article = state.article;
  // if (article.article !== undefined) {
    // console.log('state article is', article.article.docs[0]._id)
    // console.log("ARTICLE LENHTH", article.article.response.docs.length)
  // }

  return {
    article
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//
//   })
// }

export default connect(mapStateToProps, { fetchTopic })(ArticleList);
