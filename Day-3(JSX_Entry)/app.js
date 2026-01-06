import {createElement as c} from 'react';
import {createRoot as r} from 'react-dom/client';
// create element using JSX
const App=()=>(
<h1>Hello World</h1>
);

const comp2=(
  <h2>this is h2</h2>
);
//  create element using createElement
const comp1=c("h3",{},"this is h3 another way to create element");

// create a header component which renders App component, comp1 and comp2
const Header =()=>{
  return (
    <>
    <App />
    {comp2}
    {comp1}
    <h2> this is header componet</h2>
    </>
  );
};
// render the Header component to the DOM
r(document.getElementById('root')).render(<Header />);
