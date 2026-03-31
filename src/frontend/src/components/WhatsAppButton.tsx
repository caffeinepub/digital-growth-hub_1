import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918602607617?text=Hi%2C%20I%20want%20to%20grow%20my%20business"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.button"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 text-white font-bold rounded-full shadow-2xl wa-pulse px-4 py-3"
      style={{ backgroundColor: "#2BBE60" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
    >
      <SiWhatsapp className="w-5 h-5 shrink-0" />
      <span className="hidden sm:inline text-sm">Chat Now</span>
    </motion.a>
  );
}
