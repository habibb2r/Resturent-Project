
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

import useMenu from '../../../../hooks/useMenu';
import ManageitemTable from "./ManageitemTable";


const ManageItems = () => {
    const [menu, , ] = useMenu();
    
   
    return (
        <div className="w-full">
            <SectionTitle head='Manage All Items' subHead='Manage Item with update, delete'>
            </SectionTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="text-center">
                    <tr>
                        <th>#</th>
                        <th>Item image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody className="text-center">
                    {
                        menu.map((item, index) => <ManageitemTable item={item} key={item._id} index={index}></ManageitemTable>)
                    }
                    
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default ManageItems;