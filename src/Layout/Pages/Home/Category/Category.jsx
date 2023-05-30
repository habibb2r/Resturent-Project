import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
// import "./styles.css";
import { FreeMode, Pagination } from "swiper";
import img1 from '../../../../assets/home/slide1.jpg'
import img2 from '../../../../assets/home/slide2.jpg'
import img3 from '../../../../assets/home/slide3.jpg'
import img4 from '../../../../assets/home/slide4.jpg'
import img5 from '../../../../assets/home/slide5.jpg'
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const Category = () => {
    return (
       <section>
        <SectionTitle 
                subHead={"From 11.00 am to 10.00 pm"}
                head = {"Order Online"}>
        </SectionTitle>
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide> <img src={img1} alt="" /> <h3 className="text-4xl uppercase text-center text-white -mt-16">Salads</h3></SwiperSlide>
        <SwiperSlide> <img src={img2} alt="" /> <h3 className="text-4xl uppercase text-center text-white -mt-16">Pizza</h3></SwiperSlide>
        <SwiperSlide> <img src={img3} alt="" /> <h3 className="text-4xl uppercase text-center text-white -mt-16">Soups</h3></SwiperSlide>
        <SwiperSlide> <img src={img4} alt="" /> <h3 className="text-4xl uppercase text-center text-white -mt-16">Deserts</h3></SwiperSlide>
        <SwiperSlide> <img src={img5} alt="" /> <h3 className="text-4xl uppercase text-center text-white -mt-16">Salads</h3></SwiperSlide>
        
      </Swiper>
       </section>
    );
};

export default Category;