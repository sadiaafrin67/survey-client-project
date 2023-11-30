import {  useParams } from "react-router-dom";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";



import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "../../Hook/useAxiosOpen";

const SurveyDetail = () => {

   
    const axiosPublic = useAxiosOpen();
  
  const {id }= useParams();
  console.log(id)
  const {data: survey = [] , refetch, isLoading} = useQuery({
    queryKey: ["survey"],

    queryFn: async () => {
      const res = await axiosPublic.get(`/surveys/${id}`);
      console.log(res.data);
      return res.data;
      
    },

  });
  console.log(survey);
  const {  title, question, deadline, category, voted, description, dislike } =
    survey;

    const handleLike = (id) => {
        axiosPublic.patch(`/like/${id}`)
        .then(() => {
            refetch()
        })

            
          
    }

    const handleDislike = (id) => {
        axiosPublic.patch(`/dislike/${id}`)
        .then(() => {
            refetch()
        })
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }

    const handleOption = (e) => {

        e.preventDefault();
        const yes = e.target.yes.value;
        const no = e.target.no.value;
        const report = e.target.report.value;
        const data = {
            yes,
            no,
            report
        }
        console.log(data)
    }

  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="text-3xl font-bold text-[#2a5298] mb-4">
          Survey Details
        </h2>
        <h2 className="card-title">{title}</h2>
        <p className="text-base font-medium mb-5">{description}</p>
        <p className="text-base font-medium">
          Survey craeted at:{" "}
          <span className="text-[#2a5298] font-semibold">{deadline}</span>
        </p>
        <p className="text-lg font-bold">{question}</p>
        <div className="border border-blue-300 p-8">
          <p className="text-base font-medium">
            Survey Question:{" "}
            <span className="text-[#2a5298] font-semibold">
              Do you want to participate in this survey?
            </span>
          </p>


         <form onSubmit={handleOption}>

         <div className="flex justify-center gap-2 mt-5">
            <label className="text-base font-medium">Yes</label>
            <input type="radio" name="yes" className="radio" checked />
          </div>
          <div className="flex justify-center gap-2 mt-3">
            <label className="text-base font-medium">No</label>
            <input type="radio" name="no" className="radio" />
          </div>

          <div className="mt-5">
            <label>Report Survey</label>
            <input
              placeholder="Report Here"
              className="border px-2 py-1 ml-3  bg-gray-300"
              type="text"
              name="report"
              id=""
            />
          </div>
          <div className="card-actions flex justify-center mt-6">
            <button className="btn rounded-lg bg-blue-950 text-white ">
              Submit Survey
            </button>
          </div>
         </form>

        </div>

        <div className="  text-center md:flex items-center">
          <div className="flex text-center  gap-4  ">
            <button onClick={() => handleLike(id)} className="btn">
              <AiFillLike className="text-3xl"></AiFillLike>
              <div className="badge">{voted}</div>
            </button>

            <button onClick={() => handleDislike(id)} className="btn">
              <AiFillDislike className="text-3xl"></AiFillDislike>
              <div className="badge">{dislike}</div>
            </button>
          </div>
          {/* <div>
            <FaComment className="text-5xl"></FaComment>
          </div> */}
        <form >

        <div className="mb-6 mt-4 flex items-center">
          <input
            type="text"
            name="comment"
            placeholder="write your comment"
            className="block  ml-4 p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md rounded-l-lg rounded-r-none"
            required
      
          /> <button className=" rounded-r-lg text-white py-4 font-medium px-3 bg-blue-950">Comment</button>
         
        </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyDetail;
