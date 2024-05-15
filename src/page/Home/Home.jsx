
import { useState } from "react";
import Carousel from "../../components/Carousel";
import { Link, useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";
import { Typewriter } from "react-simple-typewriter";
import ExtraSection from "./ExtraSection";
import LastPart from "./LastPart";
import { Helmet } from "react-helmet-async";




const Home = () => {
 
    const loadedFoods = useLoaderData();
    const [foods, setFoods] = useState(loadedFoods);

  return (
    <div>
          <Helmet>
                <title>Foods Project | Home</title>
            </Helmet>
      <Carousel></Carousel>

      <div className="my-16">
        <div className="text-center my-12">
        <h2 className="text-4xl text-[#047f7f] font-lato text-center font-extrabold mb-6"> <span style={{ color: '', fontWeight: 'bold' }}>
          <Typewriter
            words={['Featured Foods']}
            loop={1000000}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
          />
        </span></h2>
          <p className="text-[#788585]">
            The food here is very good. You can take it <br /> if you want. If
            extra food is sold here, it is given on request. Fresh food is
            available here
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {foods?.map((food) => <HomeCard key={food._id}
          food={food}
          ></HomeCard> 
            
          )}
        </div>
        <div className="text-center my-6 px-8">
      <Link to='/availableFood'>
      <button className="btn bg-[#c0cece] font-extrabold text-[#195e5e]"> Show All Card</button>
      </Link>
      </div>
      </div>
      <ExtraSection></ExtraSection>
      <LastPart></LastPart>
    
    </div>
  );
};

export default Home;
