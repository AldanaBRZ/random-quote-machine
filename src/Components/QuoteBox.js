import React, { Component } from 'react';
import Button from './Button';
import Quote from './Quote';
import TwitterButton from './TwitterButton';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null,
      quotes: [
        {
          quote:  ' I seem to have been only like a boy playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me.',
          author: 'Isaac Newton'
        },
        {
          quote:   ' Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
          author: 'Albert Einstein'
        },
        {
          quote:  ' Life cannot have had a random beginning ... The trouble is that there are about 2000 enzymes, and the chance of obtaining them all in a random trial is only one part in 10^40,000, an outrageously small probability that could not be faced even if the whole universe consisted of organic soup. ',
          author: 'Fred Hoyle'
        },
        {
          quote:  ' It is strange that only extraordinary men make the discoveries, which later appear so easy and simple.',
          author: 'Georg C. Lichtenberg'
        },
        {
          quote:  ' There may be babblers, wholly ignorant of mathematics, who dare to condemn my hypothesis, upon the authority of some part of the Bible twisted to suit their purpose. I value them not, and scorn their unfounded judgment.',
          author: 'Nicolaus Copernicus'
        },
        {
          quote:  ' There is no law except the law that there is no law.',
          author: 'John Archibald Wheeler'
        },
        {
          quote:  ' We pass through this world but once. Few tragedies can be more extensive than the stunting of life, few injustices deeper than the denial of an opportunity to strive or even to hope, by a limit imposed from without, but falsely identified as lying within.',
          author: 'Stephen Jay Gould'
        },
        {
          quote:  ' Falsity in intellectual action is intellectual immorality.',
          author: 'Thomas Chrowder Chamberlin'
        },
        {
          quote:  ' The black holes of nature are the most perfect macroscopic objects there are in the universe: the only elements in their construction are our concepts of space and time.',
          author: 'Subrahmanyan Chandrasekhar'
        },
        {
          quote:  ' The saddest aspect of life right now is that gathers knowledge faster than society gathers wisdom.',
          author: 'Isaac Asimov'
        },
        {
          quote:  ' A man who dares to waste one hour of time has not discovered the value of life.',
          author: 'Charles Darwin'
        },
        {
          quote:  ' The good thing about science is that it\'s true whether or not you believe in it.',
          author: 'Neil deGrasse Tyson'
        },
        {
          quote:  ' Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.',
          author: 'Marie Curie'
        },
        {
          quote:  ' You cannot teach a man anything; you can only help him discover it in himself.',
          author: 'Galileo Galilei'
        },
        {
          quote:  ' I haven’t failed. I’ve just found 10,000 ways that won’t work.',
          author: 'Thomas Edison'
        },
        {
          quote:  ' Imagination is more important than knowledge.',
          author: 'Albert Einstein'
        },
        {
          quote:  ' Shall I refuse my dinner because I do not fully understand the process of digestion? ',
          author: 'Oliver Heaviside'
        },
        {
          quote:  ' If I have seen further it is by standing on the shoulders of Giants.',
          author: 'Isaac Newton'
        },
        {
          quote:  ' Equipped with his five senses, man explores the universe around him and calls the adventure Science.',
          author: 'Edwin Powell Hubble'
        },
        {
          quote:  ' One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don\'t throw it away.',
          author: 'Stephen Hawking'
        },
        {
          quote:  ' There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
          author: 'Albert Einstein'
        },
        {
          quote:  ' The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.',
          author: 'Stephen Hawking'
        },
        {
          quote:  ' The first principle is that you must not fool yourself – and you are the easiest person to fool.',
          author: 'Richard Feynman'
        },
        {
          quote:  ' Tact is the knack of making a point without making an enemy.',
          author: 'Sir Isaac Newton'
        },
        {
          quote:  ' The sun, with all the planets revolving around it, and depending on it, can still ripen a bunch of grapes as though it had nothing else in the universe to do.',
          author: 'Galileo Galilei'
        },
        {
          quote:  ' Although I cannot move and I have to speak through a computer, in my mind I am free.',
          author: 'Stephen Hawking'
        },
        {
          quote:  ' Nothing has such power to broaden the mind as the ability to investigate systematically and truly all that comes under thy observation in life.',
          author: 'Marcus Aurelius'
        },
        {
          quote:  ' Science is a way of thinking much more than it is a body of knowledge.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.',
          author: 'Isaac Asimov'
        },
        {
          quote:  ' The art and science of asking questions is the source of all knowledge.',
          author: 'Thomas Berger'
        },
        {
          quote:  ' Scientists have become the bearers of the torch of discovery in our quest for knowledge.',
          author: 'Stephen Hawking'
        },
        {
          quote:  ' Progress is made by trial and failure; the failures are generally a hundred times more numerous than the successes; yet they are usually left unchronicled.',
          author: 'William Ramsay'
        },
        {
          quote:  ' Research is what I’m doing when I don’t know what I’m doing.',
          author: 'Wernher von Braun'
        },
        {
          quote:  ' Actually, everything that can be known has a Number; for it is impossible to grasp anything with the mind or to recognize it without this.',
          author: 'Philolaus'
        },
        {
          quote:  ' In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.',
          author: 'Galileo Galilei'
        },
        {
          quote:  ' Everything is theoretically impossible, until it is done.',
          author: 'Robert A. Heinlein'
        },
        {
          quote:  ' Science is the acceptance of what works and the rejection of what does not. That needs more courage than we might think.',
          author: 'Jacob Bronowski'
        },
        {
          quote:  ' I learned very early the difference between knowing the name of something and knowing something.',
          author: 'Richard P. Feynman'
        },
        {
          quote:  ' The beauty of a living thing is not the atoms that go into it, but the way those atoms are put together.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' The whole of science is nothing more than a refinement of everyday thinking.',
          author: 'Albert Einstein'
        },
        {
          quote:  ' Science is the knowledge of consequences, and dependence of one fact upon another.',
          author: 'Thomas Hobbes'
        },
        {
          quote:  ' There are three stages in scientific discovery. First, people deny that it is true, then they deny that it is important; finally, they credit the wrong person.',
          author: 'Bill Bryson'
        },
        {
          quote:  ' Every great advance in science has issued from a new audacity of imagination.',
          author: 'John Dewey'
        },
        {
          quote:  ' We know very little, and yet it is astonishing that we know so much, and still more astonishing that so little knowledge can give us so much power.',
          author: 'Bertrand Russell'
        },
        {
          quote:  ' Bad times have a scientific value. These are occasions a good learner would not miss.',
          author: 'Ralph Waldo Emerson'
        },
        {
          quote:  ' I never teach my pupils. I only attempt to provide the conditions in which they can learn.',
          author: 'Albert Einstein'
        },
        {
          quote:  ' Modern science has been a voyage into the unknown, with a lesson in humility waiting at every stop. Many passengers would rather have stayed home.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' The scientist is not a person who gives the right answers, he’s one who asks the right questions.',
          author: 'Claude Levi-Strauss'
        },
        {
          quote:  ' Rockets are cool. There’s no getting around that.',
          author: 'Elon Musk'
        },
        {
          quote:  ' Life would be tragic if it weren’t funny.',
          author: 'Stephen Hawking'
        },
        {
          quote:  ' To invent, you need a good imagination and a pile of junk.',
          author: 'Thomas A. Edison'
        },
        {
          quote:  ' What we know is a drop, what we don’t know is an ocean.',
          author: 'Isaac Newton'
        },
        {
          quote:  ' When a distinguished but elderly scientist states that something is possible, he is almost certainly right. When he states that something is impossible, he is very probably wrong.',
          author: 'Arthur C. Clarke'
        },
        {
          quote:  ' The feeling of awed wonder that science can give us is one of the highest experiences of which the human psyche is capable.',
          author: 'Richard Dawkins'
        },
        {
          quote:  ' Mathematics reveals its secrets only to those who approach it with pure love, for its own beauty.',
          author: 'Archimedes'
        },
        {
          quote:  ' What I love about science is that as you learn, you don’t really get answers. You just get better questions.',
          author: 'John Green'
        },
        {
          quote:  ' Science is magic that works.',
          author: 'Kurt Vonnegut'
        },
        {
          quote:  ' The scientist only imposes two things, namely truth and sincerity, imposes them upon himself and upon other scientists.',
          author: 'Erwin Schrödinger'
        },
        {
          quote:  ' Science, my lad, is made up of mistakes, but they are mistakes which it is useful to make, because they lead little by little to the truth.',
          author: 'Jules Verne'
        },
        {
          quote:  ' There is not a discovery in science, however revolutionary, however sparkling with insight, that does not arise out of what went before.',
          author: 'Isaac Asimov'
        },
        {
          quote:  ' The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.',
          author: 'Albert Einstein'
        },
        {
          quote:  ' Science is not meant to cure us of mystery, but to reinvent and reinvigorate it.',
          author: 'Robert Sapolsky'
        },
        {
          quote:  ' Mathematics is, in its way, the poetry of logical ideas.',
          author: 'Albert Einstein'
        },
        {
          quote:  ' Mathematics is the music of reason.',
          author: 'James Joseph Sylvester'
        },
        {
          quote:  ' Mathematics is the most beautiful and most powerful creation of the human spirit.',
          author: 'Stefan Banach'
        },
        {
          quote:  ' It is impossible to be a mathematician without being a poet in soul.',
          author: 'Sofia Kovalevskaya'
        },
        {
          quote:  ' To me, mathematics, computer science, and the arts are insanely related. They’re all creative expressions.',
          author: 'Sebastian Thrun'
        },
        {
          quote:  ' In mathematics, the art of proposing a question must be held of higher value than solving it.',
          author: 'George Cantor'
        },
        {
          quote:  ' Why do children dread mathematics? Because of the wrong approach. Because it is looked at as a subject.',
          author: 'Shakuntala Devi'
        },
        {
          quote:  ' The pure mathematician, like the musician, is a free creator of his world of ordered beauty.',
          author: 'Bertrand Russell'
        },
        {
          quote:  ' Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
          author: 'Shakuntala Devi'
        },
        {
          quote:  ' Mathematics compares the most diverse phenomena and discovers the secret analogies that unite them.',
          author: 'Joseph Fourier'
        },
        {
          quote:  ' Go down deep enough into anything and you will find mathematics.',
          author: 'Dean Schlicter'
        },
        {
          quote:  ' If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.',
          author: 'John von Neumann'
        },
        {
          quote:  ' Somehow it’s o.k. for people to chuckle about not being good at math. Yet if I said ‘I never learned to read,” they’d say I was an illiterate dolt.',
          author: 'Neil Degrasse Tyson'
        },
        {
          quote:  ' Somewhere, something incredible is waiting to be known.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies was made in the interiors of collapsing stars. We are made of star stuff.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' Science is not only compatible with spirituality; it is a profound source of spirituality.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' A book is made from a tree. It is an assemblage of flat, flexible parts (still called “leaves”) imprinted with dark pigmented squiggles. One glance at it and you hear the voice of another person, perhaps someone dead for thousands of years. \nAcross the millennia, the author is speaking, clearly and silently, inside your head, directly to you. Writing is perhaps the greatest of human inventions, binding together people, citizens of distant epochs, who never knew one another. Books break the shackles of time ― proof that humans can work magic.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' Extraordinary claims require extraordinary evidence.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' Who is more humble? The scientist who looks at the universe with an open mind and accepts whatever the universe has to teach us, or somebody who says everything in this book must be considered the literal truth and never mind the fallibility of all the human beings involved?',
          author: 'Carl Sagan'
        },
        {
          quote:  ' In science it often happens that scientists say, ‘You know that’s a really good argument; my position is mistaken,’ and then they would actually change their minds and you never hear that old view from them again. They really do it. \nIt doesn’t happen as often as it should, because scientists are human and change is sometimes painful. But it happens every day. I cannot recall the last time something like that happened in politics or religion.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' Imagination will often carry us to worlds that never were, but without it we go nowhere.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' It pays to keep an open mind, but not so open your brains fall out.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' I would love to believe that when I die I will live again, that some thinking, feeling, remembering part of me will continue. But as much as I want to believe that, and despite the ancient and worldwide cultural traditions that assert an afterlife, I know of nothing to suggest that it is more than wishful thinking.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' But the fact that some geniuses were laughed at does not imply that all who are laughed at are geniuses. They laughed at Columbus, they laughed at Fulton, and they laughed at the Wright brothers. But they also laughed at Bozo the Clown.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' We can judge our progress by the courage of our questions and the depth of our answers, our willingness to embrace what is true rather than what feels good.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' The universe is a pretty big place. If it’s just us, seems like an awful waste of space.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' How is it that hardly any major religion has looked at science and concluded, ‘This is better than we thought! The Universe is much bigger than our prophets said, grander, more subtle, more elegant?’ Instead they say, ‘No, no, no! My god is a little god, and I want him to stay that way.’ A religion, old or new, that stressed the magnificence of the Universe as revealed by modern science might be able to draw forth reserves of reverence and awe hardly tapped by the conventional faiths.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' The truth may be puzzling. It may take some work to grapple with. It may be counterintuitive. It may contradict deeply held prejudices. It may not be consonant with what we desperately want to be true. But our preferences do not determine what’s true.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' Extinction is the rule. Survival is the exception.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' It is far better to grasp the universe as it really is than to persist in delusion, however satisfying and reassuring.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' I can find in my undergraduate classes, bright students who do not know that the stars rise and set at night, or even that the Sun is a star.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' Personally, I would be delighted if there were a life after death, especially if it permitted me to continue to learn about this world and others, if it gave me a chance to discover how history turns out.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' Skeptical scrutiny is the means, in both science and religion, by which deep thoughts can be winnowed from deep nonsense.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' We have also arranged things so that almost no one understands science and technology. This is a prescription for disaster. We might get away with it for a while, but sooner or later this combustible mixture of ignorance and power is going to blow up in our faces.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' The universe seems neither benign nor hostile, merely indifferent.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' When you make the finding yourself – even if you’re the last person on Earth to see the light – you’ll never forget it.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' The brain is like a muscle. When it is in use we feel very good. Understanding is joyous.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' If you wish to make an apple pie from scratch, you must first invent the universe.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' Absence of evidence is not evidence of absence.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' There are naive questions, tedious questions, ill-phrased questions, questions put after inadequate self-criticism. But every question is a cry to understand the world. There is no such thing as a dumb question.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' But I try not to think with my gut. If I’m serious about understanding the world, thinking with anything besides my brain, as tempting as that might be, is likely to get me into trouble.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' What a marvelous cooperative arrangement – plants and animals each inhaling each other’s exhalations, a kind of planet-wide mutual mouth-to-stoma resuscitation, the entire elegant cycle powered by a star 150 million kilometers away.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' If God is omnipotent and omniscient, why didn’t he start the universe out in the first place so it would come out the way he wants? Why’s he constantly repairing and complaining? No, there’s one thing the Bible makes clear: The biblical God is a sloppy manufacturer. He’s not good at design, he’s not good at execution. He’d be out of business, if there was any competition.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' We must understand the Cosmos as it is and not confuse how it is with how we wish it to be.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' Intellectual capacity is no guarantee against being dead wrong.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' We are privileged to live in, and if we are lucky to influence, one of the most critical epochs in the history of the human species.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' I think if we ever reach the point where we think we thoroughly understand who we are and where we came from, we will have failed.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' Science is an ongoing process. It never ends. There is no single ultimate truth to be achieved, after which all the scientists can retire.',
          author: 'Carl Sagan'
        },
        {
          quote:  ' We tend not to be especially critical when presented with evidence that seems to confirm our prejudices.',
          author: 'Carl Sagan'
        }
      ]
    }
  }

  render() {
    const quotes = this.state.quotes;
    const quotesLength = quotes.length;
    const index = Math.floor(Math.random() * quotesLength);
    const handleClick = (e) => {
      e.preventDefault();
      this.setState({
        index
      })
    }

    return(
      <div id="quote-box" className="card shadow-lg col-xs-12 col-sm-8 col-md-8 mx-auto">
        <Quote className="card-body" quotes={quotes} index={index} />
        <TwitterButton quote={quotes[index].quote} author={quotes[index].author} />
        <Button handleClick={handleClick} />
      </div>
    )
  }
}

export default QuoteBox;