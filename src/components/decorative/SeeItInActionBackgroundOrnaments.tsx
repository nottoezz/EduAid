export default function SeeItInActionBackgroundOrnaments() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-visible z-0">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M   0 200
            C 250 80,   350 80,   450 200
            C 550 320,  650 80,   750 200
            S 1000 320, 1200 200
          "
          className="fill-none stroke-[#E8DFD2] [stroke-width:50] [stroke-linecap:round] [stroke-linejoin:round] opacity-100"
        />
        <path
          d="
            M   0 130
            C 200 100,  400 100,  500 220
            C 600 340,  700 120,  800 220
            S 950 320,  1200 220
          "
          className="fill-none stroke-[#1F9C93] [stroke-width:35] [stroke-linecap:round] [stroke-linejoin:round] opacity-100"
        />
        <path
          d="
            M   0 150
            C 300 60,   400 60,   550 180
            C 700 300,  800 60,   950 180
            S 1100 280, 1200 180
          "
          className="fill-none stroke-[#FF9F80] [stroke-width:40] [stroke-linecap:round] [stroke-linejoin:round] opacity-100"
        />
      </svg>
    </div>
  );
}
