import React, { useEffect } from "react";

const CancellationRefundPolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-auto pt-28 md:pt-40 flex justify-center items-center p-4">
      <div className="max-w-5xl bg-white p-6 rounded-lg shadow-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Cancellation & Refund Policy</h1>
        <div className="space-y-4 text-gray-700">
          <h2 className="text-lg font-semibold">Cancellation Charges</h2>
          <ul className="list-disc list-inside">
            <li>15+ days before departure: 90% refund</li>
            <li>7–14 days before departure: 50% refund</li>
            <li>Less than 7 days before departure: No refund</li>
            <li>No-show or early departure: No refund</li>
          </ul>

          <h2 className="text-lg font-semibold">Trip Modifications & Rescheduling</h2>
          <ul className="list-disc list-inside">
            <li>Switching to another trip (subject to availability) is allowed if requested at least 10 days prior to departure.</li>
            <li>
              If a trip is affected due to weather, safety concerns, or government restrictions, My Campus Safari will offer an alternative itinerary or rescheduling at its discretion. Refunds will not be applicable in such cases.
            </li>
          </ul>

          <h2 className="text-lg font-semibold">Refund Processing</h2>
          <ul className="list-disc list-inside">
            <li>Refunds (if applicable) will be processed within 7–10 working days via the original payment method.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
