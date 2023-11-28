import { FaHome, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const isAdmin = true;


  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-slate-100">
        
        <ul className="menu p-4">
        <h2 className="text-center font-bold py-4">Admin Dashboard</h2>
          <li>
            <NavLink to="/dashboard/allUser">
              <FaUser></FaUser> Manage User
            </NavLink>
          </li>
          <li className="mt-3">
            <NavLink to="/dashboard/payment">
               Payment Information
            </NavLink>
          </li>
          <li className="mt-3">
            <NavLink to="/dashboard/status">
             Status
            </NavLink>
          </li>
          <li className="mt-3">
            <NavLink to="/dashboard/response">
           Response
            </NavLink>
          </li>

          <hr />
          <li className="mt-3">
            <NavLink to="/">
                <FaHome></FaHome>
          Home
            </NavLink>
          </li>
        </ul>
  
      </div>

      <div className="flex flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
