import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{ backgroundColor: "#071824", borderTop: "1px solid #173A4A" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/logo.png"
                alt="Digital Growth Hub"
                className="h-14 w-auto object-contain"
                style={{ maxWidth: "180px" }}
              />
            </div>
            <p className="text-brand-body text-sm leading-relaxed">
              Aapke business ko online duniya mein aage badhane ke liye hum hain
              aapke saath. Local se Global tak.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-brand-heading text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-body">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Pricing", href: "#pricing" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="hover:text-brand-orange transition-colors text-left"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-brand-heading text-sm mb-4 uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-brand-body">
              <li>YouTube Growth</li>
              <li>Instagram & Facebook Followers</li>
              <li>Facebook & Instagram Ads</li>
              <li>Website Development</li>
              <li>Android App Development</li>
              <li>Logo & Banner Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-brand-heading text-sm mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-brand-body">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-orange" />
                <span>Morena, Madhya Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-brand-orange" />
                <a
                  href="mailto:digitalgrowthhub143@gmail.com"
                  className="hover:text-brand-orange transition-colors break-all"
                >
                  digitalgrowthhub143@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-brand-orange" />
                <a
                  href="tel:+918602607617"
                  className="hover:text-brand-orange transition-colors"
                >
                  +91-86026-07617
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#2BBE60" }}
                />
                <a
                  href="https://wa.me/918602607617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-green transition-colors"
                  style={{ color: "#2BBE60" }}
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-brand-muted"
          style={{ borderTop: "1px solid #173A4A" }}
        >
          <p>© {year} Digital Growth Hub. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange underline hover:no-underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
