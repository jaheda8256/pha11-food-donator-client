import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllFFoodCard from "./AllFFoodCard";
import { Typewriter } from "react-simple-typewriter";

const AvailableFood = () => {
  const loadedFoods = useLoaderData();
  const [foods, setFoods] = useState(loadedFoods);
  const [sort, setSort] = useState('');
  return (
    <div>
    <div className="flex justify-between mt-4">
    <div>
        <label className="input input-bordered flex items-center  mt-4 gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className=" mt-10">
      <select
      onChange={e =>{
        setSort(e.target.value)

      }}
      value={sort}
      name="sort"
      className="border p-3 rounded-md"
      >
        <option value=""> Expire Date</option>
        <option value="dsc">descending</option>
        <option value="asc">ascending</option>
      </select>
      </div>
    </div>

      <h2 className="text-5xl font-lato text-center font-extrabold text-[#089797] my-10">
        {" "}
        <span style={{ color: "", fontWeight: "bold" }}>
          <Typewriter
            words={["Available Food"]}
            loop={1000000}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
          />
        </span>
      </h2>

      {/* card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid`  -cols-1 gap-6 mb-16">
        {foods.map((food) => (
          <AllFFoodCard key={food._id} food={food}></AllFFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFood;
