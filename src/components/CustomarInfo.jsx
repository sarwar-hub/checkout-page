import { useForm } from 'react-hook-form';
import '../components/custom.css'
import { useEffect, useState } from "react";


const CustomarInfo = () => {

    // checkbox status and country data
    const [isChecked, setIsChecked] = useState(true);
    const [countries, setCountries] = useState([]);

    // get shipping data
    const [shippingData, setShippingData] = useState({
        email: '',
        country: '',
        firstname: '',
        lastname: '',
        address: '',
        town: '',
        zip: '',
        phone: '',
    });
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };





    // get billing data
    const [billingData, setBillingData] = useState({
        country: '',
        firstname: '',
        lastname: '',
        address: '',
        town: '',
        zip: '',
    });
 

    const handleChange2 = (e) => {
        const { name, value } = e.target;
        setBillingData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };




    

    // billing details
    const [billingDetails, setBillingDetails] = useState(shippingData);


    // conditional data for billing details
    useEffect(() => {
        if (isChecked) {
            setBillingDetails(shippingData)
        } else {
            setBillingDetails(billingData)
        }
    }, [isChecked, shippingData])

    // conditional checkbox for billing details
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };


    // load countries
    useEffect(() => {
        fetch('country.json')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])






    return (
        <div className='space-y-5'>
            {/* shipping address */}
            <div className='border-2 p-5 rounded-lg'>
                <h2 className='text-3xl my-3 font-semibold'>Shipping Details</h2>
                <form className="space-y-3">
                    <div className="">
                        <label className="block e">Email</label>
                        <input onChange={handleChange} className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="">
                        <label className="block">Country</label>
                        <select onChange={handleChange} name="country" className='w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg'>
                            {
                                countries.map(country => <option value={country.countryName}><span className="short text-red-600">{country.countryShort}</span> <span>{country.countryName}</span></option>)
                            }
                        </select>
                    </div>
                    <div className='md:grid md:grid-cols-2 gap-x-3'>
                        <div className="">
                            <label className="block">First name</label>
                            <input onChange={handleChange} className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="firstname" placeholder="First name" />
                        </div>
                        <div className="">
                            <label className="block">Last name</label>
                            <input onChange={handleChange} className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="lastname" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="">
                        <label className="block">Address</label>
                        <input onChange={handleChange} className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="address" placeholder="Address" />
                    </div>

                    <div className='md:grid md:grid-cols-2 gap-x-3'>
                        <div className="">
                            <label className="block">Town</label>
                            <input onChange={handleChange} className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="town" placeholder="Town" />
                        </div>
                        <div className="">
                            <label className="block">ZIP</label>
                            <input onChange={handleChange} className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="number" name="zip" placeholder="ZIP" />
                        </div>
                    </div>
                    <div className="">
                        <label className="block">Phone</label>
                        <input onChange={handleChange} className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="tel" name="phone" placeholder="Phone" />                </div>
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
                                <input onChange={handleChange2} className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="firstname" placeholder="First name" />
                            </div>
                            <div className="">
                                <label className="block">Last name</label>
                                <input onChange={handleChange2} className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="lastname" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="">
                            <label className="block">Address</label>
                            <input onChange={handleChange2} className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="address" placeholder="Address" />
                        </div>

                        <div className='md:grid md:grid-cols-2 gap-x-3'>
                            <div className="">
                                <label className="block">Twon</label>
                                <input onChange={handleChange2} className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="text" name="twon" placeholder="Twon" />
                            </div>
                            <div className="">
                                <label className="block">ZIP</label>
                                <input onChange={handleChange2} className="w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg" type="number" name="zip" placeholder="ZIP" />
                            </div>
                        </div>
                        <div className="">
                            <label className="block">Country</label>
                            <select onChange={handleChange2} name="" className='w-full outline-2 outline-slate-500 bg-gray-100 border-[1px] border-gray-200 p-2 rounded-lg'>
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