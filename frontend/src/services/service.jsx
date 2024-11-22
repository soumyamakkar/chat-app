const baseUrl="http://localhost:4000/api/v1"

export const postRequest=(async (url,body=null)=>{
    const response=await fetch(`${baseUrl}/${url}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:body?body:null,
        credentials:"include",
    });

    const data=await response.json();
    if(!response.ok){
        let message;
            if(data?.message){
                message=data.message
            }else{
                message="Something went wrong";
            }
        return {error:true,message}
    }
    return data;
})

export const getRequest=(async (url,body=null)=>{
    const response=await fetch(`${baseUrl}/${url}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        },
        body:body?body:null,
        credentials:"include",
    });

    const data=await response.json();
    if(!response.ok){
        let message;
            if(data?.message){
                message=data.message
            }else{
                message="Something went wrong";
            }
        return {error:true,message}
    }
    return data;
})