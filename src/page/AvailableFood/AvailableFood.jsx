import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllFFoodCard from "./AllFFoodCard";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";
// import axios from "axios";

const AvailableFood = () => {
  const loadedFoods = useLoaderData();
  const [foods, setFoods] = useState(loadedFoods);

  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   fetch(`https://food-server-rho.vercel.app/foods`)
  //     .then((res) => res.json())
  //     .then((data) => setFoods(data));
  // }, []);

  const handleSearchChange = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
    console.log(text);
  };

  return (
    <div>
      <Helmet>
        <title>Foods Project | AvailableFood</title>
      </Helmet>

      <form onSubmit={handleSearchChange}>
        <input
          type="text"
          name="search"
          onChange={handleSearchChange}
          className=""
        />
        <input type="submit" className="btn" value="Search" />
      </form>

      <div className=" mt-10">
        <select
          onChange={(e) => {
            setSort(e.target.value);
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
