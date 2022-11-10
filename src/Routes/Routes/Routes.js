import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Maintenance from "../../Pages/Maintenance/Maintenance";
import AddPackages from "../../Pages/Packages/AddPackages/AddPackages";
import PackageDetails from "../../Pages/Packages/PackageDetails/PackageDetails";
import Packages from "../../Pages/Packages/Packages/Packages";
import Profile from "../../Pages/Profile/Profile";
import Footer from "../../Pages/Shared/Footer/Footer";
import Header from "../../Pages/Shared/Header/Header";
import MyReviews from "../../Pages/Shared/MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/addpackage',
                element: <PrivateRoute><AddPackages></AddPackages></PrivateRoute>
            },
            {
                path: '/packages',
                element: <Packages></Packages>,
                loader: () => fetch('http://localhost:5000/packages')
            },
            {
                path: '/maintenance',
                element: <Maintenance></Maintenance>,
            },
            {
                path: '/packages/:id',
                element:<PackageDetails></PackageDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/packages/${params.id}`),             
            },
        ]
    },
    {
        path: '*', element: <div>
            <Header></Header>
            <ErrorPage></ErrorPage>
            <Footer></Footer>
        </div>
    }
])