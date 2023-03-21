import axios from "axios"
import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant";

export const Addtocart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data

    }
}
export const removetocart = (id) => {
    return {
        type: REMOVE_TO_CART,
        payload: id

    }
}
