
import {restaurantCardConfig,foodData} from '../config.js';



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

export default RestaurantCard;