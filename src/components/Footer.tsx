import { Link, NavLink, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";
import { ArrowRight, BarChart3, Check, ChevronRight, CircleCheck, FileText, Share2, Layout, Lightbulb, Mail, Menu, Megaphone, Palette, PenTool, Search, Sparkles, Target, TrendingUp, Users, Video, X, Waves } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Logo />

          <p>
            Creative strategy, content and marketing built to turn audience
            attention into business action.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/privacy-policy">Privacy policy</Link>
        </div>

        <div>
          <h3>Core services</h3>
          <span>Social media management</span>
          <span>Content & design</span>
          <span>Brand strategy</span>
          <span>Lead generation</span>
        </div>

        <div>
          <h3>Ready to grow?</h3>
          <p>Tell us what your brand needs. We’ll help shape the next move.</p>

          <Link to="/contact" className="text-link">
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="copyright">
        <span>© 2026 Connect & Convert. All rights reserved.</span>
        <span>Built for attention. Designed for action.</span>
      </div>
    </footer>
  );
}
