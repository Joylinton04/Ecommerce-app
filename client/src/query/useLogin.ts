import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface loginProps {
    email: string;
    password: string;
}



export const useLogin = () => {

    const login = async ({ email, password }: loginProps) => {
        const res = await axios.post("http://localhost:3000/api/auth/login", {
            email,
            password,
        });
        return res.data;
    };

    return useMutation({
        mutationFn: async ({ email, password }: loginProps) => {
            await login({ email, password });
        },
    });
};
