import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SurveyorChart from "../../components/SurveyorChart/SurveyorChart";
import { Link } from "react-router-dom";

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
      <h2 className="text-center font-bold md:text-2xl text-base my-10 text-[#2a5298]">See Your Posted Survey Categories Response From Users</h2>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-bold text-base">Survey Title</th>
              <th className="font-bold text-base">Survey Category</th>
              <th className="font-bold text-base">Users Response</th>
            
            </tr>
          </thead>
          <tbody>
            {
              user && user.email && filteredSurvey?.map((item, index) => {
               return (<tr key={index} className="bg-sky-100">
              <th>{index +1 }</th>
              <td>{item?.title}</td>
              <td>{item?.category}</td>
              <td><Link to={`/dashboard/yoursurres/${item?._id}`}><button  className="btn btn-xs bg-blue-950 text-white">View</button></Link></td>
             
            </tr>)
              })
            }
            
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default SurRes;
