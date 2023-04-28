import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Category from "../Page/Category/Category";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Category></Category>,
                
            },
        ]
    }
])

export default router