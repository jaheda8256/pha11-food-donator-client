import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


const ExtraSection = () => {
  return (
   <div className="my-20">
      <div className="text-center my-12">
        <h2 className="text-4xl text-[#047f7f] font-lato text-center font-extrabold mb-6"> <span style={{ color: '', fontWeight: 'bold' }}>
          <Typewriter
            words={['Foods for Street Children']}
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
          Many of us waste a lot of food, throw away excess food at various <br /> restaurants.We should give them an opportunity to live a little better by giving them leftover food
          </p>
        </div>
     <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 rounded-2xl">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://i.ibb.co/RyQsftv/gift-box-with-gold.jpg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
    <h2 className="text-4xl font-extrabold text-center">A few words about <br />street children</h2>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-center">
          Many of us waste a lot of food, throw away excess food at various restaurants. 
            <br className="hidden md:inline lg:hidden" />
            We should give them an opportunity to live a little better by giving them leftover food
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link to="/availableFood"
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded-xl bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
            >
             Show Available Foods
            </Link>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800"
            >
              Start Page
            </a>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default ExtraSection;
