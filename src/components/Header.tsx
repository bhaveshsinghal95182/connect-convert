import { FormEvent, useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";
import { ArrowRight, BarChart3, Check, ChevronRight, CircleCheck, FileText, Share2, Layout, Lightbulb, Mail, Menu, Megaphone, Palette, PenTool, Search, Sparkles, Target, TrendingUp, Users, Video, X, Waves } from "lucide-react";
import { AnimatePresence, MotionConfig, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useReducedMotion } from "../app/motion";
import { Logo } from "./Logo";
import { MotionLink } from "./MotionLink";

export function Header({
  reduced,
  onToggleMotion,
}: {
  reduced: boolean;
  onToggleMotion: () => void;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.25,
  });

  return (
    <header>
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <div className="nav-wrap">
        <Logo />

        <div className="nav-actions">
          <button
            className="motion-toggle"
            type="button"
            aria-label={
              reduced ? "Enable full motion" : "Enable reduced motion"
            }
            aria-pressed={reduced}
            title={reduced ? "Enable full motion" : "Reduce motion"}
            onClick={onToggleMotion}
          >
            <Waves size={16} />
            <span>{reduced ? "Reduced motion" : "Full motion"}</span>
            <i aria-hidden="true">
              <b />
            </i>
          </button>

          <motion.button
            whileTap={reduce ? undefined : { scale: 0.9 }}
            className="menu"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </motion.button>
        </div>

        <nav className={open ? "open" : ""} onClick={() => setOpen(false)}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/blogs">Blog</NavLink>
          <NavLink to="/contact">Contact us</NavLink>

          <MotionLink to="/contact" className="button small">
            Let’s grow together <ArrowRight size={16} />
          </MotionLink>
        </nav>
      </div>
    </header>
  );
}
