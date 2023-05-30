import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import Menu from "../../../../Components/Menu/Menu";


const PopularMenu = () => {
    const [menus, setMenu] = useState([])

    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popular = data.filter(item => item.category === 'popular');
            setMenu(popular)
        })
    })
    return (
        <section className="mb-12">
            <SectionTitle 
            head='From Our Menu'
            subHead='Popular Items'>

            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-10 mt-12">
                {menus.map(menu => <Menu key={menu._id} menu={menu}></Menu>)}
            </div>
        </section>
    );
};

export default PopularMenu;