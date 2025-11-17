import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSessionUser = () => {
  return useQuery({
    queryKey: ["authenticatedUser"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}api/auth/me`,
        {
          withCredentials: true,
        }
      );
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export default useSessionUser;
