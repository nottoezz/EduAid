import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { POP_EMAIL } from "../../utils/constants";

export default function UploadPopPage() {
  const [searchParams] = useSearchParams();
  const initialRef = searchParams.get("ref") || "";
  const initialEmail = searchParams.get("email") || "";

  const [email, setEmail] = useState(initialEmail);
  const [reference, setReference] = useState(initialRef);
  const [schoolName, setSchoolName] = useState("");
  const [amount, setAmount] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Validate file type
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
      if (allowedTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
      } else {
        alert("Please upload a PDF, JPG, or PNG file.");
        e.target.value = "";
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !reference || !file) {
      alert("Please fill in all required fields and select a file.");
      return;
    }

    setIsSubmitting(true);

    // TODO: Replace with actual Tally form endpoint
    // IMPORTANT: When setting up your Tally form, configure it to send email notifications
    // to POP_EMAIL (liam@birch.co.za). Tally will automatically email the form submission
    // including the file attachment to the configured recipient address.
    // 
    // Note: You may want separate Tally forms for individual vs school PoP uploads,
    // or use one form that handles both by checking if schoolName is provided.
    const TALLY_FORM_ENDPOINT = ""; // Add Tally form endpoint with file upload here

    try {
      if (TALLY_FORM_ENDPOINT) {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("reference", reference);
        if (schoolName) formData.append("schoolName", schoolName);
        if (amount) formData.append("amount", amount);
        formData.append("proofOfPayment", file);

        await fetch(TALLY_FORM_ENDPOINT, {
          method: "POST",
          body: formData,
        });
        // Tally will automatically send an email notification to the address configured
        // in your Tally form settings (should be set to POP_EMAIL)
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting PoP:", error);
      alert(`There was an error uploading your proof of payment. Please try again or email it directly to ${POP_EMAIL}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#fef4e6] text-slate-900 overflow-x-hidden pt-24">
        <Header />

        <div className="pb-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
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
                Proof of Payment Uploaded
              </h1>
              <p className="text-lg text-[#6B7280] mb-8">
                Thank you! We've received your proof of payment. We'll process your order and send you the download link within 1-2 business days.
              </p>
              <div className="rounded-3xl bg-[#EAF9F7] border border-[#00827A]/20 p-6">
                <p className="text-sm text-[#6B7280] mb-2">Reference:</p>
                <p className="font-mono font-bold text-[#00827A] text-xl">{reference}</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fef4e6] text-slate-900 overflow-x-hidden pt-24">
      <Header />

      {/* Main Content */}
      <div className="pb-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-[#16130F] sm:text-5xl mb-4">
              Upload Proof of Payment
            </h1>
            <p className="text-lg text-[#6B7280]">
              Upload a screenshot or PDF of your payment confirmation
            </p>
            <p className="text-sm text-[#6B7280] mt-2">
              For individual purchases and school licences
            </p>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-[#EAF9F7] border border-[#00827A]/20 p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
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

              {/* Reference / Invoice Number */}
              <div>
                <label
                  htmlFor="reference"
                  className="block text-sm font-semibold text-[#16130F] mb-2"
                >
                  Payment Reference / Invoice Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="reference"
                  name="reference"
                  required
                  value={reference}
                  onChange={(e) => setReference(e.target.value.toUpperCase())}
                  className="w-full rounded-xl px-4 py-3 border border-white/40 bg-white/80 backdrop-blur-sm text-[#16130F] font-mono focus:outline-none focus:ring-2 focus:ring-[#00827A]/40 focus:border-[#00827A] transition"
                  placeholder="EDUAID-IND-XXXXX or INV-2026-0012"
                />
                <p className="text-xs text-[#6B7280] mt-2">
                  Individual: Use your payment reference (e.g., EDUAID-IND-XXXXX). School: Use your invoice number.
                </p>
              </div>

              {/* School Name (Optional - for schools) */}
              <div>
                <label
                  htmlFor="schoolName"
                  className="block text-sm font-semibold text-[#16130F] mb-2"
                >
                  School Name <span className="text-xs text-[#6B7280]">(Optional - for school licences)</span>
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 border border-white/40 bg-white/80 backdrop-blur-sm text-[#16130F] focus:outline-none focus:ring-2 focus:ring-[#00827A]/40 focus:border-[#00827A] transition"
                  placeholder="Your School Name"
                />
              </div>

              {/* Amount (Optional) */}
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-semibold text-[#16130F] mb-2"
                >
                  Amount Paid <span className="text-xs text-[#6B7280]">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 border border-white/40 bg-white/80 backdrop-blur-sm text-[#16130F] focus:outline-none focus:ring-2 focus:ring-[#00827A]/40 focus:border-[#00827A] transition"
                  placeholder="R299 or R999"
                />
              </div>

              {/* File Upload */}
              <div>
                <label
                  htmlFor="file"
                  className="block text-sm font-semibold text-[#16130F] mb-2"
                >
                  Proof of Payment <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 flex justify-center rounded-xl border-2 border-dashed border-white/40 bg-white/60 px-6 py-8">
                  <div className="space-y-2 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-[#6B7280]"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-[#6B7280]">
                      <label
                        htmlFor="file"
                        className="relative cursor-pointer rounded-md font-semibold text-[#00827A] hover:text-[#006B5E] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#00827A] focus-within:ring-offset-2"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file"
                          name="file"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          required
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-[#6B7280]">
                      PDF, JPG, or PNG up to 10MB
                    </p>
                    {file && (
                      <p className="text-sm font-semibold text-[#00827A] mt-2">
                        Selected: {file.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Alternative Method */}
              <div className="pt-4 border-t border-white/40">
                <p className="text-sm text-[#6B7280] text-center">
                  Prefer to email? Send your PoP to{" "}
                  <a
                    href={`mailto:${POP_EMAIL}?subject=${encodeURIComponent(reference || "Payment Reference")}`}
                    className="text-[#00827A] hover:underline font-semibold"
                  >
                    {POP_EMAIL}
                  </a>{" "}
                  with subject: <span className="font-mono">{reference || "Your Reference"}</span>
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !email || !reference || !file}
                className="w-full rounded-2xl py-5 font-bold text-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00827A]/40 bg-[#00827A] text-white hover:bg-[#006B5E] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Uploading..." : "Upload Proof of Payment"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

