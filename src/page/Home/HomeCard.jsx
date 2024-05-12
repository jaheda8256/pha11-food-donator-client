import { Link } from "react-router-dom";

const HomeCard = ({food}) => {

    const { 
        _id, name, photo, photoURL, date, displayName, quantity, notes,  location
        } = food;
  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
        <div className="flex space-x-4">
          <img
            alt=""
            src={photoURL}
            className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <p
              rel="noopener noreferrer"
              href="#"
              className="text-xl font-semibold"
            >
              {displayName}
            </p>
          </div>
        </div>
        <div>
          <img
            src={photo}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 rounded-2xl dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{name}</h2>
          <p className="text-sm text-gray-400 dark:text-gray-600">
            Quantity:
            {quantity}
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-600">
            Date:
            {date}
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-600">
            Location:
            {location}
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-600">
            Notes:
            {notes}
          </p>
          <Link to={`/details/${_id}`}>
            <button className="btn btn-active w-full mt-3 bg-[#c0cece] font-extrabold text-[#195e5e]">
              {" "}
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
