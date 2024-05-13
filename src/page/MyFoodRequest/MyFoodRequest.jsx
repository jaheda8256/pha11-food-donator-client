
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const MyFoodRequest = () => {
 
    const loadedFoods = useLoaderData();
  const { user } = useAuth() || {};
  const [foodCards, setFoodCards] = useState(loadedFoods);
console.log(foodCards);
  // get my spots
  useEffect(() => {
    fetch(`http://localhost:5000/request-email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFoodCards(data))
      .catch((err) => console.log(err.message));
  }, [user?.email]);

  
  return (
    <div>
      <h1>My Food Requests</h1>
      <ul>
        {foodCards.map((request) => (
          <li key={request._id}>
           p{request.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyFoodRequest;