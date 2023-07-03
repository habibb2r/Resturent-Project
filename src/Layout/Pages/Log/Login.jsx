
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ani from './login-ani.json'
import Lottie from 'lottie-react'

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    const {signin, signInGoogle} = useContext(AuthContext);
    const handleGoogleSignin = () =>{
        signInGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            const saveUser = {name: loggedUser.displayName, photo: loggedUser.photoURL, email: loggedUser.email}
                fetch('http://localhost:5000/users',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body : JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(() =>{
                          navigate(from, { replace: true });
                    
                })
            
        })
        .catch(error => {
            console.error(error);
        })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signin(email, password)
        .then(result => {
            const user  = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
    }
    const handleValid = () => {
        const captValue = captchaRef.current.value;
        console.log(captValue);
        if (validateCaptcha(captValue)==true) {
            setDisabled(false);
        }
   
        else {
            setDisabled(true);
        }
        
    }
    
    useEffect(() => {
        loadCaptchaEnginge(6);
    },[])
    return (
        <div>
            <Helmet>
                <title>Cookie-Boss | Log In</title>
            </Helmet>
        
            <form onSubmit={handleLogin}>
                
            <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                        <div className="text-center">
                        <h1 className="text-5xl font-bold font-mono my-5">Login now!</h1>
                        <div className=''>
                        <Lottie className='h-[100px] md:h-[500px]' animationData={ani}></Lottie>
                        </div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            
                            <input type="text" ref={captchaRef} name='captcha' placeholder="Enter captcha" className="input input-bordered" />
                            <button onClick={handleValid} className="btn  btn-success btn-xs mt-3">Valid Captcha</button>
                            </div>
                            <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div className='font-semibold'>
                                <p>New Account? <span className='text-fuchsia-600'><Link to='/signup'>SignUp Here</Link></span></p>
                            </div>
                            <div className='text-center'>
                            <button onClick={handleGoogleSignin} className="btn btn-wide">Sign In With Google</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </form>
            
        </div>
    );
};

export default Login;