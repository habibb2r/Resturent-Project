import FoodCard from "./FoodCard";


const OrderTab = ({items}) => {
    return (
       
             <div className= "grid md:grid-cols-3 gap-4 p-4">
                    {
                        items.map(item => <FoodCard 
                        key={item._id}
                        item={item}
                        ></FoodCard>)
                    }
             </div>
        
    );
};

export default OrderTab;