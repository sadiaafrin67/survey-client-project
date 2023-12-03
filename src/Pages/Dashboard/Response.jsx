import { useContext } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import CustomPieChart from "../../components/ChartAdmin/CustomPieChart";
import { Link } from "react-router-dom";

const Response = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: allResponse = [] } = useQuery({
    queryKey: ["allResponse"],
    queryFn: async () => {
      const res = await axiosSecure.get("/surveys");
      return res.data;
    },
  });

  console.log(allResponse);



 

  return (
    <div>
      <h2 className="text-center font-bold md:text-2xl text-base my-10 text-[#2a5298]">See All Posted Survey Categories Response From Users</h2>
      <div className="overflow-x-auto">
        <table className="table">
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
            {allResponse?.map((res, index) => {
              return (
                <tr key={index} className="bg-sky-100">
                  <th>{index+1}</th>
                  <td className="font-semibold">{res?.title}</td>
                  <td className="font-semibold">{res?.category}</td>
                  <td><Link to={`/dashboard/alluserres/${res?._id}`}><button className="btn btn-xs bg-blue-950 text-white">View</button></Link></td>
             
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    <div className="flex justify-center">
    <CustomPieChart chartData={allResponse}></CustomPieChart>
    </div>
    </div>
  );
};

export default Response;
