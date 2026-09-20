import { Link, NavLink, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";
import { ArrowRight, BarChart3, Check, ChevronRight, CircleCheck, FileText, Share2, Layout, Lightbulb, Mail, Menu, Megaphone, Palette, PenTool, Search, Sparkles, Target, TrendingUp, Users, Video, X, Waves } from "lucide-react";
import { CTA } from "../components/CTA";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";
import { SectionHead } from "../components/SectionHead";
import { process } from "../data/home";

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | Connect & Convert"
        description="Meet Connect & Convert, a creative digital marketing studio helping businesses across Haryana and Punjab build stronger social brands."
      />

      <main>
        <PageHero
          eyebrow="About the studio"
          title="Creativity that connects. Strategy that converts."
          copy="We help businesses turn their social media presence into a valuable, professional and engaging business asset."
        />

        <section className="section about-story">
          <div>
            <span className="eyebrow">Our story</span>
            <h2>We build brands people notice and understand.</h2>
          </div>

          <div>
            <p>
              Connect & Convert is a creative digital marketing studio focused
              on helping businesses build a strong, professional and engaging
              presence across social media platforms.
            </p>

            <p>
              With hands-on experience working with businesses across Haryana
              and Punjab, we specialize in social media management, creative
              design, content creation, digital marketing, promotional
              campaigns, SEO-focused content and brand communication.
            </p>
          </div>
        </section>

        <section className="section belief">
          <div className="quote">
            “Digital marketing is more than posting attractive designs.”
          </div>

          <div>
            <h2>Our approach starts with understanding.</h2>

            <p>
              We learn the business, identify the target audience, create
              relevant content and develop campaigns designed to improve
              visibility, engagement and customer enquiries.
            </p>

            <p>
              Every brand has a different story, audience and goal. That is why
              our content and marketing strategies are customized around the
              business and its market.
            </p>
          </div>
        </section>

        <section className="section">
          <SectionHead
            eyebrow="What guides us"
            title="Clear principles. Better brand work."
          />

          <div className="value-grid">
            {[
              [
                Target,
                "Business first",
                "Creative decisions start with your goals, not trends for trend’s sake.",
              ],
              [
                Sparkles,
                "Distinctly yours",
                "A tailored voice and visual direction instead of one-size-fits-all content.",
              ],
              [
                BarChart3,
                "Always improving",
                "We observe performance, learn from signals and refine the approach.",
              ],
            ].map(([I, t, c]) => {
              const Icon = I as typeof Target;

              return (
                <article key={t as string}>
                  <Icon />
                  <h3>{t as string}</h3>
                  <p>{c as string}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section process">
          <SectionHead
            eyebrow="Our method"
            title="Structured enough to deliver. Flexible enough to adapt."
          />

          <div className="process-grid">
            {process.map(([n, t, c]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{c}</p>
              </article>
            ))}
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}
