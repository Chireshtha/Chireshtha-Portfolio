import App from "../../App";
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from "../Pages/ErrorPage";
import SinglePagePortfolio from "../Pages/SinglePagePortfolio";


const routes = createBrowserRouter([
    {
        path: "/", element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {path:'/', element: <SinglePagePortfolio />}
        ]
    }
])

export default routes;