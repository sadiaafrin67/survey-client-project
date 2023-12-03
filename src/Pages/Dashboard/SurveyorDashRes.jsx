import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useParams } from "react-router-dom";
import SurChart from "../../SurveyorChart/SurChart";

const SurveyorDashRes = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const data = useLoaderData();
  const {yesVote, noVote, votedUser} = data.result
  console.log(yesVote, noVote, votedUser);
  const { id } = useParams();

  console.log(data.result.votedUser);
  console.log(id);

  // const {data: allResponse = []} = useQuery({
  //     queryKey: ['allResponse'],
  //     queryFn: async () => {
  //         const res = await axiosSecure.get(`/surveys`)
  //         return res.data
  //     }

  // })
  // console.log(allResponse)

  // function findSurveysByEmail(email) {
  //     const matchingSurveys = allResponse.filter((survey) => {
  //       return survey.email === email;
  //     });

  //     return matchingSurveys;
  //   }

  //   console.log(findSurveysByEmail(user?.email));

  //   const filteredSurvey = findSurveysByEmail(user?.email)

  return (
    <div>
      <h2 className="text-center font-bold md:text-2xl text-base my-10 text-[#2a5298]">
        See All Users Response For This Survey
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Time</th>
              <th>Total Vote For Yes</th>
              <th>Total Vote For No</th>
            </tr>
          </thead>
          <tbody>
            {votedUser && votedUser.length > 0 && votedUser?.map((user, index) => {
                return (
                  <tr key={index} className="bg-base-200">
                    <th>1</th>
                    <td>{user.name || 'Anonymous'}</td>
                    <td>{user.email}</td>
                    <td>{user.time || new Date().toDateString()}</td>
                    <td>{yesVote}</td>
                    <td>{noVote}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center">
       
       <SurChart voted={data.result}></SurChart>
     </div>

    </div>
  );
};

export default SurveyorDashRes;
