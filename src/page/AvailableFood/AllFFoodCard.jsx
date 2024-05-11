import { Link } from "react-router-dom";

const AllFFoodCard = ({ food }) => {
  const { 
    _id, name, photo, photoURL, date, displayName, quantity, notes,  location
    } = food;
  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-xl dark:bg-gray-50 dark:text-gray-800">
        <div className="flex space-x-4">
          <img
            alt=""
            src={photoURL}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-semibold"
            >
              {displayName}
            </a>
          </div>
        </div>
        <div>
          <img
            src={photo}
            alt=""
            className="object-cover rounded-2xl w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-2xl text-[#089797] font-extrabold">{name}</h2>
          <p className="mb-1 font-semibold">
           {notes}
          </p>
            <p>Location: {location}</p>
            <p>Quantity: {quantity}</p>
            <p>Date: {date}</p>
        </div>
        <div className="">
          <div className="space-x-2">
            <Link to={`/details/${_id}`}>
           <button className="btn w-full bg-[#c0cece] font-extrabold text-[#195e5e]">View Details</button>
     </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFFoodCard;
