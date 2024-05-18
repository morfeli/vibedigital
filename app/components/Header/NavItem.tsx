import { motion } from "framer-motion";

type NavItemProps = {
  link: string;
  name: string;
  closeMenu?: React.MouseEventHandler<HTMLLIElement>;
  isMobile?: boolean;
  onClick?: () => void;
  variants?: {
    closed: {
      opacity: number;
    };
    open: {
      opacity: number;
    };
  };
};

export const NavItem = ({
  closeMenu,
  link,
  variants,
  isMobile,
  name,
  onClick,
}: NavItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const section = document.getElementById(`${link}`);
    e.preventDefault();
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      const section = document.getElementById(`${link}`);
      e.preventDefault();
      section && section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.a
      variants={variants}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="link"
      href={`#${link}`}
    >
      {isMobile ? (
        <li onClick={closeMenu} aria-hidden>
          {name}
        </li>
      ) : (
        <>
          <li
            aria-hidden
            id={`navLink-${link}`}
            onClick={onClick}
            className="flex items-center px-5 transition-colors delay-75 ease-in-out relative tracking-wide"
          >
            {name}
          </li>
        </>
      )}
    </motion.a>
  );
};
