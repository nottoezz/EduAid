import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function BuySchoolThanksPage() {
  return (
    <div className="min-h-screen bg-[#fef4e6] text-slate-900 overflow-x-hidden pt-24">
      <Header />

      {/* Main Content */}
      <div className="pb-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
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
              Invoice Request Received
            </h1>
            <p className="text-lg text-[#6B7280]">
              Thank you! We've received your invoice request and will process it shortly.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="mb-8 rounded-3xl bg-[#EAF9F7] border border-[#00827A]/20 p-8 shadow-xl">
            <h2 className="text-2xl font-extrabold text-[#16130F] mb-6">
              What Happens Next
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00827A] text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="text-[#16130F]">
                    <strong>We'll review your request</strong> (typically within 1-2 business days)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00827A] text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="text-[#16130F]">
                    <strong>You'll receive an invoice</strong> via email with:
                  </p>
                  <ul className="mt-2 ml-4 list-disc text-[#6B7280] space-y-1">
                    <li>Invoice number and payment reference</li>
                    <li>Banking details for EFT payment</li>
                    <li>Payment instructions</li>
                    <li>Link to upload proof of payment</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00827A] text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="text-[#16130F]">
                    <strong>After payment confirmation,</strong> you'll receive a download link with all fonts and license documentation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mb-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/40 p-8 shadow-xl">
            <h2 className="text-xl font-extrabold text-[#16130F] mb-4">
              Important Information
            </h2>
            
            <div className="space-y-3 text-[#6B7280]">
              <p>
                <strong className="text-[#16130F]">Invoice Timeline:</strong> Invoices are typically sent within 1-2 business days of your request.
              </p>
              <p>
                <strong className="text-[#16130F]">Payment Reference:</strong> When making your EFT payment, please use the payment reference provided on your invoice. This ensures we can match your payment to your order.
              </p>
              <p>
                <strong className="text-[#16130F]">Proof of Payment:</strong> After making payment, upload your proof of payment using the link provided in your invoice email, or visit our{" "}
                <Link to="/upload-pop" className="text-[#00827A] hover:underline font-semibold">
                  PoP upload page
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Help Text */}
          <div className="text-center">
            <p className="text-sm text-[#6B7280] mb-4">
              Questions about your invoice request?
            </p>
            <a
              href="mailto:liam@birch.co.za"
              className="text-[#00827A] hover:underline font-semibold"
            >
              Contact us at liam@birch.co.za
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

