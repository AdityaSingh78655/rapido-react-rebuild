import React from 'react';
import BackButton from './BackButton';

const RefundPolicy = () => {
  return (
    
    <section id="refund-policy" className="py-10 bg-white text-gray-800">
     <BackButton /> 
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Refund <span className="text-gradient">Policy</span>
        </h1>
        {/* <p className="text-center text-sm text-gray-500 mb-10">Effective Date: July 6, 2025</p> */}

        <div className="space-y-8 text-justify leading-7">
          <p>
            This Refund Policy outlines the conditions under which Biro Cabs issues refunds for cab bookings and related services. 
            By using our platform, you agree to this policy.
          </p>

          <h2 className="text-2xl font-semibold">1. Refund Eligibility</h2>
          <p>
            Refunds may be issued under the following conditions:
          </p>
          <ul className="list-disc pl-6">
            <li>The driver cancels the ride without valid reason.</li>
            <li>You are charged for a ride that was not completed.</li>
            <li>There are technical errors resulting in double booking or overcharging.</li>
            <li>The cab does not arrive and customer support confirms failure in service delivery.</li>
          </ul>

          <h2 className="text-2xl font-semibold">2. Cancellation Refunds</h2>
          <p>
            If a user cancels a ride:
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Before driver allocation:</strong> Full refund issued automatically.</li>
            <li><strong>After driver allocation:</strong> Partial refund may apply depending on distance/time driver has traveled.</li>
            <li><strong>After ride start:</strong> No refund applicable unless there is a service failure.</li>
          </ul>

          <h2 className="text-2xl font-semibold">3. Refund Process</h2>
          <p>
            All eligible refunds will be processed within <strong>7–10 business days</strong> to the original payment method.
            The exact time may vary depending on your bank or payment provider.
          </p>

          <h2 className="text-2xl font-semibold">4. Non-Refundable Situations</h2>
          <ul className="list-disc pl-6">
            <li>Change of mind after completing the ride.</li>
            <li>Providing incorrect pickup or drop-off location.</li>
            <li>Misbehavior, misconduct, or violation of terms by the rider.</li>
            <li>Delays caused by traffic or unforeseen road conditions.</li>
          </ul>

          <h2 className="text-2xl font-semibold">5. Dispute Resolution</h2>
          <p>
            If you believe a refund was wrongly denied, you may raise a dispute within 48 hours of the ride completion.
            Our support team will investigate and respond within 3 working days.
          </p>

          <h2 className="text-2xl font-semibold">6. Contact Us</h2>
          <p>If you have any questions or concerns about our refund policy, contact us at:</p>
          <ul className="list-disc pl-6">
            <li>Email: biroindiacabs@gmail.com</li>
            <li>Phone: +91 99992 99625</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
