import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Packages from "../../Pages/Home/Package/HomePackage";

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
        ]
    }
])