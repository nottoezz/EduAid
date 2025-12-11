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
        d="M -10 80 Q 20 65 40 80 T 60 70 T 80 80 T 105 20"
        className="stroke-[#E8DFD2] stroke-6 fill-none"
      />
      <path
        d="M -30 85 Q 22 70 42 85 T 62 85 T 82 74 T 105 5"
        className="stroke-[#74C0E3] stroke-5 fill-none"
      />
      <path
        d="M -5 90 Q 25 75 45 90 T 65 82 T 85 75 T 105 45"
        className="stroke-[#FF9F80] stroke-7 fill-none"
      />

    </svg>
  )
}

export default HeroBackgroundOrnaments
