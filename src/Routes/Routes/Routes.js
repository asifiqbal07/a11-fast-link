import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import PackageDetails from "../../Pages/Packages/PackageDetails/PackageDetails";
import Packages from "../../Pages/Packages/Packages/Packages";

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
                path: '/packages',
                element: <Packages></Packages>,
                loader: () => fetch('http://localhost:5000/packages')
            },
            {
                path: '/packages/:id',
                element: <PackageDetails></PackageDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/packages/${params.id}`)
            },
        ]
    }
])