import { useSearchParams, Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { POP_EMAIL } from "../../utils/constants";

export default function BuyIndividualThanksPage() {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("ref") || "";
  const email = searchParams.get("email") || "";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // You could add a toast notification here
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="min-h-screen bg-[#fef4e6] text-slate-900 overflow-x-hidden pt-24">
      <Header />

      {/* Main Content */}
      <div className="pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Success Header */}
          <div className="text-center mb-10">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#00827A]/20">
              <svg
                className="h-10 w-10 text-[#00827A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-black text-[#16130F] sm:text-5xl mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-[#6B7280]">
              Your order has been received. Please complete your payment using the details below.
            </p>
          </div>

          {/* Order Summary */}
          <div className="mb-8 rounded-3xl bg-[#EAF9F7] border border-[#00827A]/20 p-8 shadow-xl">
            <h2 className="text-2xl font-extrabold text-[#16130F] mb-6">
              Order Summary
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-white/40">
                <span className="text-[#6B7280]">Product</span>
                <span className="font-semibold text-[#16130F]">Edu-Aid Font Package</span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-white/40">
                <span className="text-[#6B7280]">Amount</span>
                <span className="font-bold text-2xl text-[#00827A]">R299</span>
              </div>
              
              <div className="flex items-center justify-between py-3">
                <span className="text-[#6B7280]">Payment Reference</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[#00827A] text-lg">
                    {reference || "N/A"}
                  </span>
                  {reference && (
                    <button
                      onClick={() => copyToClipboard(reference)}
                      className="text-[#00827A] hover:text-[#006B5E] transition"
                      title="Copy reference"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Banking Details */}
          <div className="mb-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/40 p-8 shadow-xl">
            <h2 className="text-2xl font-extrabold text-[#16130F] mb-6">
              Banking Details
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start justify-between py-3 border-b border-slate-200">
                <span className="text-[#6B7280] font-medium">Bank Name</span>
                <span className="font-semibold text-[#16130F] text-right">FNB</span>
              </div>
              
              <div className="flex items-start justify-between py-3 border-b border-slate-200">
                <span className="text-[#6B7280] font-medium">Account Holder</span>
                <span className="font-semibold text-[#16130F] text-right">Karen Engelbrecht</span>
              </div>
              
              <div className="flex items-start justify-between py-3 border-b border-slate-200">
                <span className="text-[#6B7280] font-medium">Account Number</span>
                <span className="font-mono font-semibold text-[#16130F] text-right">6286 928 5116</span>
              </div>
              
              <div className="flex items-start justify-between py-3 border-b border-slate-200">
                <span className="text-[#6B7280] font-medium">Branch Code</span>
                <span className="font-semibold text-[#16130F] text-right">250 655</span>
              </div>
              
              <div className="flex items-start justify-between py-3">
                <span className="text-[#6B7280] font-medium">Swift Code</span>
                <span className="font-mono font-semibold text-[#16130F] text-right">FIRNZAJJ</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#EAF9F7] rounded-xl border border-[#00827A]/20">
              <p className="text-sm text-[#16130F]">
                <strong>Important:</strong> Please use the payment reference{" "}
                <span className="font-mono font-bold text-[#00827A]">{reference || "above"}</span>{" "}
                when making your payment so we can match it to your order.
              </p>
            </div>
          </div>

          {/* PoP Instructions */}
          <div className="mb-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/40 p-8 shadow-xl">
            <h2 className="text-2xl font-extrabold text-[#16130F] mb-4">
              Proof of Payment
            </h2>
            
            <p className="text-[#6B7280] mb-6 leading-relaxed">
              After making your payment, please send your proof of payment to:
            </p>
            
            <div className="mb-6 p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <p className="text-sm text-[#6B7280] mb-2">Email:</p>
              <p className="font-mono font-semibold text-[#16130F] text-lg">
                {POP_EMAIL}
              </p>
              <p className="text-sm text-[#6B7280] mt-2">Subject:</p>
              <p className="font-mono text-[#00827A]">
                {reference || "Your Payment Reference"}
              </p>
            </div>

            <Link
              to={`/upload-pop${reference ? `?ref=${reference}${email ? `&email=${encodeURIComponent(email)}` : ""}` : ""}`}
              className="block w-full rounded-2xl py-5 font-bold text-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00827A]/40 bg-[#00827A] text-white hover:bg-[#006B5E] text-center"
            >
              Upload Proof of Payment
            </Link>
          </div>

          {/* Help Text */}
          <div className="text-center">
            <p className="text-sm text-[#6B7280]">
              Questions? Contact us at{" "}
              <a
                href={`mailto:${POP_EMAIL}`}
                className="text-[#00827A] hover:underline font-semibold"
              >
                {POP_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

