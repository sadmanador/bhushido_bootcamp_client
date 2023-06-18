import useAxiosSecureToken from "./useAxiosSecureToken";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useInstructorClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecureToken();

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes/myClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (!user) {
        return false;
      }
      const res = await axiosSecure(`/classes/myClasses?email=${user?.email}`);
      return res.data;
    },
  });

  return { classes, refetch };
};

export default useInstructorClass;
