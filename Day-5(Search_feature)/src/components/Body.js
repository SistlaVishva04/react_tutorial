import RestaurantCard from "./Card.js";
import {foodData} from '../config.js';

import {useState} from 'react';

const Filter=(searchText,restaurantList)=>{
    const filterdata=restaurantList.filter((item)=>
       item.name.includes(searchText)
    );
    return filterdata;
}

// Body component
const Body=()=>{
  const [searchText,setSearchText]=useState("");
  const [restaurantList,setrestaurantList]=useState(foodData);
  return (
    <div className="body">


      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants, cuisines or a dish"  onChange={(e)=>{
            
            setSearchText(e.target.value);
        }
        }/>
        <button onClick={()=>
            {
                const Filtered=Filter(searchText,restaurantList);
                setrestaurantList(Filtered);
            
            }
        }>Search</button>
        
      </div>


      <div className="restaurant-list">
      {restaurantList.map((item)=>(
        <RestaurantCard key={item.name} data={item} />
      ))}
      </div>

    </div>
  );
}
export default Body;