import RestaurantCard from "./Card.js";
import {foodData} from '../config.js';
import { Shimmer } from "./Shimmer.js"

import {useState,useEffect} from 'react';


const Filter=(searchText,restaurantList)=>{
    const filterdata=restaurantList.filter((item)=>
       item.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
    return filterdata;
}

// Body component
const Body=()=>{
  const [searchText,setSearchText]=useState("");

  const [allrestaurantList,setallrestaurantList]=useState([]);
  const [filteredrestaurantList,setfilteredrestaurantList]=useState([]);
  console.log("rendered");
  useEffect(()=>{
    getRestaurants();
  },[]);

  async function getRestaurants(){
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();
    console.log(json);
    // optional chaining
    setallrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  return (filteredrestaurantList.length === 0)? 
  <Shimmer />
  : (
    <div className="body">

      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants, cuisines or a dish"  onChange={(e)=>{
            
            setSearchText(e.target.value);
        }
        }/>
        <button onClick={()=>
            {
                const Filtered=Filter(searchText,allrestaurantList);
                setfilteredrestaurantList(Filtered);
            
            }
        }>Search</button>
        
      </div>


      <div className="restaurant-list">
      {filteredrestaurantList.map((item)=>(
        <RestaurantCard key={item.info.name} data={item} />
      ))}
      </div>

    </div>
  );
}
export default Body;