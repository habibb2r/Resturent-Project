import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const useCart = (email) => {
    const {user, loading} = useAuth();
    // const token = localStorage.getItem('token');
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            return response.data;
          },
        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
        //       headers: {
        //         authorization: `bearer ${token}`
        //       }})
        //     if (!response.ok) {
        //       throw new Error('Network response was not ok')
        //     }
        //     return response.json()
        //   },
      })
      return [cart, refetch, isLoading];
};

export default useCart;