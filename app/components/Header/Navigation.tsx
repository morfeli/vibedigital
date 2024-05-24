import { NavItem } from "./NavItem";
import { MoveUpRight } from "lucide-react";
import { Logo } from "../UI/Logo";

const pageLinks = [
  { name: "About", to: "about", id: 1 },
  { name: "Services", to: "services", id: 2 },
  { name: "Process", to: "process", id: 3 },
  { name: "Projects", to: "projects", id: 4 },
];

export const Navigation = () => {
  return (
    <nav className="hidden mt-2 large-tablet:flex large-tablet:justify-between large-tablet:items-center w-full ">
      <ul className="text-center flex text-tangelo font-geist-light bg-white p-2 rounded-3xl">
        {pageLinks.map(({ name, to, id }) => {
          return <NavItem key={id} link={to} name={name} />;
        })}
      </ul>

      <div>
        <Logo classnames="object-cover w-[500px] h-[35px]" />
      </div>

      <div className="text-center flex text-white font-geist-light items-center space-x-4">
        <button className="flex bg-white w-[112px] px-2 py-1 rounded-xl text-tangelo text-sm items-center">
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
