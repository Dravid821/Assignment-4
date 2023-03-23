import axios from "axios"
import { ADD_TO_CART, REMOVE_TO_CART} from "./type";

export const Addtocart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item

    }
}
export const removetocart = (id) => {
    return {
        type: REMOVE_TO_CART,
        payload: id

    }
}