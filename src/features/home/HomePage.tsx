import { useEffect } from "react";
import { Hero } from "./components/Hero";
import { WorkList } from "./components/WorkList";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Wordmark } from "./components/Wordmark";
import { Footer } from "@/shared/components/Footer";
import { useScrollToOnMount } from "@/shared/hooks/useSectionLink";

export function HomePage() {
  const scrollToOnMount = useScrollToOnMount();

  useEffect(() => {
    scrollToOnMount();
    // Only run on mount: this consumes a one-shot navigation handoff.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main id="home" className="wrap">
      <Hero />
      <WorkList />
      <About />
      <Education />
      <Contact />
      <Wordmark />
      <Footer />
    </main>
  );
}
