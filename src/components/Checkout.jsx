import CustomarInfo from "./CustomarInfo";
import PaymentInfo from "./PaymentInfo";

const Checkout = () => {
    return (
        <div className="m-5">  
            <div className="md:grid md:grid-cols-2 gap-10">
                <div>
                    <CustomarInfo></CustomarInfo>
                </div>
                <div>
                    <PaymentInfo></PaymentInfo>
                </div>
            </div>
        </div>
    );
};

export default Checkout;