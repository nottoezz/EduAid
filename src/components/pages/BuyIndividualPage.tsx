import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { generateIndividualReference } from "../../utils/referenceGenerator";

export default function BuyIndividualPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [licenseAccepted, setLicenseAccepted] = useState(false);
  const [reference, setReference] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Generate reference on page load
  useEffect(() => {
    setReference(generateIndividualReference());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !licenseAccepted) {
      return;
    }

    setIsSubmitting(true);

    // TODO: Replace with actual Tally form endpoint
    const TALLY_FORM_ENDPOINT = ""; // Add Tally form endpoint here

    try {
      if (TALLY_FORM_ENDPOINT) {
        // Submit to Tally form
        const formData = new FormData();
        formData.append("fullName", fullName);
        formData.append("email", email);
        formData.append("product", "Edu-Aid Font Package");
        formData.append("price", "299");
        formData.append("type", "individual");
        formData.append("reference", reference);

        await fetch(TALLY_FORM_ENDPOINT, {
          method: "POST",
          body: formData,
        });
      }

      // Redirect to thanks page with reference and email
      navigate(`/buy/individual/thanks?ref=${reference}&email=${encodeURIComponent(email)}`);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Still redirect even if Tally submission fails
      navigate(`/buy/individual/thanks?ref=${reference}&email=${encodeURIComponent(email)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fef4e6] text-slate-900 overflow-x-hidden pt-24">
      <Header />

      {/* Main Content */}
      <div className="pb-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-[#16130F] sm:text-5xl mb-4">
              Buy Edu-Aid Font Package (R299)
            </h1>
            <p className="text-lg text-[#6B7280]">
              Pay via EFT. No account needed.
            </p>
          </div>

          {/* Reference Display */}
          {reference && (
            <div className="mb-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/40 p-6 shadow-sm">
              <p className="text-sm text-[#6B7280] mb-2">Your payment reference:</p>
              <p className="text-2xl font-bold text-[#00827A] font-mono">
                {reference}
              </p>
              <p className="text-xs text-[#6B7280] mt-2">
                Please use this reference when making your payment
              </p>
            </div>
          )}

          {/* Form */}
          <div className="rounded-3xl bg-[#EAF9F7] border border-[#00827A]/20 p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-[#16130F] mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 border border-white/40 bg-white/80 backdrop-blur-sm text-[#16130F] focus:outline-none focus:ring-2 focus:ring-[#00827A]/40 focus:border-[#00827A] transition"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#16130F] mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 border border-white/40 bg-white/80 backdrop-blur-sm text-[#16130F] focus:outline-none focus:ring-2 focus:ring-[#00827A]/40 focus:border-[#00827A] transition"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* License Acceptance */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="licenseAccepted"
                  name="licenseAccepted"
                  required
                  checked={licenseAccepted}
                  onChange={(e) => setLicenseAccepted(e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-white/40 text-[#00827A] focus:ring-[#00827A]/40 focus:ring-2"
                />
                <label
                  htmlFor="licenseAccepted"
                  className="text-sm text-[#16130F] leading-relaxed"
                >
                  I accept the{" "}
                  <a
                    href="/Edu‑font-License.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00827A] hover:underline font-semibold"
                  >
                    Edu-Aid Font License Terms
                  </a>{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Hidden Fields */}
              <input type="hidden" name="product" value="Edu-Aid Font Package" />
              <input type="hidden" name="price" value="299" />
              <input type="hidden" name="type" value="individual" />
              <input type="hidden" name="reference" value={reference} />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !fullName || !email || !licenseAccepted}
                className="w-full rounded-2xl py-5 font-bold text-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00827A]/40 bg-[#00827A] text-white hover:bg-[#006B5E] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : "Continue to Payment Details"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

