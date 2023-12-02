import { FaVoteYea } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedCard = ({ item }) => {
  return (
   <div>
     <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 mx-auto">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {item.title}
        </h5>

        <p className="text-base mt-3 font-semibold">
          Category: {item.category}
        </p>

        <div className=" items-center text-center justify-center flex gap-2 self-cente mb-4">
          <FaVoteYea className="mt-3"></FaVoteYea>
          <p className="text-base  mt-3 font-semibold">
            Total Vote: {item.voted}
          </p>
        </div>

        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {item.description}
        </p>
      </div>

    
      <div className="p-6 pt-0">
        <Link to={`/details/${item._id}`}>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            See Details
          </button>
        </Link>
      </div>
      
    </div>
   </div>
  );
};

export default FeaturedCard;
