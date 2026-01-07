import {createElement as c} from 'react';
import {createRoot as r} from 'react-dom/client';
import './app.css';

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
// header style


// Header component
const Header =()=>{
  return (
    <div className="header">
      <div className="header-inner">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1zGlFEpqpAMjHr-Jc-Ppq97YXt7mFUPM1Q&s" alt="logo" />

      <div className="nav-items">

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
    </div>
  );
}
// food data
const foodData=[
  {
    image: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    name:"Burgar",
    price:"1000",
    rating:"4.3",
    cuisines:"burgar"
  },
  {
    image:"https://www.shutterstock.com/image-photo/delicious-pizza-fresh-nutritious-vegetables-600nw-2607572607.jpg",
    name:"Pizza",
    price:"1200",
    rating:"4.5", 
    cuisines:"Italian"
  },
  { 
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfOde5gSz5gM5dHuYq2FL6NWcfS8D4Vsrzw&s",
    name:"Sandwich",
    price:"800",
    rating:"4.0", 
    cuisines:"Fast Food"
  },
  { 
    image:"https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?semt=ais_hybrid&w=740&q=80",
    name:"Pasta",
    price:"1100",
    rating:"4.2",
    cuisines:"Italian"
  },
  { 
    image:"https://yujinizakaya.com.sg/wp-content/uploads/2025/06/japanese-nigiri-sushi-recipe-1749130962.jpg",
    name:"Sushi",
    price:"1500",
    rating:"4.6",
    cuisines:"Japanese"
  },
  { 
    image:"https://www.tasteofhome.com/wp-content/uploads/2025/01/That-Good-Salad_EXPS_FT24_6498_JR_1212_1.jpg",
    name:"Salad",
    price:"700",
    rating:"4.1",
    cuisines:"Healthy"
  }
]
const restaurantCardConfig = [
  { label: "Price", key: "price" },
  { label: "Rating", key: "rating" },
  { label: "Cuisines", key: "cuisines" }
];


// restaurnat card component
const RestaurantCard = ({ data }) => {
  const { image, name } = data;

  return (
    <div className="restaurant-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {restaurantCardConfig.map((field) => (
        <p key={field.key}>
          {field.label}: {data[field.key]}
        </p>
      ))}
    </div>
  );
};

// Body component
const Body=()=>{
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants, cuisines or a dish" />
        <button>Search</button>
      </div>
      <div className="restaurant-list">
      {foodData.map((item)=>(
        <RestaurantCard key={item.name} data={item} />
      ))}
      
      

      </div>

    </div>
  );
}

// Footer component
const Footer=()=>{
  return (
    <div className="footer">
    
    <h2 id="author">Done by Vishva Sistla</h2>
    </div>
  );
}


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
