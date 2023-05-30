import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';


const Testimonials = () => {
    const [reviews, setReviews ] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data)) 
},[])
    
    return (
       <section className="my-20">
            <SectionTitle 
            subHead='What Our Client Say'
            head= 'Testimonials'>

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className=" m-24 flex flex-col items-center mx-24 my-16 text-center">
                        <Rating
                        style={{ maxWidth: 280 }}
                        value={review.rating}
                        readOnly
                        />
                        <div className="py-8 text-8xl">
                        <FaQuoteLeft ></FaQuoteLeft>
                        </div>
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
       </section>
    );
};

export default Testimonials;