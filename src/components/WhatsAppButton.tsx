import { motion } from "motion/react";
import { useReducedMotion } from "../app/motion";

export default function WhatsAppButton() {
  const reduce = useReducedMotion();
  return <motion.a className="whatsapp-float" href="https://wa.me/918168716667" target="_blank" rel="noopener noreferrer" aria-label="Chat with Connect & Convert on WhatsApp" title="Chat on WhatsApp" whileHover={reduce ? undefined : { scale: 1.1 }} whileTap={reduce ? undefined : { scale: 0.94 }} transition={{ type: "spring", stiffness: 420, damping: 26 }}>
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12.02 0C5.43 0 .07 5.35.07 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.24-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.58 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.19-3.47-8.39Zm-8.48 18.3h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.7.97.99-3.6-.23-.37a9.88 9.88 0 0 1-1.51-5.27C2.17 6.5 6.59 2.08 12.02 2.08c2.63 0 5.1 1.03 6.96 2.9a9.84 9.84 0 0 1 2.89 7c0 5.43-4.42 9.84-9.85 9.84Zm5.4-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.47-.87-.77-1.46-1.72-1.63-2.02-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" /></svg><span>WhatsApp</span>
  </motion.a>;
}
