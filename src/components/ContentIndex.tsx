import { Link, NavLink, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";
import { ArrowRight, BarChart3, Check, ChevronRight, CircleCheck, FileText, Share2, Layout, Lightbulb, Mail, Menu, Megaphone, Palette, PenTool, Search, Sparkles, Target, TrendingUp, Users, Video, X, Waves } from "lucide-react";
import { PageHero } from "./PageHero";
import type { MarkdownFile } from "../content/markdown";

export function ContentIndex({ items }: { items: MarkdownFile[] }) {
  return (
    <main>
      <PageHero
        eyebrow="From the studio"
        title="Ideas worth sharing."
        copy="Practical thoughts, observations and lessons from the world of marketing."
      />
      <section className="section content-index">
        <div className="content-index-grid">
          {items.length ? items.map((item) => (
            <Link className="content-card" to={`/blogs/${item.slug}`} key={item.slug}>
              <span className="eyebrow">Article</span>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
              <span className="text-link">Read more <ArrowRight size={16} /></span>
            </Link>
          )) : <div className="content-empty"><FileText /><h2>No blogs yet</h2><p>Add Markdown files to the <code>blogs/</code> folder and they will appear here automatically.</p></div>}
        </div>
      </section>
    </main>
  );
}
