import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArticle } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
    //Fetch API
    this.props.fetchArticle(this.state.term);
    this.setState( { term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        placeholder="Search for latest articles"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchArticle }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
