import { useMutation } from "@tanstack/react-query";
import axios from "axios";


interface CartItem {
    productId: string;
    quantity: number;
    size: string;
}


const useAddToCart = () => {

    const addToCart = async ({ productId, quantity, size }: CartItem) => {
        const res = await axios.post("http://localhost:3000/api/cart/add", {
            productId,
            quantity,
            size
        }, {
            withCredentials: true
        })
        return res.data
    }

    return useMutation({
        mutationFn: async ({ productId, quantity, size }: CartItem) => {
            await addToCart({ productId, quantity, size })
        }
    })
}

export default useAddToCart;