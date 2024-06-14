import type { MetaFunction } from "@remix-run/node";

import { About } from "~/components/About/About";
import { Contact } from "~/components/Contact/Contact";
import { FAQ } from "~/components/FAQ/FAQ";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { Hero } from "~/components/Hero/Hero";
import { Process } from "~/components/Process/Process";
import { Projects } from "~/components/Projects/Projects";
import { Services } from "~/components/Services/Services";

export const meta: MetaFunction = () => {
  return [
    { title: "VibeDigital" },
    {
      content:
        "Digital agency specialized in web development, mobile app development, creative direction and branding.",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
