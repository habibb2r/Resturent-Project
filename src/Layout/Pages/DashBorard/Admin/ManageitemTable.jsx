import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useMenu from "../../../../hooks/useMenu";
import {LuEdit ,LuTrash2} from "react-icons/lu"


const ManageitemTable = ({item, index}) => {
    const [, , refetch] = useMenu();
    const [ axiosSecure ] = useAxiosSecure();
    const handleDeleteItem = item =>{
       
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this item",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                .then(res=>{
                    
                    if(res.data.deletedCount){
                        refetch();
                        console.log(res.data)
                        Swal.fire(
                            'Deleted!',
                            'Item has been deleted.',
                            'success'
                          )
                          
                    }
    
                })
            }
          })
        
    }
    return (
        <tr  >
                            <td><p>{index+1}</p></td>
                            <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12 ">
                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                            </div>
                            </td>
                            <td>
                                <div className="text-left">
                                    <div className="font-bold">{item.name}</div>
                                    <div className="text-sm opacity-50">{item.category}</div>
                                </div>
                            </td>
                            <td>{item.price}$</td>
                            <td>
                            <button className="btn btn-warning text-lg"><LuEdit/></button>
                            </td>
                            <td>
                            <button onClick={()=>handleDeleteItem(item)} className="btn btn-error text-lg"><LuTrash2/></button>
                            </td>
                        </tr> 
    );
};

export default ManageitemTable;