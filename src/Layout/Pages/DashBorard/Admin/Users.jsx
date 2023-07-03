import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import TableUsers from "./TableUsers";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";


const Users = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    return (
        <div>
            <Helmet>
                <title>Cookie-Boss - Admin | All Users</title>
            </Helmet>
            <SectionTitle head='Total Customer' subHead='List of total customers'>
            </SectionTitle>
            <div className="overflow-x-auto">
                    <table className="table w-full mx-auto">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            users.map((user , index )=> <TableUsers user={user} refetch={refetch} index={index} key={user._id}></TableUsers>)
                        }

                        </tbody>
                        
                    </table>
                </div>
        </div>
    );
};

export default Users;