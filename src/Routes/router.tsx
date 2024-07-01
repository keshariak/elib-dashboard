import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import Homepage from "@/pages/HomePage"
import RegisterPage from "@/pages/RegisterPage";
import DashboardLayout from "@/pages/DashboardLayout";
import BooksPage from "@/pages/BooksPage";
 const router = createBrowserRouter([
    {
        path:'/login',

        element: <LoginPage/>,
       
    },
    {
        path:'/register',

        element: <RegisterPage/>
    },
    {
        path:'/',

        element: <DashboardLayout/>,
        children:[
            {
                path:'home',
                element: <Homepage/>
            },
            {
                path:'book',
                element: <BooksPage/>
            }
        ]
    }
])
export default router;