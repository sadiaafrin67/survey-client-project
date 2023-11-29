import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <div className="flex h-[80vh] justify-center items-center ">
        <span className="loading loading-spinner text-info w-[4rem] h-[4rem]"></span>
      </div>
    
    );
  }

    if(user){
        return children
    }

    return <Navigate state={location.pathname}  to='/login'></Navigate>
};





export default PrivateRoute;