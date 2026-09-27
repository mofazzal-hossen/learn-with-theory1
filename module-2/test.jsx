


// this click not called 
	<button onClick={handleClick}></button>

// this click right called 
    <button onClick={handleClick()}>you can do anything</button>

 // This alert fires when the component renders, not when clicked!
   <button onClick={alert('You clicked me!')}></button>

onClick = { handleClick }    // ✅ click করার পরে function call
onClick = { handleClick() }  // ❌ render হওয়ার সময় function call




   /// when you will be work that you must apply
    : Naming event handler props.
//  for even handler and onClick 





 /////how to Stopping propagation?

function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}
