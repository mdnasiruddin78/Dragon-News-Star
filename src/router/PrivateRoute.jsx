import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loding from "../Pages/Loding";


const PrivateRoute = ({children}) => {

    const {user,loding} = useContext(AuthContext)

    if(loding){
        return <Loding></Loding>
    }

    if(user && user?.email){
        return children
    }

    return <Navigate to={"/auth/login"}></Navigate>
};

export default PrivateRoute;