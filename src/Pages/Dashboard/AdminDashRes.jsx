import { useLoaderData, useParams } from "react-router-dom";
import DetailChart from "../../components/DetailPageChart/DetailChart";
import ResChart from "../../components/ChartAdmin/ResChart";

const AdminDashRes = () => {


  const data = useLoaderData();
  const {yesVote, noVote, votedUser} = data.result
  console.log(yesVote, noVote, votedUser);
  const { id } = useParams();

  console.log(data.result.votedUser);
  console.log(id);

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
       
       <ResChart voted={data.result}></ResChart>
     </div>
    </div>
  );
};

export default AdminDashRes;
