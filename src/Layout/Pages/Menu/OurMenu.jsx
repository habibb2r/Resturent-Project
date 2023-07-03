import { Helmet } from "react-helmet-async";
import Cover from "./Components/Cover";
import Parallex from "./Components/Parallex";
import bgpiz from '../../../assets/menu/pizza-bg.jpg'
import bgsal from '../../../assets/menu/salad-bg.jpg'
import bgsoup from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "./Components/MenuCategory";
import coverImg from '../../../assets/menu/banner3.jpg'


const OurMenu = () => {
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === 'offered');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Cookie-Boss | Menu</title>
            </Helmet>
            <Cover bgImg={coverImg} head="OUR MENU" subHead="Would you like to try a dish?"></Cover>

            {/* Offered */}
            <SectionTitle subHead="---Don't miss---" head="TODAY'S OFFER"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            
            {/* Pizza */}
            <Parallex bgimg={bgpiz} bgColor={'bg-[#4d0026]'}  head={'Pizza'}
            subHead={' Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima, incidunt odit dolore ullam, nihil et pariatur labore minus provident quia explicabo distinctio vel enim magnam quam! Sunt, ipsa ullam?'}
            ></Parallex>
            <MenuCategory items={pizzas} title="pizza"></MenuCategory>

            {/* Salad */}
            <Parallex bgimg={bgsal} bgColor={'bg-[#4d0026]'} head={'Salad'}
            subHead={' Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima, incidunt odit dolore ullam, nihil et pariatur labore minus provident quia explicabo distinctio vel enim magnam quam! Sunt, ipsa ullam?'}
            ></Parallex>
            <MenuCategory items={salads} title="salad"></MenuCategory>

            {/* Soup */}
            <Parallex bgimg={bgsoup} bgColor={'bg-[#4d0026]'} head={'Soup'}
            subHead={' Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima, incidunt odit dolore ullam, nihil et pariatur labore minus provident quia explicabo distinctio vel enim magnam quam! Sunt, ipsa ullam?'}
            ></Parallex>
            <MenuCategory items={soups} title="soup"></MenuCategory>
        </div>
    );
};

export default OurMenu;