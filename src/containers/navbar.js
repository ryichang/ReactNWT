import React, { Component } from 'react';

export class NavBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="sidebar">
        <a href="http://www.nytimes.com/" target="_blank"><img src={"../img/img-nyt.png"} className="img-responsive nyt-logo img-circle"></img></a>
            <hr>
              <a id="hot" data-toggle="tooltip" data-placement="right" title="Popular" className="btn options top-select">
              <span className="material-icons">whatshot</span></a>
              <a id="top" data-toggle="tooltip" data-placement="right" title="TopStories" className="btn options">
              <span className="material-icons">timeline</span></a>
            </hr>
            <hr>
              <a id="tech" data-toggle="tooltip" data-placement="right" title="Techonology" className="btn options"><span className="material-icons">cast</span></a>
              <a id="business" data-toggle="tooltip" data-placement="right" title="Business" className="btn options"><span className="material-icons">business</span></a>
              <a id="politics" data-toggle="tooltip" data-placement="right" title="Politics" className="btn options"><span className="material-icons">account_balance</span></a>
              <a id="world" data-toggle="tooltip" data-placement="right" title="World" className="btn options"><span className="material-icons">public</span></a>
              <a id="sports" data-toggle="tooltip" data-placement="right" title="Sports" className="btn options"><span className="material-icons">directions_bike</span></a>
              <a id="fashion" data-toggle="tooltip" data-placement="right" title="Fashion" className="btn options"><span className="material-icons">filter_vintage</span></a>
              <a id="travel" data-toggle="tooltip" data-placement="right" title="Travel" className="btn options"><span className="material-icons">directions_car</span></a>
            </hr>
      </div>
    );
  }
}

export default NavBar;
