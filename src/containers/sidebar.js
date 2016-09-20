import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTechnology } from '../actions/index';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';



class SideBar extends Component {
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
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="http://www.nytimes.com/" target="_blank"><img src={"../img/img-nyt.png"} className="img-responsive nav-logo img-circle"></img></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem><Link to="/popular">Popular</Link></NavItem>
              <NavItem><Link to="/TopStories">Top Stories</Link></NavItem>
              <NavItem><Link to="/technology">Technology</Link></NavItem>
              <NavItem><Link to="/business">Business</Link></NavItem>
              <NavItem><Link to="/politics">Politics</Link></NavItem>
              <NavItem><Link to="/world">World</Link></NavItem>
              <NavItem><Link to="/sports">Sports</Link></NavItem>
              <NavItem><Link to="/fashion">Fashion</Link></NavItem>
              <NavItem><Link to="/travel">Travel</Link></NavItem>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

      <div className="sidebar">
        <a href="http://www.nytimes.com/" target="_blank"><img src={"../img/img-nyt.png"} className="img-responsive nyt-logo img-circle"></img></a>
          <hr />
            <Link to="/popular" id="hot" data-toggle="tooltip" data-placement="right" title="Popular" className="btn options top-select">
            <span className="material-icons">whatshot</span></ Link>
            <Link to="/TopStories" id="top" data-toggle="tooltip" data-placement="right" title="TopStories" className="btn options">
            <span className="material-icons">timeline</span></Link>

          <hr />
            <Link to="/technology" id="tech" data-toggle="tooltip" data-placement="right" title="Techonology" className="btn options"><span className="material-icons">cast</span></Link>
            <Link to="/business" id="business" data-toggle="tooltip" data-placement="right" title="Business" className="btn options"><span className="material-icons">business</span></Link>
            <Link to="/politics" id="politics" data-toggle="tooltip" data-placement="right" title="Politics" className="btn options"><span className="material-icons">account_balance</span></Link>
            <Link to="/world" id="world" data-toggle="tooltip" data-placement="right" title="World" className="btn options"><span className="material-icons">public</span></Link>
            <Link to="/sports" id="sports" data-toggle="tooltip" data-placement="right" title="Sports" className="btn options"><span className="material-icons">directions_bike</span></Link>
            <Link to="/fashion" id="fashion" data-toggle="tooltip" data-placement="right" title="Fashion" className="btn options"><span className="material-icons">filter_vintage</span></Link>
            <Link to="/travel" id="travel" data-toggle="tooltip" data-placement="right" title="Travel" className="btn options"><span className="material-icons">directions_car</span></Link>
      </div>
      </div>
    );
  }
}

export default SideBar;
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators( { fetchTechnology }, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(NavBar);
