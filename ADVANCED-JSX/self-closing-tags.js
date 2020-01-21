// in HTML, it is optional to include a forward-slash immediately before the final angle-bracket
// Fine in HTML with a slash:

  <br />

// Also fine, without the slash:

  <br></br>

// if you write a self-closing tag in JSX and forget the slash, you will raise an error
// Fine in JSX:
<br />

// NOT FINE AT ALL in JSX:
//<br>

// exercise
const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    </img src="images/jenkins.png" >
    <article>
      I LIKE TO SIT
      </br>
      JENKINS IS MY NAME
      </br>
      THANKS HA LOT
    </article>
  </div>
);
