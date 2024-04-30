import React from "react";
import Categories from "./categories";
import { RenderCards } from "./categories";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
const Home: React.FC = () => {
  const [selectedMainTitle, setSelectedMainTitle] = React.useState< string | null >(null);
  return (
    <div>
      <div className="relative h-screen flex justify-center items-start">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full">
          <img
            src="/ai2.jpg" // Replace with the path to your background image
            alt="Background"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Text Content */}
        <div className="z-10 text-white w-full">
          <div
            className="flex justify-center items-center text-center text-3xl pt-8 font-bold "
            
          >
            Design Capabilities
          </div>
          <div className="m-auto ">
            <Categories setFunction={setSelectedMainTitle} />
          </div>
          <div className="w-full md:mt-10 px-10 text-center ">
            <h1 className="text-xl md:text-5xl mb-4 ">
              {" "}
              Choose specific
              <span className="font-bold leading-relaxed">
                {" "}
                Design Capability{" "}
              </span>
              to learn <br />
              more about <span className="font-bold ">AI tools </span> available
            </h1>

            <p className="text-base md:text-lg">
              Explore the features with Innovations and Vision powered by AI!
              Navigate groundbreaking possibilities
              <br /> and redefine your journey in the world of artificial
              intelligence{" "}
            </p>
          </div>
        </div>
      </div>

      <div id="feature">
        {selectedMainTitle ? <div className="text-center pt-8 text-4xl font-bold" id="categories">AI Categories</div> : null}
        <RenderCards title={selectedMainTitle} />
      </div>
      <div className="flex justify-end  items-baseline w-full absolute  -bottom-16 p-10 ">
        <Link to="/table">
          <button className="px-2 py-2 flex  group  duration-700 ease-in-out item-center justify-center group  overflow-hidden gap-3  text-end backdrop-blur-lg shadow-lg border-2 border-gray-400 shadow-slate-500 text-white hover:bg-gray-100/50  rounded-md">
            <p className="group-hover:translate-x-4 duration-700">
              Benchmark criteria
            </p>
            <GoArrowRight className="m-auto text-lg  duration-700 font-semibold group-hover:translate-x-10  " />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
