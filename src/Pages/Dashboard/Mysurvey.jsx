import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MySurveyCard from "./MySurveyCard";

const MySurvey = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: mysurvey = [], isLoading } = useQuery({
    queryKey: ["my-survey"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/survey/mysurvey/${user.email}`);
      return res.data;
    },
  });

  if(isLoading){
    return <h1>Loading...</h1>
  }

  return <div className="mt-10 my-20">
    <h2 className="text-center font-bold text-2xl text-[#2a5298]">My Total Submitted Surveys: {mysurvey.length}</h2>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     {mysurvey.map((survey) => <MySurveyCard key={survey._id} survey={survey}></MySurveyCard>)}
     </div>
  </div>;
};

export default MySurvey;
