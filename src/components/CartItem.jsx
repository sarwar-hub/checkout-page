
const CartItem = ({item}) => {

    return (
        <>
        <div className="flex">
            <div className="relative">
                <img className=" w-[60px] h-[60px] object-cover rounded-lg" src={item.imageUrl} alt="product" />
                <span className="absolute -top-3 -right-3 text-gray-100 text-xs bg-slate-600 py-1 px-2 rounded-lg">{item.quantity}</span>
            </div>
            <div className="flex-grow ml-5">
                <span className="md:font-semibold">{item.name}</span>
            </div>
            <div>
                <span>${parseFloat(item.price)*parseFloat(item.quantity)}</span>
            </div>
        </div> <hr className="my-5 border-gray-400" />
        </>
    );
};

export default CartItem;