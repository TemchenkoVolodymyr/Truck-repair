import axios from "axios";
import {IServices} from "../Components/Header/NavItems/ServiceItemsModal/ServiceItemsModal.tsx";

export const getServices = async (callback?: (arg: IServices[]) => void) => {
    try {
        const response = await axios.get(`https://truck-server-blond.vercel.app/Services`)

        if (response.status === 200) {
            if (callback)
                callback(response.data.services)
        } else {
            return
        }

        return response.data.services
    } catch (err) {
        console.log(err)
    }
}