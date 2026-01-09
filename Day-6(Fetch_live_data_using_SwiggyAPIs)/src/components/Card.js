
import {restaurantCardConfig,IMG_CDN} from '../config.js';



// restaurnat card component
const RestaurantCard = ({ data }) => {
  const info = data.info;
  return (
    <div className="restaurant-card">
      <img src={IMG_CDN+data.info.cloudinaryImageId} alt={info.name} />
      <h3>{info.name}</h3>
      
      {restaurantCardConfig.map((field) => {
        let val=info;
        for(let i of field.path){
          val=val[i]
        }
        if(Array.isArray(val)){
          val=val.join(", ");
        }
        return(
          <p key={field.label}>
            {field.label}:{val}

          </p>
        )
        
      })}

    </div>
  );
};

export default RestaurantCard;