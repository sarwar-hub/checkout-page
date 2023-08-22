import { useEffect, useState } from "react";
import CartItem from "./CartItem";

const PaymentInfo = () => {

    const [cartItems, setCartItems] = useState([]);

    // load cart items
    useEffect(()=>{
        fetch('cart.json')
        .then(res=>res.json())
        .then(data=>setCartItems(data))
    }, [])

    return (
        <div className="border-2 p-5 rounded-lg">
            <div className="p-3 bg-gray-100 rounded-lg">
                {
                    cartItems.map(item=><CartItem item={item} key={item.id}></CartItem>)
                }
                <div className="flex gap-5">
                    <input className="py-2 px-4 rounded-lg outline-2 outline-slate-500 w-3/4" type="text" />
                    <button className="py-2 px-4 rounded-lg border-2 border-slate-300 transition md:font-semibold hover:border-slate-700 w-1/4">Get Off</button>
                </div>
            </div>
            <div className="text-xl flex justify-between p-3 bg-gray-100 mt-2 rounded-md">
                <h4 className="font-semibold">Sub Total</h4>
                <span className="font-semibold">${100}</span>
            </div>
            <div></div>
        </div>
    );
};

export default PaymentInfo;