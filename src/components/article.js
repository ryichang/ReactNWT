import React from 'react';

export default (props) => {
  // console.log('this is the props', props)
  return (
      <div className="media-left">
        <div className="media-body">
          <h1>{props.headline}</h1>
          <p>{props.section}</p>
          <p>{props.snippet}</p>
          <img className="media-object" src={props.image}></img>
        </div>
      </div>
  );
}
