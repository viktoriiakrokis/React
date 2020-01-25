// Take a look at this HTML:

<blockquote>
  <p>
    The world is full of objects, more or less interesting; I do not wish to add any more.
  </p>
  <cite>
    <a target="_blank"
      href="https://en.wikipedia.org/wiki/Douglas_Huebler">
      Douglas Huebler
    </a>
  </cite>
</blockquote>

// in QuoteMaker is the parentheses in the return statement
return <h1>Hello world</h1>;

// exercise
import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
  render() {
    return (
    	<blockquote>
  			<p>
    			What is important now is to recover our senses.
  			</p>
  			<cite>
    		  <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">
      	    Susan Sontag
    		  </a>
  			</cite>
			</blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);