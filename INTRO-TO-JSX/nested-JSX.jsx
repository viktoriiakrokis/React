//  example of a JSX <h1> element, nested inside of a JSX <a> element:
<a href="https://www.example.com"><h1>Click me!</h1></a>

// To make this more readable, you can use HTML-style line breaks and indentation:
<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>

// If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses
(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
)

// example of a nested JSX expression being saved as a variable
const theExample = (
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
);

// exercise
const blog = (
  <div> 
    <img src="pics/192940u73.jpg" />
    <h1>
      Welcome to Dan's Blog!
    </h1>
    <article>
      Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
    </article>
  </div>
);
   