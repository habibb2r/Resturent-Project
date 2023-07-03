import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Layout/Pages/Home';
import OurMenu from '../Layout/Pages/Menu/OurMenu';
import OrderFood from '../Layout/Pages/Order/OrderFood';
import Login from '../Layout/Pages/Log/Login';
import SignUp from '../Layout/Pages/Log/SignUp';
import PrivateRoutes from './PrivateRoutes';
import DashUser from '../Layout/Pages/DashBorard/User/DashUser';
import Mycart from '../Layout/Pages/DashBorard/User/MyCart/Mycart';
import Users from '../Layout/Pages/DashBorard/Admin/Users';
import AddItem from '../Layout/Pages/DashBorard/Admin/AddItem';
import AdminRoute from './AdminRoute';
import ManageItems from '../Layout/Pages/DashBorard/Admin/ManageItems';
import ManageBookings from '../Layout/Pages/DashBorard/Admin/ManageBookings';
import Payment from '../Layout/Pages/DashBorard/Payment/Payment';
import AdminHome from '../Layout/Pages/DashBorard/Admin/AdminHome/AdminHome';
import UserHome from '../Layout/Pages/DashBorard/User/Home/UserHome';
import ContactUs from '../Layout/Pages/Home/Contact/ContactUs';
import PayHistory from '../Layout/Pages/DashBorard/User/PaymentHistory/PayHistory';



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <OurMenu></OurMenu>
        },
        {
          path: 'order/:category',
          element: <PrivateRoutes><OrderFood></OrderFood></PrivateRoutes>
        },
        {
          path: 'secret',
          element: <PrivateRoutes></PrivateRoutes>
        },
        {
          path: 'contact',
          element: <ContactUs></ContactUs>
        },
        
      ]
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: 'signup',
      element: <SignUp></SignUp>
    },
    {
      path: 'userdash',
      element: <DashUser></DashUser>,
      children: [
        {
          path: 'userHome',
          element: <PrivateRoutes><UserHome></UserHome></PrivateRoutes>
        },
        {
          path: 'mycart',
          element: <Mycart></Mycart>
        },
        {
          path: 'pay',
          element: <Payment></Payment>
        },
        {
          path: 'payment',
          element: <PayHistory></PayHistory>
        },
        {
          path: 'users',
          element: <AdminRoute><Users></Users></AdminRoute>
        },
        {
          path: 'addItems',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'manageBookings',
          element: <AdminRoute><ManageBookings></ManageBookings></AdminRoute>
        },
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        }

      ]
    }
  ]);