// The following JSX expression
const h1 = <h1>Hello world</h1>;

// can be rewritten without JSX, like this:
const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);

// exercise
const greatestDivEver = React.createElement(
  "div",
  null,
  "i am div");