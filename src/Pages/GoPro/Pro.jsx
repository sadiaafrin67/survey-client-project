import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Pro = () => {
    return (
        <div className="mt-10 mb-10">
            <h2 className="text-center text-2xl text-[#2a5298] font-bold">Become a Pro User</h2>
            <p className="text-center mt-3 text-base font-semibold text-gray-600 mb-9">Pay monthly <span className="text-red-500 font-bold text-lg">$99</span> dollars for become a pro user</p>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom></CheckOutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Pro;