import React, { useEffect } from "react";

const PaymentPolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-auto pt-28 md:pt-40 flex justify-center items-center p-4">
      <div className="max-w-5xl bg-white p-6 rounded-lg shadow-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Payment Policy</h1>
        <div className="space-y-4 text-gray-700">
          <h2 className="text-lg font-semibold">Booking Confirmation</h2>
          <ul className="list-disc list-inside">
            <li>A 50% advance payment is required to confirm the booking.</li>
            <li>The remaining 50% balance must be paid at least a day before departure.</li>
          </ul>

          <h2 className="text-lg font-semibold">Last-Minute Bookings</h2>
          <ul className="list-disc list-inside">
            <li>For bookings made less than 7 days before departure, full payment is required at the time of booking.</li>
          </ul>

          <h2 className="text-lg font-semibold">Payment Methods</h2>
          <ul className="list-disc list-inside">
            <li>Payments can be made via UPI, bank transfer, credit/debit card, or digital wallets.</li>
          </ul>

          <h2 className="text-lg font-semibold">Non-Payment Policy</h2>
          <ul className="list-disc list-inside">
            <li>Failure to make the full payment by the due date may result in cancellation of the booking without a refund.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentPolicy;
