import { useForm } from 'react-hook-form';
import '../components/custom.css'
import { useEffect, useState } from "react";


const CustomarInfo = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [countries, setCountries] = useState([]);
    const [shippingData, setShippingData] = useState({name: 'shipping'});
    const [billingData, setBillingData] = useState({name: 'billing'});
    const [billingDetails, setBillingDetails] = useState(shippingData);
   console.log(billingDetails);


    
    
    // const getShippingDetails = () => {
    //     const shippingData = {}
    //     setShippingData(shippingData);
    // }
    // const getBillingDetails = () => { 
    //     const billingData = {}
    //     setBillingData(billingData);
    // }



    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        if (isChecked) {
            setBillingDetails(billingData)
        } else {
            setBillingDetails(shippingData)
        }
    };

    useEffect(()=>{

        fetch('country.json')
        .then(res => res.json())
        .then(data => setCountries(data))
        
    },[])






        return (
            <div className='space-y-5'>
            {/* shipping address */}
            <div className='border-2 p-5 rounded-lg'>
                <h2 className='text-3xl my-3 font-semibold'>Shipping Details</h2>
                <form className="space-y-3">
                    <div className="">
                        <label className="block e">Email</label>
                        <input className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="">
                        <label className="block">Country</label>
                        <select name="country" className='w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg'>
                            {
                                countries.map(country => <option value=''><span className="short text-red-600">{country.countryShort}</span> <span>{country.countryName}</span></option>)
                            }
                        </select>
                    </div>
                    <div className='md:grid md:grid-cols-2 gap-x-3'>
                        <div className="">
                            <label className="block">First name</label>
                            <input className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="firstname" placeholder="First name" />
                        </div>
                        <div className="">
                            <label className="block">Last name</label>
                            <input className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="lastname" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="">
                        <label className="block">Address</label>
                        <input className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="address" placeholder="Address" />
                    </div>

                    <div className='md:grid md:grid-cols-2 gap-x-3'>
                        <div className="">
                            <label className="block">Twon</label>
                            <input className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="twon" placeholder="Twon" />
                        </div>
                        <div className="">
                            <label className="block">ZIP</label>
                            <input className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="number" name="zip" placeholder="ZIP" />
                        </div>
                    </div>
                    <div className="">
                        <label className="block">Phone</label>
                        <input className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="tel" name="phone" placeholder="Phone" />                </div>
                </form>
            </div>




            {/* billing details */}
            <div className='border-2 p-5 rounded-lg'>
                <h2 className='text-3xl my-3 font-semibold'>Billing Details</h2>
                {/* checkbox */}
                <div className='space-x-2'>
                    <input checked={isChecked} onChange={handleCheckboxChange} className='inline' id='check' name='check' type="checkbox" />
                    <label className='cursor-pointer text-xl font-semibold' htmlFor="check">Set shipping info as Billing info</label>
                </div>
                {
                    isChecked ||
                    <form className="space-y-3">
                        <div className='md:grid md:grid-cols-2 gap-x-3'>
                            <div className="">
                                <label className="block">First name</label>
                                <input className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="firstname" placeholder="First name" />
                            </div>
                            <div className="">
                                <label className="block">Last name</label>
                                <input className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="lastname" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="">
                            <label className="block">Address</label>
                            <input className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="address" placeholder="Address" />
                        </div>

                        <div className='md:grid md:grid-cols-2 gap-x-3'>
                            <div className="">
                                <label className="block">Twon</label>
                                <input className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="twon" placeholder="Twon" />
                            </div>
                            <div className="">
                                <label className="block">ZIP</label>
                                <input className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="number" name="zip" placeholder="ZIP" />
                            </div>
                        </div>
                        <div className="">
                            <label className="block">Country</label>
                            <select name="" className='w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg'>
                                {
                                    countries.map(country => <option value=''><span className="short text-red-600">{country.countryShort}</span> <span>{country.countryName}</span></option>)
                                }
                            </select>
                        </div>
                    </form>
                }
            </div>
        </div>
    );
};

export default CustomarInfo;