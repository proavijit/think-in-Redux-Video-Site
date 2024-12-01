import axios from "../../utils/axios"


export const getVideo = async (id) =>{
  const responce = await axios.get(`videos/${id}`);
   const data = await responce.data;
   return data
}