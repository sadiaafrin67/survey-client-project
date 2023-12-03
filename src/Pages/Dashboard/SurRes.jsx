import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SurveyorChart from "../../components/SurveyorChart/SurveyorChart";

const SurRes = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: allResponse = [] } = useQuery({
    queryKey: ["allResponse"],
    queryFn: async () => {
      const res = await axiosSecure.get("/surveys");
      return res.data;
    },
  });

  function findSurveysByEmail(email) {
    const matchingSurveys = allResponse.filter((survey) => {
      return survey.email === email;
    });

    return matchingSurveys;
  }

 

  console.log(findSurveysByEmail(user?.email));

  const filteredSurvey = findSurveysByEmail(user?.email)


  return (
    <div>
      <h2 className="text-center font-bold md:text-2xl text-base my-10 text-[#2a5298]">See All Response From Users</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Time</th>
              <th>Voted</th>
            </tr>
          </thead>
          <tbody>
            {
              user && user.email && filteredSurvey?.map((item, index) => {
               return (<tr key={index} className="bg-base-200">
              <th>{index +1 }</th>
              <td>{item?.title}</td>
              <td>{item?.email}</td>
              <td>{item?.timestamp || new Date().toDateString()}</td>
              <td>{item?.voted}</td>
            </tr>)
              })
            }
            
          </tbody>
        </table>
      </div>
  <div className="flex justify-center">
  <SurveyorChart chartData={filteredSurvey}></SurveyorChart>
  </div>
    </div>
  );
};

export default SurRes;
