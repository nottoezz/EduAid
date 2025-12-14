"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Import images for navbar placeholders
import fontPreviewImage from "/fonts/Full-Font.png";
import StudentWriting from "/StudentWritingOnLens.webp";
import TeachersImage from "/WUE-Teachers.webp";
import TherapistImage from "/WUE-Therapist.webp";
import FontSolid from "/ABC-solid.webp";
import FontDotted from "/ABC-dotted.webp";
import DownloadFont from "/ABC-edu.webp";
import LicenseInfo from "/TeacherCorrectFont.png";

/* ---------------------------------------------
 Types
--------------------------------------------- */

type Section = {
  label: string;
  href: string;
  note?: string;
};

type Page = {
  id: string;
  label: string;
  href: string;
  note?: string;
  sections?: Section[];
  imageHints?: string[];
  images?: string[];
};

type Resource = {
  label: string;
  href: string;
  note?: string;
};

/* ---------------------------------------------
 Utils
--------------------------------------------- */

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const handlePdfClick = (filename: string, e: React.MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  const base = import.meta.env.BASE_URL || "/";
  window.open(`${base}${filename}`.replace(/\/\//g, "/"), "_blank", "noopener");
};

/* ---------------------------------------------
 Config
--------------------------------------------- */

const PAGES: Page[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    note: "Overview & features",
    sections: [
      { label: "Font Pack", href: "/#fonts" },
      { label: "See it in Action", href: "/#why" },
      { label: "Pricing & Licenses", href: "/#pricing" },
      { label: "FAQ & Support", href: "/#faq" },
    ],
    imageHints: ["Font previews", "Student writing"],
    images: [fontPreviewImage, StudentWriting],
  },
  {
    id: "help",
    label: "How We Help",
    href: "/help",
    note: "Teachers • Therapists • Schools",
    sections: [
      { label: "Teachers", href: "/help#teachers" },
      { label: "Therapists", href: "/help#therapists" },
      { label: "Schools", href: "/help#schools" },
      { label: "Parents", href: "/help#parents" },
    ],
    imageHints: ["Teacher resources", "Therapy material"],
    images: [TeachersImage, TherapistImage],
  },
  {
    id: "fonts",
    label: "All Fonts",
    href: "/all-fonts",
    note: "Full catalogue",
    sections: [],
    imageHints: ["Font grid", "Style variants"],
    images: [FontSolid, FontDotted],
  },
  {
    id: "download",
    label: "Trial Download",
    href: "/download",
    note: "Sample font",
    sections: [],
    imageHints: ["Download UI", "License info"],
    images: [DownloadFont, LicenseInfo],
  },
];

const RESOURCES: Resource[] = [
  { label: "License PDF", href: "Edu‑font-License.pdf" },
  { label: "Sample Worksheet", href: "sample-worksheet.pdf" },
  { label: "Licensing Guide", href: "licensing-guide.pdf" },
  { label: "Installation Guide", href: "font-installation.pdf" },
];

/* ---------------------------------------------
 Component
--------------------------------------------- */

export default function Header() {
  const reduce = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePage, setActivePage] = useState(PAGES[0]);
  const headerRef = useRef<HTMLElement | null>(null);

  /* Scroll */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close on outside click / esc */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  const v = {
    hidden: { opacity: 0, y: -8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: { duration: reduce ? 0 : 0.15 },
    },
  };

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setOpen(false)}
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        isScrolled ? "mx-4 mt-4" : "mx-0 mt-0"
      )}
    >
      <div
        className={cx(
          "relative",
          isScrolled
            ? "rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-black/5"
            : "bg-[#fef4e6]/95 border-b border-black/5"
        )}
      >
        {/* Top bar */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-black text-xl tracking-tight">
            EDU-FONT<span className="text-[#00827A] text-xs ml-1">™</span>
          </Link>

          {/* Desktop pages */}
          <nav
            className="hidden lg:flex items-center gap-1"
            onMouseEnter={() => setOpen(true)}
          >
            {PAGES.map((p) => (
              <Link
                key={p.id}
                to={p.href}
                onMouseEnter={() => setActivePage(p)}
                className="px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/70"
              >
                {p.label}
              </Link>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex gap-2">
            <Link
              to="/#pricing"
              className="px-4 py-2 rounded-xl bg-[#2CA6FF] text-sm font-semibold"
            >
              Pricing
            </Link>
            <a
              href="mailto:schoolfonts@gmail.com"
              className="px-4 py-2 rounded-xl bg-[#00827A] text-white text-sm font-semibold"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/70"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={v}
              initial="hidden"
              animate="show"
              exit="exit"
              className="lg:hidden border-t border-black/5 bg-white/95 backdrop-blur-xl"
            >
              <div className="px-6 py-4 space-y-2">
                {PAGES.map((p) => (
                  <Link
                    key={p.id}
                    to={p.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl hover:bg-black/5 font-semibold"
                  >
                    {p.label}
                  </Link>
                ))}
                <div className="pt-2 border-t border-black/5 space-y-2">
                  <Link
                    to="/#pricing"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl bg-[#2CA6FF] text-sm font-semibold text-center"
                  >
                    Pricing
                  </Link>
                  <a
                    href="mailto:schoolfonts@gmail.com"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl bg-[#00827A] text-white text-sm font-semibold text-center"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mega panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={v}
              initial="hidden"
              animate="show"
              exit="exit"
              role="dialog"
              className="border-t border-black/5 bg-white backdrop-blur-xl"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 px-6 py-8">
                {/* Pages */}
                <div className="col-span-3">
                  <p className="text-xs uppercase tracking-widest text-black/45 mb-4">
                    Pages
                  </p>
                  {PAGES.map((p) => (
                    <Link
                      key={p.id}
                      to={p.href}
                      onMouseEnter={() => setActivePage(p)}
                      onClick={() => setOpen(false)}
                      className={cx(
                        "block w-full text-left px-4 py-3 rounded-xl",
                        activePage.id === p.id
                          ? "bg-[#00827A]/10"
                          : "hover:bg-black/5"
                      )}
                    >
                      <div className="font-semibold">{p.label}</div>
                      {p.note && (
                        <div className="text-xs text-black/45">{p.note}</div>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Sections */}
                <div className="col-span-5">
                  <p className="text-xs uppercase tracking-widest text-black/45 mb-4">
                    Sections
                  </p>
                  {activePage.sections && activePage.sections.length > 0 ? (
                    activePage.sections.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3 rounded-xl hover:bg-black/5"
                      >
                        <div className="font-semibold">{s.label}</div>
                        {s.note && (
                          <div className="text-xs text-black/45">{s.note}</div>
                        )}
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-sm text-black/45">
                      {activePage.id === "fonts" && "Browse our complete font collection"}
                      {activePage.id === "download" && "Download the trial font and view licensing"}
                    </div>
                  )}

                  <div className="mt-6 pt-6 border-t border-black/5">
                    <p className="text-xs uppercase tracking-widest text-black/45 mb-3">
                      Resources
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {RESOURCES.map((r) => (
                        <button
                          key={r.href}
                          onClick={(e) => handlePdfClick(r.href, e)}
                          className="text-left px-3 py-2 rounded-xl hover:bg-black/5 text-sm"
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual + CTA */}
                <div className="col-span-4 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {(activePage.images || activePage.imageHints || []).slice(0, 2).map((item, index) => (
                      <div
                        key={index}
                        className="aspect-square rounded-2xl border border-black/10 bg-[#fef4e6]/50 overflow-hidden"
                      >
                        {activePage.images ? (
                          <img
                            src={item}
                            alt={activePage.imageHints?.[index] || "Preview"}
                            className="w-full h-full object-contain p-2"
                          />
                        ) : (
                          <div className="w-full h-full border border-dashed border-black/10 bg-[#fef4e6]/50 flex items-center justify-center text-xs text-black/40">
                            {item}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/#pricing"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center px-6 py-4 rounded-2xl bg-[#2CA6FF] font-semibold"
                  >
                    View Pricing
                  </Link>

                  <Link
                    to="/download"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center px-6 py-4 rounded-2xl border border-black/10 bg-white"
                  >
                    Download Trial
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
