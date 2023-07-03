import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../../Components/FoodCard/useCart";

//TODO : provide publish key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionTitle
            head='Payment' subHead='Make your payment'></SectionTitle>
            
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} cart={cart}/>
            </Elements>
        </div>
    );
};

export default Payment;