import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTechnology } from '../actions/index';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Tooltip, OverlayTrigger} from 'react-bootstrap';



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
    const tooltipNWT = (
    <Tooltip id="tooltip"><strong>New York Times</strong></Tooltip>
    );
    const tooltipPopular = (
    <Tooltip id="tooltip"><strong>Popular</strong></Tooltip>
    );
    const tooltipTopStories = (
    <Tooltip id="tooltip"><strong>Top Stories</strong></Tooltip>
    );
    const tooltipTechnology = (
    <Tooltip id="tooltip"><strong>Technology</strong></Tooltip>
    );
    const tooltipBusiness = (
    <Tooltip id="tooltip"><strong>Business</strong></Tooltip>
    );
    const tooltipPolitics = (
    <Tooltip id="tooltip"><strong>Politics</strong></Tooltip>
    );
    const tooltipWorld = (
    <Tooltip id="tooltip"><strong>World</strong></Tooltip>
    );
    const tooltipSports = (
    <Tooltip id="tooltip"><strong>Sports</strong></Tooltip>
    );
    const tooltipFashion = (
    <Tooltip id="tooltip"><strong>Fashion</strong></Tooltip>
    );
    const tooltipTravel = (
    <Tooltip id="tooltip"><strong>Travel</strong></Tooltip>
    );

    return (
      <div>
        <Navbar fixedTop inverse>
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
            <OverlayTrigger placement="right" overlay={tooltipPopular}><Link to="/popular" id="hot" title="Popular" className="btn options top-select">
            <span className="material-icons">whatshot</span>
            </ Link></OverlayTrigger>
            <OverlayTrigger placement="right" overlay={tooltipTopStories}><Link to="/TopStories" id="top" title="TopStories" className="btn options">
            <span className="material-icons">timeline</span></Link></OverlayTrigger>

          <hr />
            <OverlayTrigger placement="right" overlay={tooltipTechnology}><Link to="/technology" id="tech" title="Techonology" className="btn options"><span className="material-icons">cast</span></Link></OverlayTrigger>
            <OverlayTrigger placement="right" overlay={tooltipBusiness}><Link to="/business" id="business" title="Business" className="btn options"><span className="material-icons">business</span></Link></OverlayTrigger>
            <OverlayTrigger placement="right" overlay={tooltipPolitics}><Link to="/politics" id="politics" title="Politics" className="btn options"><span className="material-icons">account_balance</span></Link></OverlayTrigger>
            <OverlayTrigger placement="right" overlay={tooltipWorld}><Link to="/world" id="world" title="World" className="btn options"><span className="material-icons">public</span></Link></OverlayTrigger>
            <OverlayTrigger placement="right" overlay={tooltipSports}><Link to="/sports" id="sports" title="Sports" className="btn options"><span className="material-icons">directions_bike</span></Link></OverlayTrigger>
            <OverlayTrigger placement="right" overlay={tooltipFashion}><Link to="/fashion" id="fashion" title="Fashion" className="btn options"><span className="material-icons">filter_vintage</span></Link></OverlayTrigger>
            <OverlayTrigger placement="right" overlay={tooltipTravel}><Link to="/travel" id="travel" title="Travel" className="btn options"><span className="material-icons">directions_car</span></Link></OverlayTrigger>
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
