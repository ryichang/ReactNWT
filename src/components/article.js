import React from 'react';

export default (props) => {
  // console.log('this is the props', props)
  return (
        <div className="col-md-4">
          <div className="col-md-12 card">
            <a href={props.web} target="_blank">
            <img className="card-img" src={props.image}></img>
            <p className="card-headline">{props.headline}</p>
            <p className="card-text">{props.section}</p>
            <p className="card-text">{props.snippet}</p>
            </a>
          </div>
        </div>
  );
}
