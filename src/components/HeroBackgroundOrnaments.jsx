function HeroBackgroundOrnaments() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Flowing abstract lines from bottom-left to top-right */}
      <path
        d="M -10 85 Q 20 70 40 85 T 60 75 T 80 85 T 105 25"
        className="stroke-[#E8DFD2] stroke-6 fill-none"
      />
      <path
        d="M -30 90 Q 22 75 42 90 T 62 90 T 82 79 T 105 10"
        className="stroke-[#74C0E3] stroke-5 fill-none"
      />
      <path
        d="M -5 95 Q 25 80 45 95 T 65 85 T 85 95 T 105 50"
        className="stroke-[#FF9F80] stroke-7 fill-none"
      />

    </svg>
  )
}

export default HeroBackgroundOrnaments
