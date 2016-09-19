import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTechnology } from '../actions/index';
import { Link } from 'react-router';

class NavBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    console.log('button is clicked', this.state.term)
    event.preventDefault();
    //Fetch API
    this.props.fetchTechnology(this.state.term);
    this.setState( { term: '' });
  }

  render() {
    return (
      /* NAVBAR THAT ONLY SHOWS UP IN MOBILE */
      // <nav class="navbar navbar-inverse navbar-fixed-top">
      //   <div class="container-fluid">
      //     <div class="navbar-header">
      //       <button type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" class="navbar-toggle collapsed">
      //       <span class="icon-bar"></span>
      //       <span class="icon-bar"></span>
      //       <span class="icon-bar"></span>
      //       </button>
      //       <a href="#" class="navbar-brand"><img src="img/img-nyt.png" alt="logo" class="img-responsive nyt-logo img-circle"></img></a>
      //     </div>
      //     <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
      //       <ul class="nav navbar-nav navbar-right">
      //         <li><a id="li-popular" class="active">Most Popular</a></li>
      //         <li><a id="li-top">Top Stories</a></li>
      //         <li><a id="li-tech">Technology</a></li>
      //         <li><a id="li-business">Business</a></li>
      //         <li><a id="li-politics">Politics</a></li>
      //         <li><a id="li-world">World</a></li>
      //         <li><a id="li-sports">Sports</a></li>
      //         <li><a id="li-fashion">Fashion</a></li>
      //         <li><a id="li-travel">Travel</a></li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>

      <div className="sidebar">
        <a href="http://www.nytimes.com/" target="_blank"><img src={"../img/img-nyt.png"} className="img-responsive nyt-logo img-circle"></img></a>
          <hr>
            <Link to="/popular" id="hot" data-toggle="tooltip" data-placement="right" title="Popular" className="btn options top-select">
            <span className="material-icons">whatshot</span></ Link>
            <Link to="/TopStories" id="top" data-toggle="tooltip" data-placement="right" title="TopStories" className="btn options">
            <span className="material-icons">timeline</span></Link>
          </hr>
          <hr>
            <Link to="/technology" id="tech" data-toggle="tooltip" data-placement="right" title="Techonology" className="btn options"><span className="material-icons">cast</span></Link>
            <Link to="/business" id="business" data-toggle="tooltip" data-placement="right" title="Business" className="btn options"><span className="material-icons">business</span></Link>
            <Link to="/politics" id="politics" data-toggle="tooltip" data-placement="right" title="Politics" className="btn options"><span className="material-icons">account_balance</span></Link>
            <Link to="/world" id="world" data-toggle="tooltip" data-placement="right" title="World" className="btn options"><span className="material-icons">public</span></Link>
            <Link to="/sports" id="sports" data-toggle="tooltip" data-placement="right" title="Sports" className="btn options"><span className="material-icons">directions_bike</span></Link>
            <Link to="/fashion" id="fashion" data-toggle="tooltip" data-placement="right" title="Fashion" className="btn options"><span className="material-icons">filter_vintage</span></Link>
            <Link to="/travel" id="travel" data-toggle="tooltip" data-placement="right" title="Travel" className="btn options"><span className="material-icons">directions_car</span></Link>
          </hr>
      </div>
    );
  }
}

export default NavBar;
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators( { fetchTechnology }, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(NavBar);
