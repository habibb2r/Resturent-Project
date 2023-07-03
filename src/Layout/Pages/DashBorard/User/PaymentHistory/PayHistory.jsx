import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import usePayhistory from "../../../../../hooks/usePayhistory";
import PayTable from "./PayTable";


const PayHistory = () => {
    const [history, refetch, ] = usePayhistory();
    console.log(history)
    return (
        <div className="px-5">
            <Helmet>
                <title>Cookie-Boss | Order-History</title>
            </Helmet>
            <SectionTitle head='Order History' subHead='Your Order & Payment Information'></SectionTitle>
            <div className="overflow-x-auto border-2 rounded-md ">
                    <table className="table w-full ">
                        {/* head */}
                        <thead>
                        <tr className="text-center ">
                            <th className="bg-[#D1A054] font-bold">#</th>
                            <th className="bg-[#D1A054] font-bold">Email</th>
                            <th className="bg-[#D1A054] font-bold">Transaction Id</th>
                            <th className="bg-[#D1A054] font-bold">Price</th>
                            <th className="bg-[#D1A054] font-bold">Quantity</th>
                            <th className="bg-[#D1A054] font-bold">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            history.map((item , index )=> <PayTable item={item} refetch={refetch} index={index} key={item._id}></PayTable>)
                        }

                        </tbody>
                        
                    </table>
                </div>
        </div>
    );
};

export default PayHistory;