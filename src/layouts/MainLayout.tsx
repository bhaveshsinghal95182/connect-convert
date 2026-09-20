import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ScrollTop } from "../components/ScrollTop";
import WhatsAppButton from "../components/WhatsAppButton";

export default function MainLayout({ reduced, onToggleMotion }: { reduced: boolean; onToggleMotion: () => void }) {
  const location = useLocation();

  return <>
    <ScrollTop />
    <Header reduced={reduced} onToggleMotion={onToggleMotion} />
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={location.pathname} initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }} transition={{ duration: reduced ? 0.12 : 0.24, ease: [0.16, 1, 0.3, 1] }}>
        <Outlet />
      </motion.div>
    </AnimatePresence>
    <Footer />
    <WhatsAppButton />
  </>;
}
