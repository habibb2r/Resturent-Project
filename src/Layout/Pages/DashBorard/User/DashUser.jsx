import { NavLink, Outlet } from "react-router-dom";
import {FaCalendar, FaHome, FaWallet, FaUsers} from 'react-icons/fa';
import { BsFillCartFill, BsShop, BsMenuApp, BsFillCalendar2CheckFill, BsFillStarFill} from "react-icons/bs";
import {SiGooglemessages} from "react-icons/si"
import {ImSpoonKnife} from "react-icons/im"
import {AiOutlineMenu,AiOutlineBook} from "react-icons/ai"

import useCart from "../../../../Components/FoodCard/useCart";
import useAdmin from "../../../../hooks/useAdmin";
import useMenu from "../../../../hooks/useMenu";
import logo from "../../../../assets/home/final-logo.png"

const DashUser = () => {
    const [cart] = useCart();
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [menu] = useMenu();
    
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content text-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden my-4">Options</label>
                    {/* Page content here */}
                    <Outlet></Outlet>
                
                </div> 
                <div className="drawer-side bg-[#D1A054] ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-60 md:w-80 h-full text-black">
                        <li><img className="my-5 w-[150px] h-[150px]" src={logo} alt="Cookie Boss" /></li>
                    {/* Sidebar content here */}
                    {
                        isAdmin? <>
                        <li><NavLink to='/userdash/adminHome'><FaHome></FaHome> Admin Home </NavLink></li>
                        <li><NavLink to='addItems'><ImSpoonKnife></ImSpoonKnife> Add items</NavLink></li>
                        <li><NavLink to='manageItems'><AiOutlineMenu/>Manage Items <span className="badge badge-secondary">{menu.length}</span></NavLink></li>
                        <li><NavLink to='manageBookings'><AiOutlineBook></AiOutlineBook> Manage Bookings</NavLink></li>
                        <li><NavLink to='users'><FaUsers></FaUsers> All Users</NavLink></li>
                        </> : <>
                        <li><NavLink to='/userdash/home'><FaHome></FaHome> User Home </NavLink></li>
                        <li><NavLink to='reservation'><FaCalendar></FaCalendar> Reservation</NavLink></li>
                        <li><NavLink to='payment'><FaWallet></FaWallet>Payment History</NavLink></li>
                        <li><NavLink to='mycart'><BsFillCartFill></BsFillCartFill> My Cart <div className="badge badge-secondary">+{cart?.length}</div></NavLink></li>
                        <li><NavLink to='review'><BsFillStarFill></BsFillStarFill> Add Review</NavLink></li>
                        <li><NavLink to='booking'><BsFillCalendar2CheckFill></BsFillCalendar2CheckFill>My Booking</NavLink></li>
                        </>
                    }

                    <div className="divider"></div>

                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/menu'><BsMenuApp></BsMenuApp> Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><BsShop></BsShop>Shop</NavLink></li>
                    <li><NavLink to='contact'><SiGooglemessages></SiGooglemessages>Contact</NavLink></li>
                    </ul>
                
                </div>
                </div>
        </div>
    );
};

export default DashUser;