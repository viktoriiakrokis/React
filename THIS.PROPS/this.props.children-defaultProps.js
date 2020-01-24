// Example 1 this.props.children would equal the text, “I am a child of BigButton.”
<BigButton>
  I am a child of BigButton.
</BigButton>


// Example 2  would equal a <LilButton /> component
<BigButton>
  <LilButton />
</BigButton>


// Example 3  this.props.children would equal undefined
<BigButton />