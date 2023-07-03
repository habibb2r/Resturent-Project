import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../Components/FoodCard/useCart";
import useAdmin from "../../hooks/useAdmin";
import logo from '../../assets/home/final-logo.png'


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const handleLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch((error) => {console.log(error)});
  }
    const navOptions = 
    <>
      <li><NavLink to='/'>Home</NavLink></li>  
      <li><NavLink to='/menu'>Our Menu</NavLink></li>  
      <li><NavLink to='/order/salad'>Order</NavLink></li> 
      <li><NavLink to={isAdmin? '/userdash/adminHome' : '/userdash/userHome'}>Dashboard</NavLink></li>  
      <li><NavLink to='/contact'>Conact Us</NavLink></li>   
      {
        isAdmin? <></> : <li><NavLink to='/userdash/mycart'>
        <button className="btn relative">
          <span className="text-2xl mr-3"><FaShoppingCart/></span>
          <div className="text-green-600 p-[2px] bg-white rounded-xl absolute right-1 top-0">+{cart?.length || 0}</div>
        </button>
        </NavLink></li> 
      } 
      
      {
        user ? <>
        <li><span>Welcome, {user.displayName}</span></li> 
        
        </> : <>
        
        </>
      }  
      {
        user? <li><button onClick={handleLogOut} className="btn btn-error text-center font-semibold">Log Out</button></li> : <li><NavLink to='/login'>Login</NavLink></li>
      }
    </>
    return (
        <>
            <div className="navbar fixed py-2 h-[120px] bg-opacity-50 max-w-screen-xl text-black text-lg bg-white font-semibold z-20">
                <div className="navbar-start">
                  <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#D1A054] rounded-box w-52">
                      {navOptions}
                    </ul>
                  </div>
                  <img className="h-[120px]" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 flex justify-center items-center">
                  {navOptions}
                  </ul>
                </div>
                
              </div>
        </>
    );
};

export default Navbar;