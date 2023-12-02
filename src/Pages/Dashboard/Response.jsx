import { useContext } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

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
    </div>
  );
};

export default Response;
