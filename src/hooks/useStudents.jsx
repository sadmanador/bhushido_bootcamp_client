import useAxiosSecureToken from './useAxiosSecureToken';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useStudents = () => {
    const [axiosSecure] = useAxiosSecureToken();
    const {user} = useAuth()

    const {
        data: students = [],
        isLoading: loading,
        refetch,
      } = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
          if(!user){
            return false
          }
          const res = await axiosSecure(`/students?email=${user?.email}`);
          return res.data
        },
      });

      return {refetch, loading, students}
};

export default useStudents;