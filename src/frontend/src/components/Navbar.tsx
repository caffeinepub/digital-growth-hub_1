import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 shrink-0"
            data-ocid="nav.link"
          >
            <img
              src="/assets/logo.png"
              alt="Digital Growth Hub"
              className="h-12 w-auto object-contain"
              style={{ maxWidth: "160px" }}
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                data-ocid="nav.link"
                className="text-sm font-semibold text-brand-body hover:text-brand-orange transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+918602607617"
              className="flex items-center gap-1.5 text-sm font-semibold text-brand-body hover:text-brand-orange transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91-86026-07617</span>
            </a>
            <Button
              onClick={() => scrollTo("#contact")}
              data-ocid="nav.primary_button"
              className="btn-orange rounded-full px-5 text-sm"
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-brand-body hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden px-4 py-4 shadow-xl"
          style={{ backgroundColor: "#0B2433", borderTop: "1px solid #173A4A" }}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                data-ocid="nav.link"
                className="text-sm font-semibold py-3 text-brand-body hover:text-brand-orange transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="tel:+918602607617"
                className="flex items-center justify-center gap-2 btn-orange rounded-full py-3 text-sm"
              >
                <Phone className="w-4 h-4" /> Call Now — +91-86026-07617
              </a>
              <a
                href="https://wa.me/918602607617?text=Hi%2C%20I%20want%20to%20grow%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 btn-whatsapp rounded-full py-3 text-sm"
              >
                📲 WhatsApp Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
