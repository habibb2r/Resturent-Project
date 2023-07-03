
import { Helmet } from "react-helmet-async";
import Advertize from "./Home/Advertize/Advertize";
import Banner from "./Home/Banner";
import Category from "./Home/Category/Category";
import CallUs from "./Home/Contact/CallUs";
import Featured from "./Home/Featured/Featured";
import PopularMenu from "./Home/PopularMenu/PopularMenu";
import Testimonials from "./Home/Testimonials/Testimonials";


const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Cookie-Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Advertize></Advertize>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;