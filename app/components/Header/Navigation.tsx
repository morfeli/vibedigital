import { motion } from "framer-motion";

import { NavItem } from "./NavItem";
import { SettingsIcon } from "lucide-react";
import { MoveUpRight } from "lucide-react";

const pageLinks = [
  { name: "About", to: "About", id: 7 },
  { name: "Services", to: "Services", id: 1 },
  { name: "Projects", to: "Projects", id: 3 },
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
        <button className="flex bg-white w-fit px-2 py-1 rounded-lg text-tangelo">
          Contact Us
          <MoveUpRight />
        </button>

        <motion.button
          className="bg-white w-fit py-1 px-2 rounded-lg text-tangelo"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="lucide lucide-settings"
          >
            <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </motion.svg>
        </motion.button>

        <button className="bg-white text-tangelo w-fit px-2 py-1 rounded-lg">
          Happy Clients
        </button>
      </div>
    </nav>
  );
};
