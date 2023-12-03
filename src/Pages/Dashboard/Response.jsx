import { useContext } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import CustomPieChart from "../../components/ChartAdmin/CustomPieChart";

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
            {allResponse?.map((res, index) => {
              return (
                <tr key={index} className="bg-base-200">
                  <th>{index+1}</th>
                  <td>{res?.title}</td>
                  <td>{res?.email}</td>
                  <td>{res?.timestamp || new Date().toDateString()}</td>
                  <td>{res?.voted}</td>
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
