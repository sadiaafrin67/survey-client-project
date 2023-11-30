import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import StatusTableRow from "./StatusTableRow";



const Status = () => {

 

  const axiosSecure = useAxiosSecure()

  const {data: allsurveyor } = useQuery({
    queryKey: ["select"],
    queryFn: async () => {
      const res = await axiosSecure.get('/surveys/admin')
      const data = res.data
      console.log(data)
      return data
    },
  })
    return (
        <div>
          <h2 className="text-center font-bold md:text-2xl text-base my-10">Manage All <span className="text-[#2a5298] font-bold ">Survey</span> by Publish or Unpublish it</h2>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className="font-bold text-lg">Survey Title</th>
        <th className="font-bold text-lg">Status</th>
        <th className="font-bold text-lg">Publish</th>
        <th className="font-bold text-lg">Unpublish</th>
      </tr>
    </thead>
    <tbody>
      {
        allsurveyor?.map((surveyor, index) => <StatusTableRow key={surveyor._id} index={index} surveyor={surveyor} ></StatusTableRow>)
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Status;