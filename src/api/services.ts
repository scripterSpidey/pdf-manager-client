import endPoints from "./api.requests"
import axiosReq from "./axios.config"

export const uploadPDF = async (data:FormData)=>{
    const response = await axiosReq.post(endPoints.upload,data);
    return response.data;
}

export const downloadPDF = async (fileName:string)=>{
    const response =  await axiosReq.get(endPoints.download(fileName),{
        responseType:"blob"
    })
    return response.data;
}