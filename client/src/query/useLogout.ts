import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";




export const useLogOut = () => {
    const queryClient = useQueryClient();

    const logout = async () => {
        const res = await axios.post("http://localhost:3000/api/auth/logout")
        return res.data;
    };

    return useMutation({
        mutationFn: async () => {
            await logout()
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["authenticatedUser"] });
        }
    });
};
