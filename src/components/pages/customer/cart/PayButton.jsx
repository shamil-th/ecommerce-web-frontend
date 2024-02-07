import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {payment} from '../../../../features/stripe/stripeSlice';

const PayButton = (items) => {
const link = useSelector((state) => state.stripe.stripeLink);
    const userId = localStorage.getItem("id");

    useEffect(() => {
        if(link.url){
            window.location.href = link.url;
        }
    },[link])

    let dispatch = useDispatch();
    const checkout = () => {
        console.log('pay',items)
        const data = {
            items,
            userId
        }
        dispatch(payment(data));
        if(link){
            console.log("link",link);
            // window.location.href = link;
        }
    }
  return (
    <>
    <button onClick={()=>checkout()}>Check Out</button>
    </>
  )
}

export default PayButton