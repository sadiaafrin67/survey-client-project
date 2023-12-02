import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";
import AdminModal from "./AdminModal";
import { FaEye } from "react-icons/fa";
import Modal from "./Modal/Modal";

const AdminFeed = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [toggole, setToggole] = useState(false);

  function truncateString(inputString) {
    console.log(inputString);
    if (inputString?.length > 15) {
      return inputString.substring(0, 15) + "...";
    } else {
      return inputString;
    }
  }

  const { data: feedback = [] } = useQuery({
    queryKey: ["feedback"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/surveys/feedback/${user?.email}`);

      return res.data;
    },
  });

  console.log(feedback);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-center text-2xl text-[#2a5298] font-bold my-10 mb-15">
        See All FeedBack From Admin
      </h2>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Your Email</th>
            <th>Survey Title</th>
            <th>Survey Status</th>
            <th>Admin Feedback</th>
          </tr>
        </thead>
        <tbody>
          {feedback?.map((feedback, index) => (
            <tr key={feedback._id}>
              <th>{index + 1}</th>
              <td>{feedback?.email}</td>
              <td>{feedback?.title}</td>
              <td>{feedback?.status}</td>
              {/* <div className="relative">
            <button onClick={() => setToggole(!toggole)} className="btn bg-blue-950 text-white rounded-lg btn-sm">
             See FeedBack
            </button>
            <div className={`absolute w-[400px] right-0 top-full z-50 p-5 bg-blue-100 ${toggole ? "block" : "hidden"}`}>
              <p className="text-black font-bold">{feedback?.feedback}</p>
            </div>
          </div> */}
              <td>
                <div className="flex gap-3 items-center">
                  <div className="self-center">
                    {feedback &&
                      feedback?.feedback &&
                      truncateString(feedback?.feedback)}
                  </div>
                
                  <div
                    
                    className="self-center"
                  >
                    <Modal data={feedback?.feedback} title={feedback?.title}><FaEye></FaEye></Modal>
                  </div>(Click to see full feedback)
             
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminFeed;
