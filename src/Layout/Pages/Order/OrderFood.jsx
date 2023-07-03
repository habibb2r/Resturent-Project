import Cover from "../Menu/Components/Cover";
import coverimg from '../../../assets/shop/banner2.jpg'
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import { useParams } from "react-router-dom";
import OrderTab from "../../../Components/FoodCard/OrderTab";


const OrderFood = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabindex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const drinks = menu.filter(item => item.category === 'drinks');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const desserts = menu.filter(item => item.category === 'dessert');
    return (
        <div>
            <Helmet>
                <title>Cookie-Boss | Our Shop</title>
            </Helmet>
            <Cover bgImg={coverimg} head="OUR SHOP" subHead="Would you like to try a dish?"></Cover>
            <div className="tabwork text-center">
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                <TabList>
                    
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                    
                </TabList>
                <TabPanel>
                   <OrderTab items={salads}></OrderTab>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={pizzas}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;