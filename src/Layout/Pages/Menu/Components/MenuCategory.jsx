import { Link } from "react-router-dom";
import Menu from "../../../../Components/Menu/Menu";


const MenuCategory = ({items, title}) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10 mt-12">
                {items.map(menu => <Menu key={menu._id} menu={menu}></Menu>)}
            </div>
            <div className="text-center py-6">
            <Link to={`/order/${title}`}><button className="btn btn-outline btn-info border-0 border-b-4">View Full Menu</button></Link>
            </div>
            
        </div>
    );
};

export default MenuCategory;