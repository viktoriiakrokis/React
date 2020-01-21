// you can not inject an if statement into a JSX expression
// this code will break
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)

// Well, one option is to write an if statement, and not inject it into JSX.
// example
let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

// exercise
if (coinToss() === 'heads') {
  img = (
  <img src={pics.kitty} />)
} else {
  img = (
  <img src={pics.doggy} />)
}

ReactDOM.render(img, document.getElementById('app'));