
import Banner from "./Home/Banner";
import Category from "./Home/Category/Category";
import Featured from "./Home/Featured/Featured";
import PopularMenu from "./Home/PopularMenu/PopularMenu";
import Testimonials from "./Home/Testimonials/Testimonials";


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;