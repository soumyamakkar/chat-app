import {useEffect} from "react";

const [userlist,setuserlist]=useState([])

const[listError,setListError]=useState(null)

const [loading,setLoading]=useState(true);

const userList=useEffect(()=>{

    const fetchlist=async ()=>{
        setLoading(true);
        const response=await getRequest("/users");
        if(response.error){
            setListError(response.message);
        }
        else{
            setuserlist(response);
            setLoading(false);
        }
    };
    fetchlist();
},[]);

export const ChatContext=createContext()

export const ChatContextProvider=({children})=>{
    return(<ChatContext.Provider value={{}}>{children}</ChatContext.Provider>)
}