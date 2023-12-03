import { FaHome, FaPen, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hook/UseAdmin";
import useSurveyor from "../../Hook/useSurveyor";
import { GrUpdate } from "react-icons/gr";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { HiMiniUsers } from "react-icons/hi2";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { RiSurveyFill } from "react-icons/ri";


const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  const [isSurveyor] = useSurveyor();
  console.log(isSurveyor)

  // const isAdmin = true;
  // const isSurveyor = false

  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64  min-h-screen bg-slate-100">
        <ul className="menu p-4">
          {isAdmin && (
            <>
              <h2 className="text-center font-bold py-4">Admin Dashboard</h2>
              <li>
                <NavLink to="/dashboard/allUser">
                <HiMiniUsers className="text-xl"></HiMiniUsers> Manage Users
                </NavLink>
              </li>
              <li className="mt-3">
                <NavLink to="/dashboard/payment"><FaHandHoldingDollar className="text-xl"></FaHandHoldingDollar> Payment Information</NavLink>
              </li>
              <li className="mt-3">
                <NavLink to="/dashboard/status"><BsArrowRightCircleFill className="text-xl"></BsArrowRightCircleFill>Control Pannel</NavLink>
              </li>
              <li className="mt-3">
                <NavLink to="/dashboard/response"><AiFillWechat className="text-xl"></AiFillWechat> Response</NavLink>
              </li>
            </>
          )}

          {isSurveyor && (
            
          
            <>
              <h2 className="text-center font-bold py-4">Surveyor Dashboard</h2>
              <li>
                <NavLink to="/dashboard/creation">
              <FaPen></FaPen> Create Survey
                </NavLink>
              </li>
              <li className="mt-3">
                <NavLink to="/dashboard/mysurvey"><RiSurveyFill className="text-xl"></RiSurveyFill> My Surveys</NavLink>
              </li>
              <li className="mt-3">
                <NavLink to="/dashboard/userFedd"><FaUserCircle className="text-xl"></FaUserCircle> User Feedback</NavLink>
              </li>
              <li className="mt-3">
                <NavLink to="/dashboard/adminfeed"><MdAdminPanelSettings className="text-xl"></MdAdminPanelSettings> Admin Feedback</NavLink>
              </li>
              <li className="mt-3">
                <NavLink to="/dashboard/surresponse"><AiFillWechat className="text-xl"></AiFillWechat> Response</NavLink>
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
