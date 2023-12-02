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
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/Dashboard/AboutUs/About";
import UpdateSurvey from "../Pages/Dashboard/UpdateSurvey";
import MySurvey from "../Pages/Dashboard/MySurvey";


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
                path: '/details/:id',
                element: <SurveyDetail></SurveyDetail>,
                loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.id}`)
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
            },
            {
                path: '/about',
                element: <About></About>
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
                element: <PrivateRoute><Creation></Creation></PrivateRoute>
            },
            {
                path: 'mysurvey',
                element: <PrivateRoute><MySurvey></MySurvey></PrivateRoute>
            },
            {
                path: 'update/:id',
                element: <PrivateRoute><UpdateSurvey></UpdateSurvey></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.id}`)
            },
            {
                path: 'userFedd',
                element: <PrivateRoute><UserFeed></UserFeed></PrivateRoute>
            },
            {
                path: 'adminfeed',
                element: <PrivateRoute><AdminFeed></AdminFeed></PrivateRoute>
            },
            {
                path: 'surresponse',
                element: <PrivateRoute><SurRes></SurRes></PrivateRoute>
            }
        ]
      }
])

export default Routes;