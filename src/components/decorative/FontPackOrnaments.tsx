export default function FontPackOrnaments() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Top decorative lines - moved down more */}
      <path
        d="M -10 28 Q 20 22 40 42 T 60 32 T 80 48 T 95 38 T 105 20"
        className="stroke-[#E8DFD2] stroke-6 fill-none"
      />
      <path
        d="M -15 35 Q 12 28 32 48 T 52 38 T 72 54 T 87 44 T 105 26"
        className="stroke-[#4EC5C1] stroke-5 fill-none"
      />
      <path
        d="M -5 42 Q 18 34 38 54 T 58 44 T 78 60 T 93 50 T 105 32"
        className="stroke-[#FF9F80] stroke-7 fill-none"
      />
    </svg>
  );
}
