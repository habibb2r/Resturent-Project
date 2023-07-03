import { Link } from "react-router-dom";
import useCart from "../../../../../Components/FoodCard/useCart";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import MyCartTable from "./MyCartTable";


const Mycart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item)=> item.price + sum, 0 )
    return (
        <div className="w-full p-10">
            <SectionTitle head='My Cart' subHead='Manage My Cart'>
            </SectionTitle>
            <div className="flex-col justify-center items-center">
                <div className="font-semibold uppercase flex justify-evenly align-middle items-center my-6">
                        <h3>My Cart : {cart.length}</h3>
                        <h3>Total Price : {total} </h3>
                        <Link to='/userdash/pay'><button className="btn btn-warning">Pay</button></Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item , index )=> <MyCartTable item={item} refetch={refetch} index={index} key={item._id}></MyCartTable>)
                        }

                        </tbody>
                        
                    </table>
                </div>
            </div>
            </div>
    );
};

export default Mycart;