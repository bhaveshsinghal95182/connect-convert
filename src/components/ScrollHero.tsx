import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, BarChart3, Check, ChevronRight, CircleCheck, FileText, Share2, Layout, Lightbulb, Mail, Menu, Megaphone, Palette, PenTool, Search, Sparkles, Target, TrendingUp, Users, Video, X, Waves } from "lucide-react";
import { AnimatePresence, MotionConfig, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useReducedMotion } from "../app/motion";
import { MotionLink } from "./MotionLink";

const HERO_FRAME_COUNT = 60;
const heroFrame = (index: number) => `/hero-frames/frame-${String(index + 1).padStart(3, "0")}.webp`;

export function ScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [frame, setFrame] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reduce) return;

    const reveal = Math.min(1, progress / 0.18);

    heroRef.current?.style.setProperty("--film-progress", String(reveal));

    heroRef.current?.style.setProperty("--scroll-progress", String(progress));

    const next = Math.min(
      HERO_FRAME_COUNT - 1,
      Math.floor(progress * HERO_FRAME_COUNT),
    );

    setFrame((current) => (current === next ? current : next));
  });

  useEffect(() => {
    if (reduce) {
      setFrame(0);
      heroRef.current?.style.setProperty("--film-progress", "0");
      return;
    }

    const images = Array.from({ length: HERO_FRAME_COUNT }, (_, index) => {
      const image = new Image();
      image.decoding = "async";
      image.src = heroFrame(index);
      return image;
    });

    return () =>
      images.forEach((image) => {
        image.src = "";
      });
  }, [reduce]);

  return (
    <section ref={sectionRef} className="scroll-hero">
      <div ref={heroRef} className="hero video-hero">
        <img
          className="hero-still"
          src="/hero-poster.jpg"
          alt="Abstract connected points introducing the Connect & Convert brand film"
        />

        <motion.img
          key={frame}
          className="hero-frames"
          src={heroFrame(frame)}
          alt=""
          aria-hidden="true"
          initial={false}
        />

        <div className="video-shade" aria-hidden="true"></div>

        <div className="film-status" aria-hidden="true">
          <span className="film-index">
            {String(frame + 1).padStart(2, "0")}
          </span>

          <span className="film-rule">
            <i />
          </span>

          <span>Scroll through brand film</span>
        </div>

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="eyebrow">
            <Sparkles size={15} /> Social media marketing agency
          </span>

          <h1>
            Build your brand.
            <br />
            <em>Get real results.</em>
          </h1>

          <p>
            Strategy, content and campaigns that help businesses look
            professional, connect with the right audience and turn attention
            into measurable action.
          </p>

          <div className="hero-actions">
            <MotionLink className="button" to="/contact">
              Let’s grow together <ArrowRight />
            </MotionLink>

            <motion.a
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.98 }}
              className="button ghost"
              href="#services"
            >
              Explore our services <ChevronRight />
            </motion.a>
          </div>

          <div className="region">
            <span></span>
            Hands-on experience across Haryana & Punjab
          </div>
        </motion.div>
      </div>
    </section>
  );
}
