import { FaHome, FaPen, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hook/UseAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  // const isAdmin = true;
  // const isSurveyor = false

  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-slate-100">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <h2 className="text-center font-bold py-4">Admin Dashboard</h2>
              <li>
                <NavLink to="/dashboard/allUser">
                  <FaUser></FaUser> Manage User
                </NavLink>
              </li>
              <li className="mt-3">
                <NavLink to="/dashboard/payment">Payment Information</NavLink>
              </li>
              <li className="mt-3">
                <NavLink to="/dashboard/status">Status</NavLink>
              </li>
              <li className="mt-3">
                <NavLink to="/dashboard/response">Response</NavLink>
              </li>
            </>
          ) :

         (
            <>
              <h2 className="text-center font-bold py-4">Surveyor Dashboard</h2>
              <li>
                <NavLink to="/dashboard/creation">
              <FaPen></FaPen> Survey Creation
                </NavLink>
              </li>
              <li className="mt-3">
                <NavLink to="/dashboard/userFedd">User Feedback</NavLink>
              </li>
              <li className="mt-3">
                <NavLink to="/dashboard/adminfeed">Admin Feedback</NavLink>
              </li>
              <li className="mt-3">
                <NavLink to="/dashboard/surresponse">Response</NavLink>
              </li>
            </>
         )}
        

          <hr />
          <li className="mt-3">
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="p-8 flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
