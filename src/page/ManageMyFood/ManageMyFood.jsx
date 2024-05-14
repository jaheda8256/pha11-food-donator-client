import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageMyFood = () => {
  const loadedFoods = useLoaderData();
  const { user } = useAuth() || {};
  const [foodCards, setFoodCards] = useState(loadedFoods);
// console.log(foodCards);
  // get my spots
  useEffect(() => {
    fetch(`https://food-server-rho.vercel.app/foods-email/${user?.email}`,{credentials: 'include'})
      .then((res) => res.json())
      .then((data) => setFoodCards(data))
      .catch((err) => console.log(err.message));
  }, [user?.email]);

  const handleDelete = (_id) => {
    // console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //

        fetch(`https://food-server-rho.vercel.app/foods/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your foodCard has been deleted.",
                icon: "success",
              });
              const remaining = foodCards.filter((food) => food._id !== _id);
              setFoodCards(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="my-16">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {foodCards.map((food, index) => (
              <tr key={food._id}>
                <th>{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.quantity}</td>
                <td>
                  {" "}
              <Link to={`/update/${food._id}`}>
              <button className="btn bg-purple-600 text-white border-none font-semibold">
                     Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="btn bg-red-600 border-none text-white font-semibold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default ManageMyFood;
