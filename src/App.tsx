import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MotionConfig } from "motion/react";
import { MotionPreferenceContext } from "./app/motion";
import MainLayout from "./layouts/MainLayout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import BlogPostPage from "./pages/BlogPostPage";
import BlogsPage from "./pages/BlogsPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";

export default function App() {
  const [reduced, setReduced] = useState(() => {
    const saved = localStorage.getItem("motion-preference");
    return saved ? saved === "reduce" : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  useEffect(() => {
    document.documentElement.dataset.motion = reduced ? "reduce" : "full";
    localStorage.setItem("motion-preference", reduced ? "reduce" : "full");
  }, [reduced]);
  return <MotionPreferenceContext.Provider value={reduced}>
    <MotionConfig reducedMotion={reduced ? "always" : "never"}>
      <Routes>
        <Route element={<MainLayout reduced={reduced} onToggleMotion={() => setReduced((value) => !value)} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogPostPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MotionConfig>
  </MotionPreferenceContext.Provider>;
}
