import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "./useCart";

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [, refetch] = useCart();

    const handleAddCart = _id =>{
        
        if(user && user.email){
            const orderItem = {menuID: _id, name, price, image, email: user.email};
            console.log(orderItem);
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                
                console.log(data)});
        }
        else{
            Swal.fire({
                title: 'Please log in to add to the cart',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                    Swal.fire(
                        'Login!',
                        'Your file has been deleted.',
                        'success'
                    )
                    }
              })
        }
    }
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl relative text-left">
            <figure><img className="h-[250px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button onClick={() => handleAddCart(_id)} className="btn btn-outline btn-info border-0 border-b-4">Add to Cart</button>
                </div>
                <div className="absolute right-7 top-4 bg-black text-white p-2 rounded-xl">
                    <p>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;