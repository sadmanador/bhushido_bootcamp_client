import { useQuery } from "@tanstack/react-query";
import useAxiosSecureToken from "./useAxiosSecureToken";
import useAuth from "./useAuth";


const usePaymentHistory = () => {
    const [axiosSecure] = useAxiosSecureToken();
    const {user} = useAuth();

    const {
        data: histories = [],
        isLoading: loading,
        refetch,
      } = useQuery({
        queryKey: ["payments", user?.email],
        queryFn: async () => {
            if(!user){
              return false
            }
            const res = await axiosSecure(`/payments?email=${user?.email}`);
            return res.data;
        },
      });
    
      return { histories, loading, refetch };
};

export default usePaymentHistory;