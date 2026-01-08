import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function BuySchoolPage() {
  // TODO: Replace with actual Tally form URL when ready
  const TALLY_SCHOOL_INVOICE_ENDPOINT = ""; // Add Tally form URL here

  const [schoolName, setSchoolName] = useState("");
  const [billingContactName, setBillingContactName] = useState("");
  const [billingEmail, setBillingEmail] = useState("");
  const [financeEmail, setFinanceEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [vatNumber, setVatNumber] = useState("");
  const [purchaseOrderNumber, setPurchaseOrderNumber] = useState("");
  const [schoolLicenceYear, setSchoolLicenceYear] = useState("");
  const [licenseAccepted, setLicenseAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!schoolName || !billingContactName || !billingEmail || !licenseAccepted) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (TALLY_SCHOOL_INVOICE_ENDPOINT) {
        const formData = new FormData();
        formData.append("schoolName", schoolName);
        formData.append("billingContactName", billingContactName);
        formData.append("billingEmail", billingEmail);
        if (financeEmail) formData.append("financeEmail", financeEmail);
        if (phoneNumber) formData.append("phoneNumber", phoneNumber);
        if (billingAddress) formData.append("billingAddress", billingAddress);
        if (vatNumber) formData.append("vatNumber", vatNumber);
        if (purchaseOrderNumber) formData.append("purchaseOrderNumber", purchaseOrderNumber);
        if (schoolLicenceYear) formData.append("schoolLicenceYear", schoolLicenceYear);

        // Hidden values to keep context with the submission
        formData.append("packageName", "School Licence");
        formData.append("annualPrice", "999");
        formData.append("submissionSource", "School invoice request");

        await fetch(TALLY_SCHOOL_INVOICE_ENDPOINT, {
          method: "POST",
          body: formData,
        });
      }
    } catch (error) {
      console.error("Error submitting school invoice request:", error);
      // Still redirect to thanks page for a smooth UX
    } finally {
      setIsSubmitting(false);
      navigate("/buy/school/thanks");
    }
  };

  return (
    <div className="min-h-screen bg-[#fef4e6] text-slate-900 overflow-x-hidden pt-24">
      <Header />

      {/* Main Content */}
      <div className="pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-[#16130F] sm:text-5xl mb-4">
              Request School Licence Invoice
            </h1>
            <p className="text-lg text-[#6B7280]">
              R999/year • Unlimited educators • One school
            </p>
          </div>

          {/* Process Overview */}
          <div className="mb-10 rounded-3xl bg-[#EAF9F7] border border-[#00827A]/20 p-8 shadow-xl">
            <h2 className="text-2xl font-extrabold text-[#16130F] mb-6">
              How It Works
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00827A] text-white flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-[#16130F] mb-1">Request Invoice</h3>
                  <p className="text-[#6B7280]">
                    Fill out the form below with your school's billing details. We'll send you a professional invoice.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00827A] text-white flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-[#16130F] mb-1">Receive Invoice</h3>
                  <p className="text-[#6B7280]">
                    We'll email your invoice (typically within 1-2 business days) with banking details and a unique payment reference.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00827A] text-white flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-[#16130F] mb-1">Make Payment</h3>
                  <p className="text-[#6B7280]">
                    Pay via EFT using the banking details on your invoice. Be sure to include the payment reference.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00827A] text-white flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-[#16130F] mb-1">Upload Proof of Payment</h3>
                  <p className="text-[#6B7280]">
                    Upload your proof of payment so we can confirm receipt and process your order.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00827A] text-white flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-[#16130F] mb-1">Receive Font Package</h3>
                  <p className="text-[#6B7280]">
                    Once payment is confirmed, we'll send you a download link with all Edu-Aid fonts and license documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-10 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/40 p-8 shadow-xl">
            <h2 className="text-2xl font-extrabold text-[#16130F] mb-4">
              What's Included
            </h2>
            <ul className="space-y-3 text-[#16130F]">
              {[
                "All Edu-Aid fonts for your school",
                "Unlimited educators at one school",
                "Internal sharing with staff allowed",
                "Print + digital distribution to enrolled learners",
                "Annual licence (renewable)",
                "Email support",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#00827A] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Note */}
          <div className="mb-10 rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6">
            <p className="text-sm text-[#6B7280] text-center">
              <strong className="text-[#16130F]">Timeline:</strong> Invoices are typically sent within 1-2 business days. 
              Delivery occurs after payment confirmation (usually within 1 business day of PoP receipt).
            </p>
          </div>

          {/* Native form posting to Tally */}
          <div className="rounded-3xl bg-white/80 backdrop-blur-sm border border-white/40 p-8 shadow-xl">
            <h2 className="text-2xl font-extrabold text-[#16130F] mb-6 text-center">
              Request Your Invoice
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Required */}
              <div>
                <label className="block text-sm font-semibold text-[#16130F] mb-2">
                  School Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  required
                  className="w-full rounded-xl px-4 py-3 border border-white/40 bg-white/80 backdrop-blur-sm text-[#16130F] focus:outline-none focus:ring-2 focus:ring-[#00827A]/40 focus:border-[#00827A] transition"
                  placeholder="e.g., Green Valley Primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#16130F] mb-2">
                    Billing Contact Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={billingContactName}
                    onChange={(e) => setBillingContactName(e.target.value)}
                    required
                    className="w-full rounded-xl px-4 py-3 border border-white/40 bg-white/80 backdrop-blur-sm text-[#16130F] focus:outline-none focus:ring-2 focus:ring-[#00827A]/40 focus:border-[#00827A] transition"
                    placeholder="Contact full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#16130F] mb-2">
                    Billing Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={billingEmail}
                    onChange={(e) => setBillingEmail(e.target.value)}
                    required
                    className="w-full rounded-xl px-4 py-3 border border-white/40 bg-white/80 backdrop-blur-sm text-[#16130F] focus:outline-none focus:ring-2 focus:ring-[#00827A]/40 focus:border-[#00827A] transition"
                    placeholder="billing@school.co.za"
                  />
                </div>
              </div>

              {/* Optional */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#16130F] mb-2">
                    Finance Email <span className="text-xs text-[#6B7280]">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={financeEmail}
                    onChange={(e) => setFinanceEmail(e.target.value)}
                    className="w-full rounded-xl px-4 py-3 border border-white/40 bg-white/80 backdrop-blur-sm text-[#16130F] focus:outline-none focus:ring-2 focus:ring-[#00827A]/40 focus:border-[#00827A] transition"
                    placeholder="finance@school.co.za"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#16130F] mb-2">
                    Phone Number <span className="text-xs text-[#6B7280]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full rounded-xl px-4 py-3 border border-white/40 bg-white/80 backdrop-blur-sm text-[#16130F] focus:outline-none focus:ring-2 focus:ring-[#00827A]/40 focus:border-[#00827A] transition"
                    placeholder="+27 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#16130F] mb-2">
                  Billing Address <span className="text-xs text-[#6B7280]">(Optional)</span>
                </label>
                <textarea
                  value={billingAddress}
                  onChange={(e) => setBillingAddress(e.target.value)}
                  rows={3}
                  className="w-full rounded-xl px-4 py-3 border border-white/40 bg-white/80 backdrop-blur-sm text-[#16130F] focus:outline-none focus:ring-2 focus:ring-[#00827A]/40 focus:border-[#00827A] transition"
                  placeholder="Street, City, Province, Postal Code"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#16130F] mb-2">
                    VAT Number <span className="text-xs text-[#6B7280]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={vatNumber}
                    onChange={(e) => setVatNumber(e.target.value)}
                    className="w-full rounded-xl px-4 py-3 border border-white/40 bg-white/80 backdrop-blur-sm text-[#16130F] focus:outline-none focus:ring-2 focus:ring-[#00827A]/40 focus:border-[#00827A] transition"
                    placeholder="VAT number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#16130F] mb-2">
                    Purchase Order <span className="text-xs text-[#6B7280]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={purchaseOrderNumber}
                    onChange={(e) => setPurchaseOrderNumber(e.target.value)}
                    className="w-full rounded-xl px-4 py-3 border border-white/40 bg-white/80 backdrop-blur-sm text-[#16130F] focus:outline-none focus:ring-2 focus:ring-[#00827A]/40 focus:border-[#00827A] transition"
                    placeholder="PO number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#16130F] mb-2">
                    Licence Year <span className="text-xs text-[#6B7280]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={schoolLicenceYear}
                    onChange={(e) => setSchoolLicenceYear(e.target.value)}
                    className="w-full rounded-xl px-4 py-3 border border-white/40 bg-white/80 backdrop-blur-sm text-[#16130F] focus:outline-none focus:ring-2 focus:ring-[#00827A]/40 focus:border-[#00827A] transition"
                    placeholder="e.g., 2026"
                  />
                </div>
              </div>

              {/* License acceptance */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="licenseAccepted"
                  checked={licenseAccepted}
                  onChange={(e) => setLicenseAccepted(e.target.checked)}
                  required
                  className="mt-1 h-5 w-5 rounded border-white/40 text-[#00827A] focus:ring-[#00827A]/40 focus:ring-2"
                />
                <label htmlFor="licenseAccepted" className="text-sm text-[#16130F] leading-relaxed">
                  I accept the{" "}
                  <a
                    href="/Edu‑font-License.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00827A] hover:underline font-semibold"
                  >
                    Edu-Aid School Licence terms
                  </a>{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Hidden fields (submitted programmatically) */}
              <input type="hidden" name="packageName" value="School Licence" />
              <input type="hidden" name="annualPrice" value="999" />
              <input type="hidden" name="submissionSource" value="School invoice request" />

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || !schoolName || !billingContactName || !billingEmail || !licenseAccepted}
                className="w-full rounded-2xl py-5 font-bold text-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00827A]/40 bg-[#00827A] text-white hover:bg-[#006B5E] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Invoice Request"}
              </button>

              {!TALLY_SCHOOL_INVOICE_ENDPOINT && (
                <p className="text-xs text-[#6B7280] text-center">
                  Form will submit to Tally once the endpoint is configured.
                </p>
              )}
            </form>
          </div>

          {/* License Terms */}
          <div className="mt-10 text-center">
            <p className="text-sm text-[#6B7280] mb-2">
              By requesting an invoice, you agree to the{" "}
              <a
                href="/Edu‑font-License.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00827A] hover:underline font-semibold"
              >
                Edu-Aid Font License Terms
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

