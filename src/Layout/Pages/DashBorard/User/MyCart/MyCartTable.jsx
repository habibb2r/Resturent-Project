import {BsFillTrash3Fill} from "react-icons/bs"
import Swal from "sweetalert2";
import useCart from "../../../../../Components/FoodCard/useCart";

const MyCartTable = ({item, index, refetch}) => {
    // const [refetch] = useCart();
    const {name, price, image} = item; 
    const handleDelete = (itemdelete) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${itemdelete._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
              
            }
          })
    };


    return (
        <tr>
        <td>
        <label>
            <p>{index+1}</p>
        </label>
        </td>
        <td>
        <div className="flex items-center space-x-3">
            <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
            </div>
            
        </div>
        </td>
        <td>
        <p>{name}</p>
        </td>
        <td className="">{price}$</td>
        <td>
        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg"><BsFillTrash3Fill></BsFillTrash3Fill></button>
        </td>
    </tr>
    );
};

export default MyCartTable;