import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header/Header";
import { Hero } from "~/components/Hero/Hero";

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
    </div>
  );
}
