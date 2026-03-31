import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const WA_LINK =
  "https://wa.me/918602607617?text=Hi%2C%20I%20want%20to%20grow%20my%20business";
const CALL_LINK = "tel:+918602607617";
const GOOGLE_FORM_LINK = "https://forms.gle/YVjSvcUpruqEbDQS8";

const services = [
  {
    icon: "📺",
    title: "YouTube Growth",
    desc: "Real subscribers, fast results. Channel ko viral banayein!",
  },
  {
    icon: "📱",
    title: "Instagram & Facebook Followers",
    desc: "Genuine followers, organic growth. Brand presence badhayein.",
  },
  {
    icon: "▶️",
    title: "YouTube Ads & Video Promotion",
    desc: "Maximum views, targeted audience tak apni video pahunchayein.",
  },
  {
    icon: "📢",
    title: "Facebook & Instagram Ads",
    desc: "High ROI ad campaigns. Sahi logo tak sahi message pahunchayein.",
  },
  {
    icon: "🌐",
    title: "Website Development",
    desc: "Professional business/shop websites jo 24/7 kaam karein.",
  },
  {
    icon: "📲",
    title: "Android App Development",
    desc: "Custom apps for your business. Digital presence badhayein.",
  },
  {
    icon: "📍",
    title: "Google Map Business Listing",
    desc: "Local SEO, more walk-ins. Nearby customers attract karein.",
  },
  {
    icon: "🎨",
    title: "Thumbnail, Banner & Logo Design",
    desc: "Eye-catching creative designs jo brand ko memorable banayein.",
  },
  {
    icon: "🎬",
    title: "Video Editing",
    desc: "Professional editing for all platforms. Reels, YouTube, Ads.",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Business Owner, Delhi",
    avatar: "RS",
    quote:
      "Bhai mere YouTube channel pe 10k subscribers aa gaye! Unbelievable service hai. Genuinely recommend karta hoon 🔥",
    stars: 5,
  },
  {
    name: "Priya Singh",
    location: "Entrepreneur, Bhopal",
    avatar: "PS",
    quote:
      "Instagram growth bahut fast mila, totally trusted service 👍 Mere followers 500 se 8000 ho gaye ek mahine mein!",
    stars: 5,
  },
  {
    name: "Amit Kumar",
    location: "Shop Owner, Morena",
    avatar: "AK",
    quote:
      "Affordable aur best service hai. Mere shop ka Google listing top pe aa gaya. Highly recommend karta hoon!",
    stars: 5,
  },
];

const pricing = [
  {
    name: "Basic",
    price: "₹999",
    period: "one-time",
    features: ["1 Service", "Basic Support", "15 Days Delivery", "1 Revision"],
    highlight: false,
    badge: null,
  },
  {
    name: "Standard",
    price: "₹1999",
    period: "one-time",
    features: [
      "3 Services",
      "Priority Support",
      "10 Days Delivery",
      "3 Revisions",
      "Free Consultation",
    ],
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Premium",
    price: "₹4999",
    period: "one-time",
    features: [
      "All Services",
      "24/7 VIP Support",
      "5 Days Delivery",
      "Unlimited Revisions",
      "Free Strategy Call",
    ],
    highlight: false,
    badge: null,
  },
];

const trustStats = [
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Zap, value: "Fast", label: "Delivery" },
  { icon: TrendingUp, value: "Affordable", label: "Pricing" },
  { icon: Clock, value: "24/7", label: "Support" },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: "#071824" }}>
      {/* ─── URGENCY BANNER ─── */}
      <div
        className="text-white text-center py-2.5 px-4 text-sm font-bold"
        style={{
          background: "linear-gradient(90deg, #E57A2E, #F08A2B, #E57A2E)",
        }}
      >
        ⚡ Limited Time Offer — Only Few Slots Left!{" "}
        <a href={CALL_LINK} className="underline hover:no-underline">
          Abhi Call Karein
        </a>
      </div>

      {/* ─── HERO ─── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        style={{ backgroundColor: "#071824" }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        {/* Orange glow bottom */}
        <div className="absolute inset-0 gradient-glow-orange pointer-events-none" />
        {/* Blue radial glow top-right */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(11,36,51,0.8) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6 uppercase tracking-wider"
                style={{
                  background: "rgba(240,138,43,0.15)",
                  border: "1px solid rgba(240,138,43,0.4)",
                  color: "#F08A2B",
                }}
              >
                🚀 India ka Best Digital Marketing Agency
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-extrabold leading-tight mb-5 text-brand-heading">
                Apne Business ko{" "}
                <span style={{ color: "#F08A2B" }}>Online Grow</span> Karein!
              </h1>

              <p
                className="text-xl font-bold mb-3"
                style={{ color: "#F08A2B" }}
              >
                30 Din me Real Results – Guaranteed 🔥
              </p>

              <p className="text-brand-body text-lg leading-relaxed mb-8">
                Offline business ko online brand banayein aur apni income
                badhayein
              </p>

              {/* Urgency */}
              <div
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold mb-8"
                style={{
                  background: "rgba(240,138,43,0.1)",
                  border: "1px solid rgba(240,138,43,0.3)",
                  color: "#F08A2B",
                }}
              >
                ⚡ Limited Time Offer – Only Few Slots Left!
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 btn-whatsapp rounded-full px-7 py-3.5 text-base"
                  data-ocid="hero.primary_button"
                >
                  📲 WhatsApp Now
                </a>
                <a
                  href={CALL_LINK}
                  className="inline-flex items-center gap-2.5 btn-orange rounded-full px-7 py-3.5 text-base"
                  data-ocid="hero.secondary_button"
                >
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </div>

              {/* Trust mini */}
              <div className="flex flex-wrap gap-5 mt-8">
                {[
                  "Free Consultation",
                  "No Hidden Charges",
                  "Result Guaranteed",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-1.5 text-sm text-brand-body"
                  >
                    <CheckCircle
                      className="w-4 h-4"
                      style={{ color: "#2BBE60" }}
                    />
                    {t}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative">
                {/* Main card */}
                <div
                  className="w-80 h-80 rounded-3xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #0E2B3B, #173A4A)",
                    border: "1px solid #173A4A",
                    boxShadow:
                      "0 24px 80px rgba(0,0,0,0.5), 0 0 60px rgba(240,138,43,0.1)",
                  }}
                >
                  <div className="text-center">
                    <div className="text-7xl mb-4">🚀</div>
                    <div className="text-brand-heading font-extrabold text-xl">
                      Digital Growth Hub
                    </div>
                    <div className="text-brand-muted text-sm mt-1">
                      Your Growth Partner
                    </div>
                    <div
                      className="mt-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold"
                      style={{
                        background: "rgba(240,138,43,0.15)",
                        color: "#F08A2B",
                      }}
                    >
                      <TrendingUp className="w-4 h-4" /> 30-Day Results
                    </div>
                  </div>
                </div>
                {/* Floating stat badges */}
                <div
                  className="absolute -top-5 -right-6 rounded-2xl p-3.5 text-center shadow-xl"
                  style={{ background: "#0E2B3B", border: "1px solid #173A4A" }}
                >
                  <div
                    className="text-2xl font-extrabold"
                    style={{ color: "#F08A2B" }}
                  >
                    100+
                  </div>
                  <div className="text-xs text-brand-muted">Happy Clients</div>
                </div>
                <div
                  className="absolute -bottom-5 -left-6 rounded-2xl p-3.5 text-center shadow-xl"
                  style={{ background: "#0E2B3B", border: "1px solid #173A4A" }}
                >
                  <div
                    className="text-2xl font-extrabold"
                    style={{ color: "#2BBE60" }}
                  >
                    24/7
                  </div>
                  <div className="text-xs text-brand-muted">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <section
        style={{
          backgroundColor: "#0B2433",
          borderTop: "1px solid #173A4A",
          borderBottom: "1px solid #173A4A",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-2"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(240,138,43,0.12)",
                    border: "1px solid rgba(240,138,43,0.25)",
                  }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: "#F08A2B" }} />
                </div>
                <div className="font-extrabold text-xl text-brand-heading">
                  {stat.value}
                </div>
                <div className="text-brand-muted text-xs font-semibold uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section
        id="services"
        style={{ backgroundColor: "#071824" }}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-4 uppercase tracking-wider"
              style={{
                background: "rgba(240,138,43,0.12)",
                border: "1px solid rgba(240,138,43,0.3)",
                color: "#F08A2B",
              }}
            >
              Our Services
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-heading mb-3">
              Humari Top Services
            </h2>
            <p className="text-brand-body text-lg">
              Real Results. Real Growth. 🔥
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                data-ocid={`services.item.${i + 1}`}
                className="card-hover rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "#0E2B3B", border: "1px solid #173A4A" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{
                    background: "rgba(240,138,43,0.12)",
                    border: "1px solid rgba(240,138,43,0.2)",
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-bold text-brand-heading text-base mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-brand-body text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <a
                  href={`${WA_LINK.replace("Hi%2C%20I%20want%20to%20grow%20my%20business", `Hi%2C%20I%20want%20${encodeURIComponent(s.title)}%20service`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 btn-orange rounded-xl py-2.5 text-sm"
                  data-ocid={`services.primary_button.${i + 1}`}
                >
                  Start Now →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section
        id="pricing"
        style={{ backgroundColor: "#0B2433" }}
        className="py-24"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-4 uppercase tracking-wider"
              style={{
                background: "rgba(240,138,43,0.12)",
                border: "1px solid rgba(240,138,43,0.3)",
                color: "#F08A2B",
              }}
            >
              Pricing Plans
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-heading mb-3">
              Our Pricing Plans
            </h2>
            <p className="text-brand-body text-lg">
              Har budget ke liye perfect plan 💰
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {pricing.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                data-ocid={`pricing.item.${i + 1}`}
                className={`relative rounded-2xl p-7 flex flex-col gap-5 card-hover ${
                  plan.highlight ? "scale-105" : ""
                }`}
                style={
                  plan.highlight
                    ? {
                        background:
                          "linear-gradient(160deg, #1a3b50 0%, #0E2B3B 100%)",
                        border: "2px solid #F08A2B",
                        boxShadow: "0 0 40px rgba(240,138,43,0.2)",
                      }
                    : { background: "#0E2B3B", border: "1px solid #173A4A" }
                }
              >
                {plan.badge && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-extrabold uppercase tracking-widest"
                    style={{
                      background: "linear-gradient(135deg, #E57A2E, #F08A2B)",
                      color: "#fff",
                    }}
                  >
                    {plan.badge}
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-brand-heading text-lg mb-1">
                    {plan.name}
                  </h3>
                  <div
                    className="text-4xl font-extrabold"
                    style={{ color: plan.highlight ? "#F08A2B" : "#F2F6FA" }}
                  >
                    {plan.price}
                  </div>
                  <div className="text-brand-muted text-xs">{plan.period}</div>
                </div>
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2.5 text-sm text-brand-body"
                    >
                      <CheckCircle
                        className="w-4 h-4 shrink-0"
                        style={{ color: "#2BBE60" }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all ${
                    plan.highlight ? "btn-orange" : "hover:opacity-80"
                  }`}
                  style={
                    !plan.highlight
                      ? { border: "1px solid #F08A2B", color: "#F08A2B" }
                      : {}
                  }
                  data-ocid={`pricing.primary_button.${i + 1}`}
                >
                  Get Started Now
                </a>
              </motion.div>
            ))}
          </div>

          {/* Custom plan note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-brand-body mb-4">
              Custom plans bhi available hain – WhatsApp karein
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-whatsapp rounded-full px-7 py-3 text-sm"
              data-ocid="pricing.secondary_button"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp for Custom Plan
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section
        id="testimonials"
        style={{ backgroundColor: "#071824" }}
        className="py-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-4 uppercase tracking-wider"
              style={{
                background: "rgba(240,138,43,0.12)",
                border: "1px solid rgba(240,138,43,0.3)",
                color: "#F08A2B",
              }}
            >
              Client Reviews
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-heading mb-3">
              Clients Kya Kehte Hain?
            </h2>
            <p className="text-brand-body text-lg">100+ satisfied customers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                data-ocid={`testimonials.item.${i + 1}`}
                className="rounded-2xl p-7 flex flex-col gap-5 card-hover"
                style={{ background: "#0E2B3B", border: "1px solid #173A4A" }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star
                      key={`${t.name}-star-${j}`}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-brand-body text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #E57A2E, #F08A2B)",
                      color: "#fff",
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-brand-heading text-sm">
                      {t.name}
                    </div>
                    <div className="text-brand-muted text-xs">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        style={{ backgroundColor: "#0B2433" }}
        className="py-24"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-4 uppercase tracking-wider"
              style={{
                background: "rgba(240,138,43,0.12)",
                border: "1px solid rgba(240,138,43,0.3)",
                color: "#F08A2B",
              }}
            >
              Contact Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-heading mb-3">
              Hum Se Sampark Karein
            </h2>
            <p className="text-brand-body text-lg">
              24/7 available hain — aaj hi baat karein!
            </p>
          </motion.div>

          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-10 flex flex-col items-center text-center gap-8"
            style={{
              background: "linear-gradient(160deg, #1a3b50 0%, #0E2B3B 100%)",
              border: "2px solid rgba(240,138,43,0.3)",
              boxShadow: "0 0 60px rgba(240,138,43,0.1)",
            }}
          >
            {/* Text above button */}
            <p
              className="text-xl sm:text-2xl font-bold leading-relaxed"
              style={{ color: "#F2F6FA" }}
            >
              Apni details bharein, hum turant contact karenge 🚀
            </p>

            {/* Google Form Button */}
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.primary_button"
              className="inline-flex items-center justify-center gap-3 rounded-2xl px-10 py-5 text-xl font-extrabold text-white transition-all hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #E57A2E, #F08A2B)",
                boxShadow:
                  "0 8px 32px rgba(240,138,43,0.45), 0 0 0 0 rgba(240,138,43,0)",
                minWidth: "280px",
              }}
            >
              📋 Fill Details Now
            </a>

            {/* WhatsApp Button */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.secondary_button"
              className="inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 active:scale-95"
              style={{
                background: "#2BBE60",
                boxShadow: "0 6px 24px rgba(43,190,96,0.35)",
                minWidth: "260px",
              }}
            >
              <MessageCircle className="w-6 h-6" /> WhatsApp Par Baat Karein
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-6"
            style={{ background: "#0E2B3B", border: "1px solid #173A4A" }}
          >
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 shrink-0" style={{ color: "#F08A2B" }} />
              <a
                href="mailto:digitalgrowthhub143@gmail.com"
                className="text-brand-body text-sm hover:text-brand-orange transition-colors"
              >
                digitalgrowthhub143@gmail.com
              </a>
            </div>
            <div className="hidden sm:block w-px h-5 bg-[#173A4A]" />
            <div className="flex items-center gap-3">
              <MapPin
                className="w-5 h-5 shrink-0"
                style={{ color: "#F08A2B" }}
              />
              <span className="text-brand-body text-sm">
                Morena, Madhya Pradesh, India
              </span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-[#173A4A]" />
            <div className="flex items-center gap-3">
              <Shield
                className="w-5 h-5 shrink-0"
                style={{ color: "#2BBE60" }}
              />
              <span className="text-brand-body text-sm">24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section
        className="py-24 relative overflow-hidden text-center"
        style={{ backgroundColor: "#071824" }}
      >
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(240,138,43,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6 uppercase tracking-wider"
              style={{
                background: "rgba(240,138,43,0.15)",
                border: "1px solid rgba(240,138,43,0.4)",
                color: "#F08A2B",
              }}
            >
              <Zap className="w-3.5 h-3.5" /> Limited Time Offer
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-brand-heading mb-4 leading-tight">
              🚀 Aaj hi apne business ko{" "}
              <span style={{ color: "#F08A2B" }}>grow karein!</span>
            </h2>
            <p className="text-brand-body text-lg mb-8">
              Offline business ko online brand banayein — ek free call se shuru
              karein!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 btn-whatsapp rounded-full px-8 py-4 text-base"
                data-ocid="cta.primary_button"
              >
                📲 WhatsApp Now
              </a>
              <a
                href={CALL_LINK}
                className="inline-flex items-center gap-2.5 btn-orange rounded-full px-8 py-4 text-base orange-pulse"
                data-ocid="cta.secondary_button"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
            <p className="text-sm font-bold" style={{ color: "#F08A2B" }}>
              ⚠️ Offer kabhi bhi band ho sakta hai!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
