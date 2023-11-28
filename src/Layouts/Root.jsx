import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navber from "../Pages/Home/Navber/Navber";


const Root = () => {

    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div>
            <div className="container mx-auto">
            { noHeaderFooter || <Navber></Navber>}
                <Outlet></Outlet>
            </div>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;