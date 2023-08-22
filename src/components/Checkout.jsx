import { useState } from "react";
import CustomarInfo from "./CustomarInfo";
import PaymentInfo from "./PaymentInfo";
import { FaShoppingCart, FaAngleDown } from "react-icons/fa";

const Checkout = () => {
    const [showCart, setShowCart] = useState(false);
console.log(showCart);
    const handleMiniCart = () => {
        setShowCart(!showCart);
    }
    return (
        <div className="mt-0">
            <div className="md:hidden bg-gray-200 rounded-sm mb-2">
                <div onClick={handleMiniCart} className="flex justify-between items-center p-3">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Show Products on Cart</span>
                        <span className="text-xl mt-1"><FaAngleDown /></span>
                    </div>
                    <span className="bg-gray-100 rounded-md flex items-center gap-1 p-1"><FaShoppingCart />($100)</span>
                </div>
            </div>
            <div className="md:grid md:grid-cols-2 gap-10 m-5 mt-0 relative ">
                <div>
                    <CustomarInfo></CustomarInfo>
                </div>
                <div className={`${showCart ? 'block' : 'hidden'} absolute top-0 right-0`}>
                    <PaymentInfo></PaymentInfo>
                </div>
                <div className="hidden md:block">
                    <PaymentInfo></PaymentInfo>
                </div>
            </div>
        </div>
    );
};

export default Checkout;