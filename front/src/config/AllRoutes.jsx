import { Navigate, useRoutes } from "react-router-dom";
import rootRoutes from "./root/Root";
import RootModule from '../modules/RootModule'

const AllRoutes = () => {

    const userRoutes = useRoutes([
        {
            path: "/",
            element: <RootModule />,
            children: rootRoutes, // Child routes only render if the token exists
        },
        {
            path: "*",
            element: <Navigate to="/" replace />, // Catch-all for undefined routes
        },
    ]);

    return userRoutes;
};

export default AllRoutes;
