import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageMyFood = () => {
  const loadedFoods = useLoaderData();
  const { user } = useAuth() || {};
  const [foodCards, setFoodCards] = useState(loadedFoods);

  // get my spots
  useEffect(() => {
    fetch(`http://localhost:5000/foods-email/${user.email}`)
      .then((res) => res.json())
      .then((data) => setFoodCards(data))
      .catch((err) => console.log(err.message));
  }, [user]);

  const handleDelete = (_id) => {
    console.log(_id);

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

        fetch(`http://localhost:5000/foods/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
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

      {/* {foodCards.map((food) => (
        <div
          key={food._id}
          className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-xl dark:bg-gray-50 dark:text-gray-800"
        >
          <div className="flex space-x-4">
            <img
              alt=""
              src={food.photoURL}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-semibold"
              >
                {food.displayName}
              </a>
            </div>
          </div>
          <div>
            <img
              src={food.photo}
              alt=""
              className="object-cover rounded-2xl w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
            />
            <h2 className="mb-1 text-2xl text-[#089797] font-extrabold">
              {food.name}
            </h2>
            <p className="mb-1 font-semibold">{food.notes}</p>
            <p>Location: {food.location}</p>
            <p>Quantity: {food.quantity}</p>
            <p>Date: {food.date}</p>
          </div>

          <Link to={`/update/${food._id}`}>
            <button className="btn w-full bg-purple-600 text-white border-none font-semibold">
              Update
            </button>
          </Link>
          <button onClick={()=> handleDelete(food._id)} className="btn bg-red-600 border-none text-white font-semibold">Delete</button>
        </div>
      ))} */}
    </div>
  );
};

export default ManageMyFood;
