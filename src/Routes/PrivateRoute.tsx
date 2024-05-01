import { FC, useContext} from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "./Auth";

const PrivateRoute: FC = () => {
    const { isAuthenticated } = useContext(AuthContext);
    if (!isAuthenticated) {
        return <Navigate to="/loginUser" replace />
    }
    return <Outlet />
};

export default PrivateRoute
