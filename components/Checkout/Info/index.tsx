/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from "react";
import Input from "../../common/Input";
import { CUSTOMER_INFO_FIELD, PAYMENT_TYPE } from "@/constant";
import { CUSTOMER_INFO_DATA } from "@/interface";


function CheckoutInfo() {
  const [customerInfo, setCustomerInfo] = useState({
    email: '',
    name: '',
    phone: '',
    address: ''
  })
  const [paymentInfo, setPaymentInfo] = useState({
    type: 'Banking',
  })

  const handleUpdateCustomerInfo = (data: CUSTOMER_INFO_DATA) => {
    setCustomerInfo(data);
  }

  const handleUpdatePaymentInfo = (data) => {
    setPaymentInfo(data)
  }
  return (
    <div className="w-full md:w-3/5 bg-black h-full text-white p-4 md:p-8">
      <div className="">
        <img
          className="w-[50%] m-auto"
          src="https://bizweb.dktcdn.net/100/440/789/themes/840800/assets/checkout_logo.png?1708848964622"
          alt=""
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex w-full lg:w-2/3 flex-col justify-between gap-2">
          <div className="flex w-full justify-between">
            <p className="font-bold">Order Detail</p>
            <p className="text-green-700">Log in</p>
          </div>
          <div className="flex flex-col gap-y-3">
            {CUSTOMER_INFO_FIELD.map(itemName => (<Input key={itemName} name={itemName} customerInfo={customerInfo} updateValue={handleUpdateCustomerInfo} />))}
          </div>
        </div>
        <div className="flex w-full lg:w-1/3 flex-col p-4 gap-y-2">
          <div>
            Payment
          </div>
          <div className="flex flex-col gap-2">
            {PAYMENT_TYPE.map(itemName => (<div key={itemName}><div className="px-4 py-2 flex justify-between items-center gap-x-4 bg-white text-black rounded">
              <div className="flex gap-x-2">
                <Input name="type" type="radio" data={paymentInfo} updateValue={handleUpdatePaymentInfo} />
                <span>{itemName}</span>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              </div>
            </div></div>
            ))}
          </div>
        </div>
      </div>
      <button className="bg-white p-2 hover:font-bold text-black" onClick={() => console.log(paymentInfo)}>Get info</button>
    </div>
  );
}

export default CheckoutInfo;
