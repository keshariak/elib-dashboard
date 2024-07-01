import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import Homepage from "@/pages/HomePage"
import RegisterPage from "@/pages/RegisterPage";
import DashboardLayout from "@/layouts/DashboardLayout";
import BooksPage from "@/pages/BooksPage";
import AuthLayout from "@/layouts/AuthLayout";
 const router = createBrowserRouter([
    
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
    },
    {
        path:'/auth',
        element:<AuthLayout/>,
        children:[
            {
                path:'login',
        
                element: <LoginPage/>,
               
            },
            {
                path:'register',
        
                element: <RegisterPage/>
            },
        ]
    }
])
export default router;