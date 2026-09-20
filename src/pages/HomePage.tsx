import { Link, NavLink, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";
import { ArrowRight, BarChart3, Check, ChevronRight, CircleCheck, FileText, Share2, Layout, Lightbulb, Mail, Menu, Megaphone, Palette, PenTool, Search, Sparkles, Target, TrendingUp, Users, Video, X, Waves } from "lucide-react";
import { AnimatePresence, MotionConfig, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { services, process } from "../data/home";
import { CTA } from "../components/CTA";
import { MotionLink } from "../components/MotionLink";
import { Reveal } from "../components/Reveal";
import { ScrollHero } from "../components/ScrollHero";
import { SectionHead } from "../components/SectionHead";
import { Seo } from "../components/Seo";

const cardMotion = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } };

export function HomePage() {
  return (
    <>
      <Seo
        title="Connect & Convert | Social Media Marketing Agency"
        description="Social media management, content, branding and performance marketing for businesses ready to turn attention into action."
      />

      <main>
        <ScrollHero />

        <section className="benefit-strip">
          {[
            [Target, "Strategic planning"],
            [Lightbulb, "Creative content"],
            [Users, "Engaging community"],
            [TrendingUp, "Real business growth"],
          ].map(([I, t], i) => {
            const Icon = I as typeof Target;

            return (
              <div key={i}>
                <Icon />
                <span>{t as string}</span>
              </div>
            );
          })}
        </section>

        <section id="services" className="section">
          <Reveal>
            <SectionHead
              eyebrow="What we do"
              title="Everything your brand needs to connect and convert."
              copy="One clear strategy across content, campaigns and communication."
            />
          </Reveal>

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }, i) => (
              <motion.article
                {...cardMotion}
                transition={{
                  ...cardMotion.transition,
                  delay: i * 0.045,
                }}
                whileHover={{ y: -5 }}
                className="service-card"
                key={title}
              >
                <div className="card-number">0{i + 1}</div>

                <div className="icon">
                  <Icon />
                </div>

                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>

          <Reveal className="service-cta">
            <div>
              <span>Need a mix of services?</span>
              <p>
                We’ll shape the right combination around your goals, audience
                and budget.
              </p>
            </div>

            <MotionLink to="/contact" className="button">
              Build my growth plan <ArrowRight size={18} />
            </MotionLink>
          </Reveal>
        </section>

        <section className="section bring">
          <div>
            <SectionHead
              eyebrow="What we bring"
              title="Creative thinking, grounded in strategy."
              copy="Your social presence should be more than attractive. It should feel consistent, relevant and useful to your business."
            />

            <Link className="button ghost" to="/about">
              Meet the studio <ArrowRight />
            </Link>
          </div>

          <div className="bring-cards">
            {[
              [
                Palette,
                "Creative design",
                "Eye-catching visuals that speak your brand’s language.",
              ],
              [
                Target,
                "Marketing strategy",
                "Purposeful plans shaped around your audience and goals.",
              ],
              [
                Layout,
                "Consistent communication",
                "One recognizable voice, look and message across platforms.",
              ],
            ].map(([I, t, c], i) => {
              const Icon = I as typeof Target;

              return (
                <article key={i}>
                  <b>0{i + 1}</b>
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
            eyebrow="How we work"
            title="A clear path from goals to growth."
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

        <section className="section why">
          <div className="why-panel">
            <span className="eyebrow">Why Connect & Convert?</span>

            <h2>Your business deserves more than random posting.</h2>

            <p>
              We combine creative execution with a customized, data-informed
              approach, so every piece of content has a reason to exist.
            </p>

            <ul>
              {[
                "Creative + strategic thinking",
                "A plan customized to your business",
                "Decisions guided by performance",
                "Consistent branding across platforms",
                "A clear focus on visibility, enquiries and growth",
              ].map((x) => (
                <li key={x}>
                  <CircleCheck />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}
