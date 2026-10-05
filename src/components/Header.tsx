"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { brand, navLinks } from "@/data/content";
import { MagneticButton } from "./MagneticButton";
import { SocialLinks } from "./SocialLinks";
           import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 40);
      if (currentY > 100) {
        setIsHidden(currentY > lastScrollY);
      } else {
        setIsHidden(false);
      }
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? "-100%" : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-ivory/93 backdrop-blur-md border-b border-espresso/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
          <nav className="flex h-[80px] items-center justify-between" aria-label="Main navigation">

<Link href="/" className="group flex items-center" aria-label={`${brand.name} home`}>
  <Image
    src="/images/YODHA Furnitures Logo.png"          // or /logo.png
    alt={`${brand.name} logo`}
    width={160}
    height={48}
    priority                 // header logo loads first
    className="h-9 w-auto md:h-8"
  />
</Link>

            <ul className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-[14px] font-medium uppercase tracking-[0.08em] transition-colors hover:text-brass ${
                      pathname === link.href ? "text-brass-deep" : "text-espresso"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-[1px] w-full bg-brass"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-6 lg:flex">
              <SocialLinks className="flex items-center gap-4 text-espresso" iconClassName="h-[18px] w-[18px]" />
              <MagneticButton href="/contact" variant="primary">
                Get a Quote
              </MagneticButton>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-11 w-11 items-center justify-center text-espresso lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <div className="flex h-4 w-5 flex-col justify-between">
                <span
                  className={`h-[2px] w-full bg-current transition-transform ${
                    mobileOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full bg-current transition-opacity ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full bg-current transition-transform ${
                    mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[80px] z-40 bg-ivory/98 backdrop-blur-md border-b border-espresso/10 lg:hidden"
          >
            <nav className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] py-6" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block py-2 text-[16px] font-medium uppercase tracking-[0.08em] ${
                        pathname === link.href ? "text-brass-deep" : "text-espresso"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-block bg-espresso px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-ivory"
                  >
                    Get a Quote
                  </Link>
                </li>
                <li className="pt-4 border-t border-espresso/10">
                  <SocialLinks className="flex items-center gap-5 text-espresso" iconClassName="h-5 w-5" />
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
