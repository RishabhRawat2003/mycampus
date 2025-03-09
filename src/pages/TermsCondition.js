import React, { useEffect } from "react";

const TermsAndConditions = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-28 md:py-40 flex justify-center items-center p-4">
      <div className="max-w-5xl bg-white p-6 rounded-lg shadow-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Terms & Conditions</h1>
        <div className="space-y-4 text-gray-700">
          <h2 className="text-lg font-semibold">General Terms</h2>
          <p><strong>1. Age Requirement:</strong> Participants under 18 must be accompanied by a guardian or provide a signed parental consent form.</p>
          <p><strong>2. Behavior & Conduct:</strong> Any misconduct, intoxication, or disruptive behavior will lead to immediate removal from the trip without a refund.</p>
          <p><strong>3. Adherence to Schedule:</strong> Participants must follow the itinerary and trip leader’s instructions. Late arrivals may result in missing activities without compensation.</p>
          <p><strong>4. Fitness & Medical Conditions:</strong> Participants should assess their physical fitness before joining. Medical conditions must be disclosed at the time of booking.</p>
          <p><strong>5. Personal Belongings:</strong> My Campus Safari is not responsible for lost, stolen, or damaged personal belongings.</p>
          
          <h2 className="text-lg font-semibold">Safety & Compliance</h2>
          <p><strong>6. Trip Leader Authority:</strong> All participants must follow the trip leader’s decisions for safety and logistics.</p>
          <p><strong>7. Adventure & Risk Acknowledgment:</strong> Participants joining adventure activities (rafting, trekking, etc.) do so at their own risk.</p>
          <p><strong>8. Legal Compliance:</strong> All participants must comply with local laws and cultural norms.</p>
          <p><strong>9. Environmental Responsibility:</strong> Littering, harming wildlife, or damaging heritage sites is strictly prohibited.</p>
          
          <h2 className="text-lg font-semibold">Trip Modifications & Cancellations</h2>
          <p><strong>10. Itinerary Changes:</strong> My Campus Safari reserves the right to modify the itinerary due to unforeseen circumstances. No refunds will be given, but alternate arrangements may be offered.</p>
          <p><strong>11. Minimum Group Requirement:</strong> If a trip doesn’t meet the required group size, participants will be offered an alternative trip or a refund.</p>
          <p><strong>12. Force Majeure Clause:</strong> My Campus Safari is not liable for delays or cancellations due to natural disasters, strikes, or political unrest.</p>
          <p><strong>13. Additional Costs for Modifications:</strong> If modifications to the trip are required due to weather, road closures, or government restrictions, they will be subject to availability, and any extra costs will be borne by the participants. My Campus Safari will not be responsible for providing any concessions or discounts in such cases.</p>
          
          <h2 className="text-lg font-semibold">Photography & Media Usage</h2>
          <p><strong>14. Use of Photos & Videos:</strong> My Campus Safari may capture photos/videos for promotional purposes. If a participant does not wish to be featured, they must inform the team in advance.</p>
          <p><strong>15. Personal Photography:</strong> Participants can take photos, but drone usage may be restricted by local regulations.</p>
          
          <h2 className="text-lg font-semibold">Agreement & Acknowledgment</h2>
          <p><strong>16. Booking Confirmation:</strong> By booking a trip, participants confirm they have read, understood, and agreed to all terms & conditions.</p>
          <p><strong>17. Liability Disclaimer:</strong> My Campus Safari is not liable for injuries, accidents, or losses incurred during the trip. Participants join at their own risk.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
