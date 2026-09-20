import { FormEvent, useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";
import { ArrowRight, BarChart3, Check, ChevronRight, CircleCheck, FileText, Share2, Layout, Lightbulb, Mail, Menu, Megaphone, Palette, PenTool, Search, Sparkles, Target, TrendingUp, Users, Video, X, Waves } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";
import { services } from "../data/home";

export function ContactPage() {
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
                  <Check />

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
                <b>Contact Connect & Convert</b>

                <p>
                  Email:{" "}
                  <a href="mailto:connectandconvert.digital@gmail.com">
                    connectandconvert.digital@gmail.com
                  </a>
                </p>

                <p>
                  Phone: <a href="tel:+918168716667">8168716667</a>
                </p>

                <p>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/918168716667"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </p>

                <p>
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/connectandconvert_2026?stkn=MXUxOTFmbGk5eXNpNg=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @connectandconvert_2026
                  </a>
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
