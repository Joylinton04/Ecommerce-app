import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ResProps {
    authenticated: boolean,
    user: {
        username: string,
        email: string,
    }
}


const useSessionUser = () => {
  return useQuery({
    queryKey: ["authenticatedUser"],
    queryFn: async () => {
      const res = await axios.get<ResProps>(
        `http://www.localhost:3000/api/auth/me`,
        {
          withCredentials: true,
        }
      );
      return res.data.user;
    },
    // staleTime: 1000 * 60 * 5,
  });
};

export default useSessionUser;
