import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import {FaDollarSign, FaUsers} from 'react-icons/fa'
import {GiCometSpark} from 'react-icons/gi'
import {BsFillBox2HeartFill} from 'react-icons/bs'


const AdminHome = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: stats ={}}  = useQuery({
        queryKey: ['admin-states'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-states');
            return res.data;
        }

    })

    return (
        <div className="px-10 bg-white">
            
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-2 py-10">
  
                <div className="stat  shadow-lg">
                    <div className="stat-figure text-secondary text-4xl">
                    <FaDollarSign></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                    <div className="stat-desc">In Total</div>
                </div>
                <div className="stat shadow-lg ">
                    <div className="stat-figure text-secondary text-4xl">
                    <GiCometSpark></GiCometSpark>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    <div className="stat-desc">times</div>
                </div>
                
                <div className="stat shadow-lg ">
                    <div className="stat-figure text-secondary text-4xl">
                    <FaUsers></FaUsers>
                    </div>
                    <div className="stat-title">Customers</div>
                    <div className="stat-value">{stats.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                
                <div className="stat shadow-lg ">
                    <div className="stat-figure text-secondary text-4xl">
                    <BsFillBox2HeartFill></BsFillBox2HeartFill>
                    </div>
                    <div className="stat-title">Total Products</div>
                    <div className="stat-value">{stats.products}</div>
                    <div className="stat-desc">↗︎ 90 (14%)</div>
                </div>
                
            </div>
        </div>
    );
};

export default AdminHome;