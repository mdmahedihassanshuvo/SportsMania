import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const CheckoutForm = ({ item }) => {

    const { price, name, image, _id, classId } = item?.[0] || {}
    console.log(parseInt(price))
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("");
    const [cardError, setCardError] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price: parseInt(price) })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        console.log('card', card)

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message)
        }
        else {
            setCardError('')
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log(paymentIntent)

        setProcessing(false)

        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                classItemId: _id,
                name: name,
                image: image,
                date: new Date(),

            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data.result);
                    if (res.data.result.insertedId) {
                        console.log('success payment')
                        axiosSecure.patch(`/addedClasses?id=${classId}`)
                            .then(res => {
                                console.log(res.data);
                                <Navigate to='/'/>
                            })
                    }
                })
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn bg-orange-600 btn-sm my-5" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-center text-red-600 my-5">{cardError}</p>}
            {transactionId && <p className="text-center text-green-600 my-5">Payment successful Transaction id: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;