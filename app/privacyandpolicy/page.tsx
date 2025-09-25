const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-4 py-6 md:p-[60px] gap-6 md:gap-[60px] text-black max-w-full bg-[#FBF9F4]">
        <h1 className="text-center text-[40px] font-bold">Privacy Policy</h1>
      </div>

      {/* second section */}
      <div className="flex flex-col p-4 py-6 md:p-[60px] gap-5 text-black max-w-full">
        <h1>
          <span className="font-semibold">Last Updated:</span> 12 September 2025
        </h1>
        <p>
          At RC Pulses, we value your trust and are committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard your information
          when you visit{' '}
          <a
            href="https://www.rcpluses.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            www.rcpluses.com
          </a>
          .
        </p>

        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <h2 className="font-bold text-lg">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-semibold">Personal Information:</span> Name, email, contact number,
                billing & shipping address, payment details.
              </li>
              <li>
                <span className="font-semibold">Business Information:</span> GST details, company name,
                registration details (for B2B buyers).
              </li>
              <li>
                <span className="font-semibold">Technical Information:</span> Browser type, device, IP address,
                cookies, and browsing history.
              </li>
              <li>
                <span className="font-semibold">Transactional Information:</span> Order history, invoices,
                delivery records.
              </li>
            </ul>
          </li>

          <li>
            <h2 className="font-bold text-lg">How We Use Your Information</h2>
            <p>We use collected data to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process, confirm, and deliver your orders.</li>
              <li>Improve website functionality and customer experience.</li>
              <li>Provide updates about new products, promotions, and offers (with your consent).</li>
              <li>Handle complaints, customer support, and after-sales service.</li>
              <li>Fulfill legal, regulatory, and tax obligations.</li>
            </ul>
          </li>

          <li>
            <h2 className="font-bold text-lg">Sharing of Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Information may be shared with trusted third parties (logistics providers, payment processors,
                IT service providers) strictly for operational purposes.
              </li>
              <li>We do not sell or rent your personal information to marketers.</li>
              <li>
                Disclosure may occur if required by law, regulatory authorities, or legal proceedings.
              </li>
            </ul>
          </li>

          <li>
            <h2 className="font-bold text-lg">Data Security</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We employ encryption, firewalls, and secure servers to protect your data.</li>
              <li>
                While we strive to safeguard information, no system is completely secure; users are encouraged
                to protect their login credentials.
              </li>
            </ul>
          </li>

          <li>
            <h2 className="font-bold text-lg">Cookies & Tracking Technologies</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Our Site uses cookies for analytics, personalization, and order tracking.
              </li>
              <li>
                You may disable cookies in your browser, but some website features may not work properly.
              </li>
            </ul>
          </li>

          <li>
            <h2 className="font-bold text-lg">International Data Transfers</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>For international customers, your data may be processed in India.</li>
              <li>
                By using our website, you consent to such transfer and storage of data in compliance with
                applicable laws.
              </li>
            </ul>
          </li>

          <li>
            <h2 className="font-bold text-lg">Your Rights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-semibold">Access &amp; Correction:</span> Request details or corrections to your
                personal data.
              </li>
              <li>
                <span className="font-semibold">Withdrawal of Consent:</span> Opt-out of promotional communications anytime.
              </li>
              <li>
                <span className="font-semibold">Deletion:</span> Request deletion of your account or stored data (subject to
                legal retention requirements).
              </li>
            </ul>
          </li>

          <li>
            <h2 className="font-bold text-lg">Policy Updates</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                This Privacy Policy may be revised periodically. Updates will be reflected on this page with a
                new “Last Updated” date.
              </li>
              <li>
                Continued use of the Site after updates constitutes acceptance of revised terms.
              </li>
            </ul>
          </li>

          <li>
            <h2 className="font-bold text-lg">Contact for Privacy Concerns</h2>
            <p>For privacy-related queries or grievances:</p>
            <h3 className="font-bold">Grievance Officer – RC Pulses</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-semibold">Email:</span> rcpulses.official@gmail.com
              </li>
              <li>
                <span className="font-semibold">Phone:</span> + 91 9425326237, + 91 9425326237
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
  