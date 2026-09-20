import { Link, NavLink, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useReducedMotion } from "../app/motion";

export function MotionLink({
  to,
  className,
  children,
}: {
  to: string;
  className: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="motion-link"
      whileHover={reduce ? undefined : { y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 450, damping: 30 }}
    >
      <Link to={to} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
