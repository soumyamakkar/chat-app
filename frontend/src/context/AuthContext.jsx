import React, { createContext, useState } from "react";
import { useCallback } from "react";
import {useNavigate} from "react-router-dom";
import { postRequest } from "../services/service";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [loginError,setLoginError]=useState(null);
    const [user,setUser]=useState(null);
    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: "",
    });

    const navigate=useNavigate();
    const submitLogin=useCallback(async (e)=>{
        e.preventDefault();
        try{
            const response=await postRequest("auth/login",JSON.stringify(loginInfo))
            if(response.error){
                setLoginError(response.message);
            }
            else{
                localStorage.setItem("user",JSON.stringify(response));
                setUser(response);
                navigate("/")
            }
        }catch(error){

        }
    },[loginInfo])

    const [logoutError,setLogoutError]=useState(null);

    const handleLogout=async()=>{
        const response=await postRequest('auth/logout')
            localStorage.removeItem('user')
            setUser(null);
            navigate("/login");
    }

    return (
        <AuthContext.Provider value={{ loginInfo, setLoginInfo, loginError,user, submitLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
};
