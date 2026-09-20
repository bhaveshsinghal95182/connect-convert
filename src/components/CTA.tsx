import { ArrowRight, BarChart3, Check, ChevronRight, CircleCheck, FileText, Share2, Layout, Lightbulb, Mail, Menu, Megaphone, Palette, PenTool, Search, Sparkles, Target, TrendingUp, Users, Video, X, Waves } from "lucide-react";
import { MotionLink } from "./MotionLink";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <Reveal>
      <section className="cta">
        <div>
          <span className="eyebrow">Ready when you are</span>
          <h2>Let’s create attention worth converting.</h2>
        </div>

        <MotionLink to="/contact" className="button light">
          Start a conversation <ArrowRight />
        </MotionLink>
      </section>
    </Reveal>
  );
}
