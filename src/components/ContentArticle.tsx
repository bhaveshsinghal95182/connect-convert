import { Link, NavLink, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";
import { ArrowRight, BarChart3, Check, ChevronRight, CircleCheck, FileText, Share2, Layout, Lightbulb, Mail, Menu, Megaphone, Palette, PenTool, Search, Sparkles, Target, TrendingUp, Users, Video, X, Waves } from "lucide-react";
import MarkdownContent from "./MarkdownContent";
import type { MarkdownFile } from "../content/markdown";
import { NotFoundPage } from "../pages/NotFoundPage";

export function ContentArticle({ items }: { items: MarkdownFile[] }) {
  const { slug } = useParams();
  const item = items.find((entry) => entry.slug === slug);
  if (!item) return <NotFoundPage />;

  return (
    <main>
      <section className="article-hero">
        <Link to="/blogs" className="back-link"><ArrowRight size={16} /> Back to blogs</Link>
        <span className="eyebrow">Article</span>
        <h1>{item.title}</h1>
        <p>{item.excerpt}</p>
      </section>
      <article className="markdown-shell"><MarkdownContent content={item.content} /></article>
    </main>
  );
}
