import axios from "axios";
import {IServices} from "../Components/Header/NavItems/ServiceItemsModal/ServiceItemsModal.tsx";

export const getServices = async (callback:(arg:IServices[]) => void) => {
   try{
      const response = await axios.get(`http://localhost:3000/Services`)

      if(response.status === 200) {

         callback(response.data.services)
      }
   }catch (err){
      console.log(err)
   }
}