
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

import MenuCategory from "../../Menu/Components/MenuCategory";
import useMenu from "../../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section className="mb-12">
            <SectionTitle 
            head='From Our Menu'
            subHead='Popular Items'>

            </SectionTitle>

            <MenuCategory items={popular}></MenuCategory>
        </section>
    );
};

export default PopularMenu;