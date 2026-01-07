import {createElement as c} from 'react';
import {createRoot as r} from 'react-dom/client';
import '../app.css';
import Header from './components/Header';
import Body from './components/Body';
import {Footer} from './components/Footer';


// create element using JSX
/*
header
  -logo
  -nav items
    -home ,about ,contact ,cart

body
  -search bar
  -restaurant container
    -restaurant card
      -image,name,price,rating,cuisine
footer
  -copyright info

 */

const AppLayot =() =>{
  return (
    <>
    < Header />
    < Body />
    < Footer />
    </>
  );
}
// render the Header component to the DOM
r(document.getElementById('root')).render(<AppLayot />);
