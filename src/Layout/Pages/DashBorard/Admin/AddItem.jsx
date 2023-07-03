import { useForm } from 'react-hook-form';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data =>{
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageResponse =>{
            if(imageResponse.success){
                const imgURL = imageResponse.data.display_url;
                const {name, price, category, recipe }= data;
                const newItem = {name, price: parseFloat(price), category, recipe, image: imgURL};
                axiosSecure.post('/menu', newItem)
                .then(data =>{
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Item Added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                    console.log('Added data', data.data)
                })
            }
        })
         console.log(data)};
    console.log(errors);
    console.log(img_hosting_token)
    return (
        <div className="w-full px-10 bg-white py-10">
            <Helmet>
                <title>Cookie-Boss-Admin | Add Item</title>
            </Helmet>
            <SectionTitle
            head='Add an Item' subHead='Add item with details'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                        
                    </label>
                    <input  type="text" placeholder="Type here" {...register("name", {required: true, maxLength: 80})} className="input input-bordered w-full " />
                    
                </div>
                <div className='flex gap-4 my-4'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Category*</span>
                        
                    </label>
                    <select  className="select select-bordered w-full" {...register("category", {required: true})}>
                        <option disabled selected>Category</option>
                        <option>salad</option>
                        <option>pizza</option>
                        <option>soup</option>
                        <option>drinks</option>
                        <option>dessert</option>
                        <option>desi</option>
                        <option>offered</option>
                        <option>popular</option>
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                        
                    </label>
                    <input type="number" {...register("price", {required: true})}placeholder="Type here" className="input input-bordered w-full " />
                    
                </div>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Recipe Details*</span>
                    
                </label>
                <textarea className="textarea textarea-bordered h-24" {...register("recipe", {required: true, maxLength: 180})}placeholder="Type details"></textarea>
                
                </div>
                <div className="form-control md:w-[50%] my-4">
                <label className="label">
                    <span className="label-text font-semibold">Item image*</span>
                    
                </label>
                <input type="file" {...register("image", {required: true})}className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-warning" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;