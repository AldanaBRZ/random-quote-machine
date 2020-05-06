import React, { Component } from 'react';
import Button from './Button';
import Quote from './Quote';
import TwitterButton from './TwitterButton';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingQuote: false,
      index: 2,
      quotes: [
        {
          quote:  ' Live as if you were to die tomorrow. Learn as if you were to live forever.',
          author: 'Mahatma Gandhi'
        },
        {
          quote:   ' That which does not kill us makes us stronger.',
          author: 'Friedrich Nietzsche'
        },
        {
          quote:  ' Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.',
          author: 'Bernard M. Baruch'
        },
        {
          quote:  ' We must not allow other people’s limited perceptions to define us.',
          author: 'Virginia Satir'
        },
        {
          quote:  ' Do what you can, with what you have, where you are.',
          author: 'Theodore Roosevelt'
        },
        {
          quote:  ' Be yourself; everyone else is already taken.',
          author: 'Oscar Wilde'
        },
        {
          quote:  ' This above all: to thine own self be true.',
          author: 'William Shakespeare'
        },
        {
          quote:  ' If you cannot do great things, do small things in a great way.',
          author: 'Napoleon Hill'
        },
        {
          quote:  ' If opportunity doesn’t knock, build a door.',
          author: 'Milton Berle'
        },
        {
          quote:  ' Wise men speak because they have something to say; fools because they have to say something.',
          author: 'Plato'
        },
        {
          quote:  ' Strive not to be a success, but rather to be of value.',
          author: 'Albert Einstein'
        },
        {
          quote:  ' Two roads diverged in a wood, and I—I took the one less traveled by, and that has made all the difference.',
          author: 'Robert Frost'
        },
        {
          quote:  ' Do not let what you cannot do interfere with what you can do.',
          author: 'John Wooden'
        },
        {
          quote:  ' Whenever you find yourself on the side of the majority, it is time to pause and reflect.',
          author: 'Mark Twain'
        },
        {
          quote:  ' I haven’t failed. I’ve just found 10,000 ways that won’t work.',
          author: 'Thomas Edison'
        },
        {
          quote:  ' A journey of a thousand leagues begins beneath one’s feet.',
          author: 'Lao Tzu'
        },
        {
          quote:  ' I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
          author: 'Maya Angelou'
        },
        {
          quote:  ' Either you run the day, or the day runs you.',
          author: 'Jim Rohn'
        },
        {
          quote:  ' Life shrinks or expands in proportion to one’s courage.',
          author: 'Anais Nin'
        },
        {
          quote:  ' You must be the change you wish to see in the world.',
          author: 'Mahatma Gandhi'
        },
        {
          quote:  ' What you do speaks so loudly that I cannot hear what you say.',
          author: 'Ralph Waldo Emerson'
        },
        {
          quote:  ' Believe and act as if it were impossible to fail.',
          author: 'Charles Kettering'
        },
        {
          quote:  ' The difference between ordinary and extraordinary is that little extra.',
          author: 'Jimmy Johnson'
        }
      ]
    }
  }

  render() {
    const index = this.state.index;
    const quotesLength = this.state.quotes.length;
    const quotes = this.state.quotes;
    const handleClick = (e) => {
      e.preventDefault();
      const randomIndex = Math.floor(Math.random() * quotesLength);
      this.setState({
        index: randomIndex
      })
    }

    return(
      <div id="quote-box" className="card shadow-lg col-xs-12 col-sm-8 col-md-8 mx-auto" id="quote-box">
        <Quote className="card-body" quotes={quotes} index={index} />
        <TwitterButton quote={quotes[index].quote} author={quotes[index].author} />
        <Button handleClick={handleClick} />
      </div>
    )
  }
}

export default QuoteBox;