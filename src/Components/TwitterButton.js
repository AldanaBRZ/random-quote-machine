import React from 'react';
import { TwitterShareButton } from 'react-share'

const TwitterButton = (props) => {
  return (
    <div>
        <TwitterShareButton 
          className="btn btn-block"
          url="twitter.com/intent/tweet"
          title={'"' + props.quote + '"' + ' -' + props.author + ' #quote'}>
          <a href={"twitter.com/intent/tweet"} 
            id="tweet-quote"><i class="fa fa-twitter"></i></a>
        </TwitterShareButton>
    </div>
  )
}

export default TwitterButton;