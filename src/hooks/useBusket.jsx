import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecureToken from "./useAxiosSecureToken";

const useBusket = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecureToken();

  const { refetch, data: busket = [] } = useQuery({
    queryKey: ["taken-courses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if(!user){
        return false
      }
      const res = await axiosSecure(`/taken-courses?email=${user?.email}`);
      return res.data;
    },
  });

  return {busket, refetch};
};

export default useBusket;
