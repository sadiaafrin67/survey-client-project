import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const Payment = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payemnts = [] } = useQuery({
    queryKey: ["payemnts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold my-10 text-[#2a5298]">
        All Pro User Members: {payemnts?.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-bold text-lg">Email</th>
              <th className="font-bold text-lg">Transaction Id</th>
              <th className="font-bold text-lg">Payment Money</th>
              <th className="font-bold text-lg">Role</th>
            </tr>
          </thead>
          <tbody>
            {
              payemnts?.map((payment, index) => <tr key={payment._id}>
              <th className="font-semibold">{index + 1}</th>
              <td className="font-semibold">{payment.email}</td>
              <td className="font-semibold">{payment.transactionId}</td>
              <td className="font-semibold">{payment.price}</td>
              <td className="text-green-500 font-semibold">Pro User</td>
            </tr>
            )}
            
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
