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
                loader: ()=> fetch('http://localhost:5000/category')
            },
        ]
    }
])

export default router