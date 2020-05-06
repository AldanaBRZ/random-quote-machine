import React from 'react';

const Quote = (props) => {
  return (
    <blockquote className="blockquote">
      <p id="text">
        <i class="fa fa-quote-left"></i>
        {props.quotes[props.index].quote}
      </p>
      <footer
        className="blockquote-footer"
        id="author">
        <cite>{props.quotes[props.index].author}</cite>
      </footer>
    </blockquote>
  )
}

export default Quote;