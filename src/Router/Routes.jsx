import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/home/Home";
import Root from "../Layouts/Root";
import Surveys from "../Pages/Surveys/Surveys";
import SurveyDetail from "../Pages/SurveyDetail/SurveyDetail";
import Pro from "../Pages/GoPro/Pro";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllUser from "../Pages/Dashboard/AllUser";
import Payment from "../Pages/Dashboard/Payment";
import Status from "../Pages/Dashboard/Status";
import Response from "../Pages/Dashboard/Response";
import Creation from "../Pages/Dashboard/Creation";
import UserFeed from "../Pages/Dashboard/UserFeed";
import AdminFeed from "../Pages/Dashboard/AdminFeed";
import SurRes from "../Pages/Dashboard/SurRes";
import AdminRoute from "./AdminRoute";


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
      
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'allUser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: 'payment',
                element: <AdminRoute><Payment></Payment></AdminRoute>
            },
            {
                path: 'status',
                element: <AdminRoute><Status></Status></AdminRoute>
            },
            {
                path: 'response',
                element: <AdminRoute><Response></Response></AdminRoute>
            },


            {
                path: 'creation',
                element: <Creation></Creation>
            },
            {
                path: 'userFedd',
                element: <UserFeed></UserFeed>
            },
            {
                path: 'adminfeed',
                element: <AdminFeed></AdminFeed>
            },
            {
                path: 'surresponse',
                element: <SurRes></SurRes>
            }
        ]
      }
])

export default Routes;