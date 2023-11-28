import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/home/Home";
import Root from "../Layouts/Root";
import Surveys from "../Pages/Surveys/Surveys";
import SurveyDetail from "../Pages/SurveyDetail/SurveyDetail";
import Pro from "../Pages/GoPro/Pro";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/surveys',
                element: <Surveys></Surveys>
            },
            {
                path: '/details',
                element: <SurveyDetail></SurveyDetail>
            },
            {
                path: '/pro',
                element: <Pro></Pro>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
      },
])

export default Routes;