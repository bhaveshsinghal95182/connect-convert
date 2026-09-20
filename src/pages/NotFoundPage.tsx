import { Link, NavLink, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";
import { ArrowRight, BarChart3, Check, ChevronRight, CircleCheck, FileText, Share2, Layout, Lightbulb, Mail, Menu, Megaphone, Palette, PenTool, Search, Sparkles, Target, TrendingUp, Users, Video, X, Waves } from "lucide-react";
import { Seo } from "../components/Seo";

export function NotFoundPage() {
  return (
    <main>
      <Seo
        title="Page Not Found | Connect & Convert"
        description="The requested page could not be found."
      />
      <section className="not-found">
        <b>404</b>
        <h1>This page missed the connection.</h1>
        <p>Let’s get you back to where the action is.</p>
        <Link className="button" to="/">
          Back to home <ArrowRight />
        </Link>
      </section>
    </main>
  );
}
