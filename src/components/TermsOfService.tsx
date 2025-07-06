import React from 'react';

const TermsOfService = () => {
  return (
    <section id="terms-of-service" className="py-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          Terms of <span className="text-gradient">Service</span>
        </h1>
        <p className="text-center text-sm text-gray-500 mb-10">Effective Date: July 6, 2025</p>

        <div className="space-y-8 text-justify leading-7">
          <p>
            These Terms of Service ("Terms") govern your use of the Biro Cabs platform, including our mobile application, and any associated services ("Service") provided by Biro Cabs. By accessing or using the Service, 
            you agree to comply with and be bound by these Terms.
          </p>

          <h2 className="text-2xl font-semibold">1. Eligibility</h2>
          <p>
            You must be at least 18 years old and capable of entering into a legally binding agreement to use our services. 
            By using Biro Cabs, you represent and warrant that you meet these eligibility requirements.
          </p>

          <h2 className="text-2xl font-semibold">2. Account Registration</h2>
          <p>
            To use certain features, you may be required to create an account. You agree to provide accurate and complete
            information and to keep your login credentials secure. You are responsible for all activity that occurs under
            your account.
          </p>

          <h2 className="text-2xl font-semibold">3. Booking & Cancellation</h2>
          <p>
            Rides can be booked through the app. Cancellation policies may vary based on ride type. Biro Cabs
            reserves the right to impose cancellation fees or deny services in case of frequent cancellations or misuse.
          </p>

          <h2 className="text-2xl font-semibold">4. Fare & Payment</h2>
          <p>
            Fares are calculated based on distance, time, location, and demand. You agree to pay all applicable charges
            displayed at the time of booking. We accept digital payment methods, including UPI, credit/debit cards, and
            in-app wallets.
          </p>

          <h2 className="text-2xl font-semibold">5. User Responsibilities</h2>
          <ul className="list-disc pl-6">
            <li>Provide accurate pickup and drop locations.</li>
            <li>Maintain respectful behavior with drivers and other passengers.</li>
            <li>Do not misuse the app or engage in unlawful activity while using the service.</li>
            <li>Notify Biro Cabs immediately if you lose a personal item in a cab.</li>
          </ul>

          <h2 className="text-2xl font-semibold">6. Driver Conduct</h2>
          <p>
            All drivers on Biro Cabs are verified and trained. However, Biro Cabs is not responsible for any conduct
            outside the scope of the service. Any issues should be reported promptly via the app or email.
          </p>

          <h2 className="text-2xl font-semibold">7. Liability Disclaimer</h2>
          <p>
            Biro Cabs is not liable for delays, service interruptions, or third-party conduct. We do not guarantee ride
            availability at all times. Use of the service is at your own risk.
          </p>

          <h2 className="text-2xl font-semibold">8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the service at our sole discretion, without notice,
            for conduct that violates these Terms or is otherwise harmful to other users, drivers, or Biro Cabs.
          </p>

          <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of our service after changes means you accept the new terms.
            We will notify users of significant updates via the app or email.
          </p>

          <h2 className="text-2xl font-semibold">10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising
            under these Terms will be subject to the jurisdiction of the courts of Faridabad, Haryana.
          </p>

          <h2 className="text-2xl font-semibold">11. Contact Us</h2>
          <p>
            For questions about these Terms of Service, please contact us at:
          </p>
          <ul className="list-disc pl-6">
            <li>Email: biroindiacabs@gmail.com</li>
            <li>Phone: +91 99992 99625</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
