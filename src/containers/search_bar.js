import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArticle, setInputChange } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.props.setInputChange('')
    // this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // this.props.setInputChange is an action
    this.props.setInputChange(event.target.value)
    // this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
    //Fetch API
    this.props.fetchArticle(this.props.term);
    this.props.setInputChange('')
    // this.setState( { term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <span className="material-icons search">search</span>
        <input
        placeholder="Search for articles, headlines, etc."
        className="form-control"
        value={this.props.term}
        onChange={this.onInputChange}
        />
        {/* <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span> */}
      </form>
    );
  }
}

function mapStateToProps(state) {
  const { term } = state.searchBar;

  return { term }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchArticle, setInputChange }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
