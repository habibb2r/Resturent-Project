import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';



const usePayhistory = (email) => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, refetch, data: history = [] } = useQuery({
        queryKey: ['history', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/payments?email=${user?.email}`)
            return response.data;
          },
      })
      return [history, refetch, isLoading];
};

export default usePayhistory;