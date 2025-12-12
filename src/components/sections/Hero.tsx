import HeroOrnaments from "../decorative/HeroOrnaments";
import studentWritingImage from "/StudentWritingOnLens.png";

export default function Hero() {
  return (
    <section
      role="banner"
      className="bg-[#fef4e6] pt-24 md:pt-24 pb-32 md:pb-40 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroOrnaments />
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#AEC3B0] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#3B82F6] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#10B981] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-8xl relative ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center order-2 lg:order-1">

            {/* Main content card */}
            <div className="relative w-full max-w-full z-10 ml-4 lg:ml-32">
              {/* Card background with gradient */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-[32px] p-8 md:p-10 lg:p-12 shadow-[0_18px_40px_rgba(0,0,0,0.05)] border border-[#E8DFD2]">
                {/* Accent line */}
                <div className="w-16 h-1 bg-[#FF5A5F] rounded-full mb-8 mx-auto"></div>

                <h1
                  id="hero-heading"
                  className="text-4xl md:text-5xl font-black text-[#152835] leading-tight mb-6"
                  style={{ fontFamily: '"Inter Tight", sans-serif' }}
                >
                  Don't Let{" "}
                  <span className="bg-[#FF8C88] px-2 py-1 rounded-md">
                    Bad Fonts
                  </span>
                  <br />
                  Teach{" "}
                  <span className="bg-[#FF8C88] px-2 py-1 rounded-md">
                    Bad Habits
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-[#152835]/80 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                  Trusted by South African schools for over 20 years. Hand-crafted
                  fonts designed for handwriting, phonics, and early literacy.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="bg-[#2CA6FF] hover:bg-[#168DE4] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2CA6FF] focus:ring-offset-2 focus:ring-offset-white"
                    aria-label="Download the teacher-approved fonts"
                  >
                    Download Fonts
                  </button>

                  <button
                    className="bg-transparent border-2 border-[#8BD889] text-[#218738] hover:bg-[#F5FFF5] font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8BD889] focus:ring-offset-2 focus:ring-offset-white"
                    aria-label="Access worksheets and resources"
                  >
                    Worksheets & Resources
                  </button>
                </div>

                {/* Trust badges */}
                <div className="mt-6 flex items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#2CA6FF] rounded-full"></div>
                    <span className="text-[#152835]/70 font-medium">DOE Approved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#8BD889] rounded-full"></div>
                    <span className="text-[#152835]/70 font-medium">Curriculum Aligned</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FF8C88] rounded-full"></div>
                    <span className="text-[#152835]/70 font-medium">20+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Student Writing Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-sm lg:max-w-md">
              <img
                src={studentWritingImage}
                alt="Student writing on lens - demonstrating proper handwriting techniques"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

