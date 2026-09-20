import { Link, NavLink, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";
import { ArrowRight, BarChart3, Check, ChevronRight, CircleCheck, FileText, Share2, Layout, Lightbulb, Mail, Menu, Megaphone, Palette, PenTool, Search, Sparkles, Target, TrendingUp, Users, Video, X, Waves } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";

export function PrivacyPage() {
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
            <strong>
              <a href="mailto:connectandconvert.digital@gmail.com">
                connectandconvert.digital@gmail.com
              </a>
            </strong>
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
