
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";


const MyFoodRequest = () => {
 
    const loadedFoods = useLoaderData();
  const { user } = useAuth() || {};
  const [foodCards, setFoodCards] = useState(loadedFoods);
// console.log(foodCards);
  // get my spots
  useEffect(() => {
    fetch(`https://food-server-rho.vercel.app/request-email/${user?.email}`,{credentials: 'include'})
      .then((res) => res.json())
      .then((data) => setFoodCards(data))
      .catch((err) => console.log(err.message));
  }, [user?.email]);


  return (
    <div className="my-16">
      
      <Helmet>
                <title>Foods Project | MyFoodRequest</title>
            </Helmet>
     <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Request Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {foodCards.map((food, index) => (
              <tr key={food._id}>
                <th>{index + 1}</th>
                <td>{food.displayName}</td>
                <td>{food.location}</td>
                <td>{food.date}</td>
                <td>{food.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default MyFoodRequest;