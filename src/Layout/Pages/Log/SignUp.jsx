import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ani from './up-ani.json'
import Lottie from 'lottie-react'



// Validaton Work Remaining, must do it at the end

const SignUp = () => {
    const {createUser, updateUser} = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {

        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUser( data.name, data.photo)
            .then(() => {
                reset();
                const saveUser = {name: data.name, photo: data.photo, password: data.password, email: data.email}
                fetch('http://localhost:5000/users',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body : JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          navigate('/');
                    }
                })
                
            })
            .catch(error => console.log(error));
            
        })    
    };
    return (
        <div>
            <Helmet>
                <title>Cookie-Boss | Sign Up</title>
            </Helmet>
            <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="text-center">
                    <h1 className="text-5xl font-bold font-mono mt-4">Signup now!</h1>
                   <Lottie className="md:h-[600px] h-[200px]" animationData={ani}></Lottie>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  {...register("name", { required: true })} placeholder="Enter Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text"  {...register("photo")} placeholder="Enter photo url" className="input input-bordered" />
                        
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email", { required: true })} placeholder="Enter Email" className="input input-bordered" />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                        
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true })} placeholder="Enter Password" className="input input-bordered" />
                        {errors.password && <span className="text-red-500">Password is required</span>}
                       
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;