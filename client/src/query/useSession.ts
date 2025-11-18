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
        `http://localhost:3000/api/auth/me`,
        {
          withCredentials: true
        }
        // credentials are not getting sent to the backend which is not authenticating users
      );
      return res.data.authenticated;
    },
    // staleTime: 1000 * 60 * 5,
  });
};

export default useSessionUser;
