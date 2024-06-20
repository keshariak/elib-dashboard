import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import Homepage from "@/pages/HomePage"
 const router = createBrowserRouter([
    {
        path:'/login',

        element: <LoginPage/>
    },
    {
        path:'/',

        element: < Homepage />
    }
])
export default router;