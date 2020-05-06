import React from 'react';

const Button = (props) => {
  return (
    <div style={{paddingBottom: 20}}>
      <button className="btn btn-primary btn-block" onClick={props.handleClick} id="new-quote">New quote</button>
    </div>
  )
}

export default Button;