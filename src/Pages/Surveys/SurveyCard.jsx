import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaVoteYea } from "react-icons/fa";
import useAxiosOpen from "../../Hook/useAxiosOpen";

const SurveyCard = ({ survey }) => {

 


  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 mx-auto">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {survey.title}
        </h5>

        <p className="text-base mt-3 font-semibold">
          Category: {survey.category}
        </p>

       <div className=" items-center flex gap-2 self-cente mb-4">

       <FaVoteYea className="mt-3"></FaVoteYea>
       <p className="text-sm mt-3 font-semibold">
          Total Vote: {survey.voted}
        </p>

     
   
       </div>
       

        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {survey.description}
        </p>
      </div>

      <div className="flex text-center ml-5  gap-4  mb-5">
        <button className="btn">
          {/* <AiFillLike className="text-3xl"></AiFillLike> */}
          <p>Total likes:</p>
          <div className="badge">{survey.like}</div>
        </button>

        <button className="btn">
          {/* <AiFillDislike className="text-3xl"></AiFillDislike> */}
          <p>Total dislikes:</p>
          <div className="badge">{survey.dislike}</div>
        </button>
      </div>

      <div className="p-6 pt-0">
        <Link to={`/details/${survey._id}`}>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SurveyCard;
