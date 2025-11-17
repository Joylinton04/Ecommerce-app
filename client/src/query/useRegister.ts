// hooks/useRegister.ts
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface registerProps {
  username: string;
  email: string;
  password: string;
}



export const useRegister = () => {

    const register = async ({ username, email, password }: registerProps) => {
        const res = await axios.post("http://localhost:3000/api/auth/register", {
            username,
            email,
            password,
        });
        return res.data;
    };

    return useMutation({
        mutationFn: async ({ username, email, password }: registerProps) => {
            await register({ username, email, password });
        },
    });
};
