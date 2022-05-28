import { useCallback } from "react";
import useRazorpay from "react-razorpay";

export default function App() {
    const Razorpay = useRazorpay();

    const handlePayment = useCallback(async () => {
        // const order = await createOrder(params);

        const options = {
            key: "rzp_test_D3W4p7Cxnhcr7W",
            amount: "105864",
            currency: "LKR",
            name: "DS_Product Store",
            description: "products",
            // order_id: order.id,
            handler: (res) => {
                console.log(res);
            },
            prefill: {
                name: "Janith Gamage",
                email: "janith1.ed@example.com",
                contact: "+94768523525",
            },
            //     notes: {
            //         address: "Razorpay Corporate Office",
            //     },
            //     theme: {
            //         color: "#3399cc",
            //     },
        };


        const rzpay = new Razorpay(options);
        rzpay.on("payment.success", function (response) {
            alert(response); 
        });

        rzpay.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        
        rzpay.open();
    }, [Razorpay]);

    return (
        <div className="App">
            <button onClick={handlePayment}>Click</button>
        </div>
    );
}