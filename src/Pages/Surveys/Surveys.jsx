import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosOpen from "../../Hook/useAxiosOpen";
import SurveyCard from "./SurveyCard";

const Surveys = () => {
  const axiosPublic = useAxiosOpen();

  const { data: surveys = [], isLoading, refetch } = useQuery({
    queryKey: ["surveys"],

    queryFn: async () => {
      const res = await axiosPublic.get("/surveys");
      return res.data;
    },
  });
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <div className="mb-20 mt-10">
      <h2 className="lg:text-4xl md:text-2xl text-xl font-bold text-[#2a5298] text-center">Participate in Surveys</h2>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {surveys.map((survey) => <SurveyCard key={survey._id} survey={survey} refetch={refetch}></SurveyCard>)}
     </div>
    </div>
  );
};

export default Surveys;
