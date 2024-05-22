import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header/Header";
import { Hero } from "~/components/Hero/Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
      <Hero />
      <p>hello</p>
    </div>
  );
}
