import {
  createContext,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleCheck,
  FileText,
  Share2,
  Layout,
  Lightbulb,
  Mail,
  Menu,
  Megaphone,
  Palette,
  PenTool,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
  X,
  Waves,
} from "lucide-react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";

const MotionPreferenceContext = createContext(false);
const useReducedMotion = () => useContext(MotionPreferenceContext);
const HERO_FRAME_COUNT = 60;
const heroFrame = (index: number) =>
  `/hero-frames/frame-${String(index + 1).padStart(3, "0")}.webp`;

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    text: "Consistent, strategic content and community management that keeps your brand active and relevant.",
  },
  {
    icon: PenTool,
    title: "Content Creation & Design",
    text: "Scroll-stopping graphics and on-brand content shaped around your audience.",
  },
  {
    icon: Megaphone,
    title: "Meta & Google Ads",
    text: "Focused paid campaigns designed to improve reach, enquiries and measurable action.",
  },
  {
    icon: Palette,
    title: "Branding & Strategy",
    text: "A unified visual direction, voice and strategy across every customer touchpoint.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    text: "Campaigns that move beyond attention and create real opportunities for your business.",
  },
  {
    icon: Search,
    title: "Content Writing & SEO",
    text: "Search-friendly content that communicates clearly, earns attention and drives discovery.",
  },
  {
    icon: Video,
    title: "Reels & Short-form Content",
    text: "Fast, engaging stories made for the way audiences consume content today.",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    text: "Data-informed decisions, ongoing monitoring and continuous campaign improvement.",
  },
];
const process = [
  ["01", "Discover", "We learn your business, audience, market and goals."],
  ["02", "Strategize", "We build a focused plan aligned with your brand."],
  ["03", "Create", "We develop on-brand visuals, copy and campaigns."],
  ["04", "Launch", "We publish, promote and activate the strategy."],
  ["05", "Optimize", "We monitor performance and improve what matters."],
  ["06", "Scale", "We report clearly and expand what works."],
];

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", description);
  }, [title, description]);
  return null;
}
function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Connect and Convert home">
      <img src="/logo.jpg" alt="" />
      <span>
        <b>
          Connect <i>&</i> Convert
        </b>
        <small>Turning Attention Into Action</small>
      </span>
    </Link>
  );
}
function Header({
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
          <NavLink to="/contact">Contact us</NavLink>
          <MotionLink to="/contact" className="button small">
            Let’s grow together <ArrowRight size={16} />
          </MotionLink>
        </nav>
      </div>
    </header>
  );
}
function Footer() {
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
const SectionHead = ({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) => (
  <div className="section-head">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>
);

function MotionLink({
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
function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduce ? 0.2 : 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
const cardMotion = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.45,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

function ScrollHero() {
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
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
            <span></span>Hands-on experience across Haryana & Punjab
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Home() {
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
                transition={{ ...cardMotion.transition, delay: i * 0.045 }}
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

function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="page-hero">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{copy}</p>
    </section>
  );
}
function About() {
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

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    setSent(true);
    e.currentTarget.reset();
  };
  return (
    <>
      <Seo
        title="Contact Us | Connect & Convert"
        description="Tell Connect & Convert about your brand, marketing goals and the support you need."
      />
      <main>
        <PageHero
          eyebrow="Start a conversation"
          title="Let’s turn your next idea into action."
          copy="Share a little about your business and what you want to achieve. We’ll use it to shape a focused first conversation."
        />
        <section className="section contact-layout">
          <div className="form-card">
            <form onSubmit={submit}>
              <div className="field-row">
                <label>
                  Full name
                  <input name="name" required placeholder="Your name" />
                </label>
                <label>
                  Business / company
                  <input name="business" required placeholder="Business name" />
                </label>
              </div>
              <div className="field-row">
                <label>
                  Email address
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                  />
                </label>
                <label>
                  Phone <small>(optional)</small>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                  />
                </label>
              </div>
              <div className="field-row">
                <label>
                  Service interested in
                  <select name="service" required defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Monthly marketing budget <small>(optional)</small>
                  <select name="budget" defaultValue="">
                    <option value="">Prefer not to say</option>
                    <option>Under ₹25,000</option>
                    <option>₹25,000-₹50,000</option>
                    <option>₹50,000-₹1,00,000</option>
                    <option>₹1,00,000+</option>
                  </select>
                </label>
              </div>
              <label>
                Tell us about your goals
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="What would you like to achieve?"
                />
              </label>
              <label className="consent">
                <input type="checkbox" required />{" "}
                <span>
                  I agree that Connect & Convert may use these details to
                  respond to my enquiry. See the{" "}
                  <Link to="/privacy-policy">Privacy Policy</Link>.
                </span>
              </label>
              <button className="button" type="submit">
                Prepare my enquiry <ArrowRight />
              </button>
              {sent && (
                <div className="success">
                  <Check />{" "}
                  <div>
                    <b>Your enquiry has been prepared.</b>
                    <span>
                      This demo form is working locally. Connect an email
                      service or backend before launch to deliver submissions.
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>
          <aside>
            <span className="eyebrow">What happens next</span>
            {[
              ["01", "Tell us about your goals"],
              ["02", "We review your needs"],
              ["03", "We recommend a focused plan"],
            ].map(([n, t]) => (
              <div className="next" key={n}>
                <b>{n}</b>
                <span>{t}</span>
              </div>
            ))}
            <div className="note">
              <Mail />
              <div>
                <b>Contact details needed</b>
                <p>
                  Add the agency’s verified email and phone number here before
                  publishing.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}

function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Connect & Convert"
        description="Read the Connect & Convert website privacy policy."
      />
      <main>
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          copy="How information is handled when you visit this website or submit an enquiry."
        />
        <article className="policy">
          <p className="updated">Last updated: September 12, 2026</p>
          <p>
            This policy explains how Connect & Convert (“we”, “us”, or “our”)
            handles personal information collected through this website. It is a
            general website policy and should be reviewed for your specific
            business and jurisdiction before publication.
          </p>
          <h2>1. Information we collect</h2>
          <p>
            When you use the enquiry form, we may collect your name, business or
            company name, email address, optional phone number, service
            interests, optional budget range, and the message you provide. Basic
            technical data such as browser type, device type, IP address, and
            visited pages may also be processed by hosting or security
            providers.
          </p>
          <h2>2. How we use information</h2>
          <p>
            We use information to respond to enquiries, understand your business
            needs, recommend relevant services, maintain website security,
            improve the website, and comply with legal obligations. We do not
            sell personal information.
          </p>
          <h2>3. Consent and legal bases</h2>
          <p>
            Where applicable, we process enquiry details with your consent
            and/or because it is necessary to take steps at your request before
            entering a contract. You may withdraw consent, although this does
            not affect earlier lawful processing.
          </p>
          <h2>4. Cookies and analytics</h2>
          <p>
            This version of the website does not intentionally set non-essential
            advertising or analytics cookies. If analytics, advertising pixels,
            embedded media, or similar tools are added, this section and any
            consent mechanism must be updated before those tools are enabled.
          </p>
          <h2>5. Sharing and service providers</h2>
          <p>
            Information may be shared only with service providers needed to
            host, secure, operate, or communicate through the website, subject
            to suitable confidentiality and data-protection obligations.
            Information may also be disclosed when required by law or to protect
            legitimate rights and safety.
          </p>
          <h2>6. Retention</h2>
          <p>
            Enquiry details should be retained only as long as reasonably needed
            to respond, maintain relevant business records, resolve disputes, or
            meet legal requirements. Actual retention periods should be
            documented before launch.
          </p>
          <h2>7. Security</h2>
          <p>
            Reasonable technical and organizational safeguards are used to
            protect information. No internet transmission or storage system can
            be guaranteed to be completely secure.
          </p>
          <h2>8. Your rights</h2>
          <p>
            Depending on applicable law, you may request access, correction,
            deletion, restriction, portability, or objection to processing of
            your personal information. You may also withdraw consent or contact
            an appropriate data-protection authority.
          </p>
          <h2>9. Children’s privacy</h2>
          <p>
            This website and its services are intended for businesses and are
            not directed to children. We do not knowingly collect personal
            information from children.
          </p>
          <h2>10. Third-party links</h2>
          <p>
            The website may later link to external services or social platforms.
            Their privacy practices are governed by their own policies, not this
            one.
          </p>
          <h2>11. Policy updates</h2>
          <p>
            We may update this policy to reflect changes to the website, our
            services, or legal requirements. The date above will indicate the
            latest revision.
          </p>
          <h2>12. Contact</h2>
          <p>
            For privacy requests, contact:{" "}
            <strong>[Insert privacy contact email]</strong>.
          </p>
          <div className="legal-note">
            <FileText />
            <span>
              This policy is a general starting point and is not legal advice.
              Have it reviewed and add verified business/contact details before
              publishing.
            </span>
          </div>
        </article>
      </main>
    </>
  );
}
function CTA() {
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
function NotFound() {
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
export default function App() {
  const location = useLocation();
  const [reduced, setReduced] = useState(() => {
    const saved = localStorage.getItem("motion-preference");
    return saved
      ? saved === "reduce"
      : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  useEffect(() => {
    document.documentElement.dataset.motion = reduced ? "reduce" : "full";
    localStorage.setItem("motion-preference", reduced ? "reduce" : "full");
  }, [reduced]);
  return (
    <MotionPreferenceContext.Provider value={reduced}>
      <MotionConfig reducedMotion={reduced ? "always" : "never"}>
        <ScrollTop />
        <Header
          reduced={reduced}
          onToggleMotion={() => setReduced((value) => !value)}
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{
              duration: reduced ? 0.12 : 0.24,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </MotionConfig>
    </MotionPreferenceContext.Provider>
  );
}
