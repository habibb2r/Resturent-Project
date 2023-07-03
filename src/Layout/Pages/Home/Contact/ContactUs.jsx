import { Helmet } from "react-helmet-async";
import Cover from "../../Menu/Components/Cover";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import coverimg from '../../../../assets/contact/banner.jpg'
import {FaPhoneVolume , FaMapMarkerAlt , FaClock} from 'react-icons/fa'
import {BsFillSendFill} from 'react-icons/bs'
import { useForm } from "react-hook-form";


const ContactUs = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data=>{
        console.log(data)
    }
    return (
        <div>
            <Helmet>
                <title>Cookie-Boss | Contact</title>
            </Helmet>
            <Cover bgImg={coverimg} head="Contact Us" subHead="We are 24/7 available"></Cover>

            {/* Offered */}
            <SectionTitle subHead="---Visit Us---" head="OUR LOCATION"></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-5 md:px-2 my-10">
                <div className="border-2 text-center w-full rounded-lg">
                    <div className=" text-white p-4 text-center bg-[#D1A054]">
                    <FaPhoneVolume className="mx-auto"></FaPhoneVolume>
                    </div>
                    <div className=" bg-[#F3F3F3] h-[120px] mx-2 p-5">
                        <h3 className="font-semibold">PHONE</h3>
                        <p>+88012344</p>
                    </div>
                </div>
                <div className="border-2 text-center w-full rounded-lg">
                    <div className=" text-white p-4 text-center bg-[#D1A054]">
                    <FaMapMarkerAlt className="mx-auto"></FaMapMarkerAlt>
                    </div>
                    <div className=" bg-[#F3F3F3] h-[120px] mx-2 p-5">
                        <h3 className="font-semibold">ADDRESS</h3>
                        <p>+38 (012) 34 56 789 </p>
                    </div>
                </div>
                <div className="border-2 text-center w-full rounded-lg">
                    <div className=" text-white p-4 text-center bg-[#D1A054]">
                    <FaClock className="mx-auto"></FaClock>
                    </div>
                    <div className=" bg-[#F3F3F3] h-[120px] mx-2 p-5">
                        <h3 className="font-semibold">WORKING HOURS</h3>
                        <p>Mon - Fri: 08:00 - 22:00 <br />
Sat -                       Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                
            </div>
            <SectionTitle subHead="---Send Us a Message---" head="CONTACT FORM"></SectionTitle>
            <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full my-10 text-center px-5">
                
                <div className='flex flex-col md:flex-row gap-4 my-4'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Name*</span>
                        
                    </label>
                    <input  type="text" placeholder="Type Name" {...register("name", {required: true, maxLength: 80})} className="input input-bordered w-full " />
                    
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Email*</span>
                        
                    </label>
                    <input  type="text" placeholder="Type Email" {...register("email", {required: true, maxLength: 80})} className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Phone*</span>
                        
                    </label>
                    <input type="text" placeholder="Type your phone" {...register("phone", {required: true})}placeholder="Type here" className="input input-bordered w-full " />
                    
                </div>
                </div>
                <div className="form-control mb-5">
                <label className="label">
                    <span className="label-text font-semibold">Your Message*</span>
                    
                </label>
                <textarea className="textarea textarea-bordered h-28" {...register("recipe", {required: true, maxLength: 180})}placeholder="Type Messasges"></textarea>
                
                </div>
                
                <button  className="btn btn-success text-center text-white font-semibold"><input type="submit" value="Send Message  " /> <BsFillSendFill></BsFillSendFill></button>
            </form>
            </div>
        </div>
    );
};

export default ContactUs;