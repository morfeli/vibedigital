import { NavItem } from "./NavItem";
import { MoveUpRight } from "lucide-react";

const pageLinks = [
  { name: "About", to: "about", id: 7 },
  { name: "Services", to: "services", id: 1 },
  { name: "Process", to: "process", id: 1 },
  { name: "Projects", to: "projects", id: 3 },
];

export const Navigation = () => {
  return (
    <nav className="hidden mt-2 md:flex md:justify-between md:items-center w-full px-8">
      <ul className="text-center flex text-tangelo font-geist-light bg-white p-2 rounded-3xl">
        {pageLinks.map(({ name, to, id }) => {
          return <NavItem key={id} link={to} name={name} />;
        })}
      </ul>

      <p className="text-white font-geist-bold text-3xl italic">Vibe Digital</p>

      <div className="text-center flex text-white font-geist-light items-center space-x-8">
        <button className="flex bg-white w-fit px-2 py-1 rounded-lg text-tangelo text-sm items-center">
          Contact Us
          <MoveUpRight className="scale-75" />
        </button>

        <button className="bg-white text-tangelo w-fit px-2 py-1 rounded-lg text-sm">
          Happy Clients
        </button>
      </div>
    </nav>
  );
};
