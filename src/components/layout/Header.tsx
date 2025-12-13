"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type NavItem = { label: string; href: string; note?: string };
type NavGroup = { title: string; items: NavItem[] };

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const reduce = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState<null | "explore" | "mobile">(null);

  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 90);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close popovers on escape / click outside
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target as Node)) setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  const groups = useMemo<NavGroup[]>(
    () => [
      {
        title: "On this page",
        items: [
          { label: "Font Pack", href: "/#fonts", note: "Print / Tracing / Guided" },
          { label: "See it in Action", href: "/#why", note: "Worksheet examples" },
          { label: "Pricing & Licenses", href: "/#pricing", note: "Teacher / School / Commercial" },
          { label: "FAQ & Support", href: "/#faq", note: "Answers + contact" },
        ],
      },
      {
        title: "Pages",
        items: [
          { label: "How We Help", href: "/help", note: "Teachers • Therapists • Schools • Parents" },
          { label: "All Available Fonts", href: "/all-fonts", note: "Full catalog + variants" },
          { label: "Trial Download", href: "/#download", note: "Get a sample font" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "License PDF", href: "/Edu-font-License.pdf", note: "Terms & usage" },
          { label: "Sample Worksheet", href: "/sample-worksheet.pdf", note: "Classroom-ready example" },
          { label: "Licensing Guide", href: "/licensing-guide.pdf", note: "Detailed breakdown" },
          { label: "Installation Guide", href: "/font-installation.pdf", note: "Windows / Mac" },
        ],
      },
    ],
    []
  );

  const primaryNav: NavItem[] = useMemo(
    () => [
      { label: "Font Pack", href: "/#fonts" },
      { label: "See it in Action", href: "/#why" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Contact", href: "mailto:schoolfonts@gmail.com" },
    ],
    []
  );

  const v = useMemo(() => {
    const ease = [0.22, 1, 0.36, 1] as const;
    return {
      pop: {
        hidden: { opacity: 0, y: 8, scale: 0.99 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease } },
        exit: { opacity: 0, y: 8, scale: 0.99, transition: { duration: 0.15, ease } },
      },
      sheet: {
        hidden: { opacity: 0, y: -8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.18, ease } },
        exit: { opacity: 0, y: -8, transition: { duration: 0.12, ease } },
      },
    };
  }, []);

  return (
    <header
      ref={headerRef as any}
      className={cx(
        "fixed top-0 left-0 right-0 z-50 text-[#16130F]",
        "transition-[background,box-shadow,border-radius,margin,transform] duration-700 ease-out",
        isScrolled
          ? "mx-3 sm:mx-4 mt-3 sm:mt-4"
          : "mx-0 mt-0"
      )}
    >
      <div
        className={cx(
          "relative",
          isScrolled
            ? "rounded-2xl bg-white/70 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.10)] border border-black/5"
            : "bg-[#fef4e6]/95 backdrop-blur-sm border-b border-black/5"
        )}
      >
        {/* subtle top hairline sheen */}
        <div
          aria-hidden="true"
          className={cx(
            "pointer-events-none absolute inset-x-0 top-0 h-px",
            isScrolled ? "bg-white/60" : "bg-white/40"
          )}
        />

        <div className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Brand */}
            <a href="/#" className="flex items-center gap-3 group">
              <div className="relative leading-none">
                <span className="text-xl sm:text-2xl font-black tracking-tight">
                  EDU-FONT
                </span>
                <span className="absolute -top-1 -right-4 text-[10px] font-bold text-[#00827A]">
                  ™
                </span>
              </div>

              <span className="hidden md:inline text-xs text-black/45 group-hover:text-black/60 transition">
                CAPS-aligned letter formation
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {/* Explore (mega panel) */}
              <div
                className="relative"
                onMouseEnter={() => setOpen("explore")}
                onMouseLeave={() => setOpen(null)}
              >
                <button
                  type="button"
                  className={cx(
                    "px-4 py-2 rounded-xl text-sm font-semibold transition",
                    "hover:bg-white/70 hover:shadow-sm",
                    open === "explore" ? "bg-white/70 shadow-sm" : "bg-transparent"
                  )}
                  aria-haspopup="dialog"
                  aria-expanded={open === "explore"}
                >
                  Explore
                  <span className="ml-2 text-black/40">▾</span>
                </button>

                <AnimatePresence>
                  {open === "explore" && (
                    <motion.div
                      variants={v.pop}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="absolute left-0 mt-3 w-[720px] rounded-3xl border border-black/10 bg-white backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.10)] overflow-hidden"
                      role="dialog"
                      aria-label="Explore navigation"
                    >
                      <div className="grid grid-cols-3 gap-0">
                        {groups.map((g) => (
                          <div key={g.title} className="p-5">
                            <div className="text-[11px] uppercase tracking-[0.22em] text-black/45 font-bold">
                              {g.title}
                            </div>

                            <div className="mt-3 space-y-1">
                              {g.items.map((it) => (
                                <a
                                  key={it.href + it.label}
                                  href={it.href}
                                  className="block rounded-2xl px-3 py-2 hover:bg-black/5 transition"
                                >
                                  <div className="text-sm font-semibold text-[#16130F]">
                                    {it.label}
                                  </div>
                                  {it.note && (
                                    <div className="text-[11px] text-black/45 mt-0.5">
                                      {it.note}
                                    </div>
                                  )}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between px-5 py-4 border-t border-black/5 bg-[#fef4e6]/60">
                        <div className="text-xs text-black/55">
                          Need help choosing?{" "}
                          <a
                            href="/help"
                            className="font-semibold text-[#00827A] hover:underline"
                          >
                            See how we help
                          </a>
                          .
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href="/all-fonts"
                            className="rounded-2xl bg-white/70 border border-black/10 px-4 py-2 text-xs font-semibold hover:bg-white transition"
                          >
                            View all fonts
                          </a>
                          <a
                            href="/#pricing"
                            className="rounded-2xl bg-[#2CA6FF] px-4 py-2 text-xs font-semibold text-black hover:opacity-95 transition shadow-sm shadow-black/10"
                          >
                            Pricing
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Primary anchors (simple + fast) */}
              {primaryNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "px-4 py-2 rounded-xl text-sm font-semibold transition",
                    isScrolled
                      ? "hover:bg-[#fef4e6]/60 hover:text-[#00827A]"
                      : "hover:bg-white/60 hover:text-[#00827A]"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="/all-fonts"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#16130F] bg-white/70 backdrop-blur-sm border border-black/10 rounded-xl hover:bg-white hover:shadow-sm transition"
              >
                All Fonts
              </a>

              <a
                href="/#pricing"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#16130F] bg-white/80 backdrop-blur-sm border border-[#E8DFD2] rounded-xl hover:bg-white hover:shadow-sm transition"
              >
                Get Font
              </a>

              <a
                href="mailto:schoolfonts@gmail.com"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#00827A] rounded-xl hover:bg-[#006B5E] hover:shadow-lg transition"
              >
                Get in Touch
              </a>

              {/* Mobile button */}
              <button
                type="button"
                onClick={() => setOpen(open === "mobile" ? null : "mobile")}
                className="lg:hidden inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-semibold text-black/70 hover:bg-white transition"
                aria-expanded={open === "mobile"}
                aria-label="Open menu"
              >
                <span className="mr-2">Menu</span>
                <span className="text-black/40">☰</span>
              </button>
            </div>
          </div>

          {/* Mobile sheet */}
          <AnimatePresence>
            {open === "mobile" && (
              <motion.div
                variants={v.sheet}
                initial="hidden"
                animate="show"
                exit="exit"
                className="lg:hidden mt-4 rounded-3xl border border-black/10 bg-white/75 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.12)] overflow-hidden"
              >
                <div className="p-4">
                  <div className="grid gap-2">
                    {primaryNav.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(null)}
                        className="rounded-2xl px-4 py-3 bg-white/70 border border-black/10 text-sm font-semibold text-[#16130F] hover:bg-white transition"
                      >
                        {item.label}
                      </a>
                    ))}
                    <a
                      href="/help"
                      onClick={() => setOpen(null)}
                      className="rounded-2xl px-4 py-3 bg-white/70 border border-black/10 text-sm font-semibold text-[#16130F] hover:bg-white transition"
                    >
                      How We Help
                    </a>
                    <a
                      href="/all-fonts"
                      onClick={() => setOpen(null)}
                      className="rounded-2xl px-4 py-3 bg-white/70 border border-black/10 text-sm font-semibold text-[#16130F] hover:bg-white transition"
                    >
                      All Available Fonts
                    </a>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <a
                      href="/#pricing"
                      onClick={() => setOpen(null)}
                      className="inline-flex items-center justify-center rounded-2xl bg-[#2CA6FF] px-4 py-3 text-sm font-semibold text-black hover:opacity-95 transition shadow-sm shadow-black/10"
                    >
                      Pricing
                    </a>
                    <a
                      href="/#download"
                      onClick={() => setOpen(null)}
                      className="inline-flex items-center justify-center rounded-2xl bg-white/70 border border-black/10 px-4 py-3 text-sm font-semibold text-black/70 hover:bg-white transition"
                    >
                      Trial Download
                    </a>
                  </div>

                  <div className="mt-3 text-[11px] text-black/45">
                    Resources:{" "}
                    <a className="font-semibold text-[#00827A] hover:underline" href="/Edu-font-License.pdf">
                      License PDF
                    </a>
                    {" • "}
                    <a className="font-semibold text-[#00827A] hover:underline" href="/font-installation.pdf">
                      Install Guide
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
