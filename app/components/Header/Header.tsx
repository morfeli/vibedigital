import { useEffect, useState } from "react";
import { MobileBtn } from "./MobileBtn";
import { Navigation } from "./Navigation";
import MobileMenu from "~/components/Header/MobileMenu";
import { Logo } from "../UI/Logo";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [innerWidth, setInnerWidth] = useState<number>();

  const toggleMenuHandler = (): void => {
    setIsOpen((current) => !current);
  };

  const closeMenuHandler = (): void => {
    setIsOpen(false);
  };

  const changeWidth = () => setInnerWidth(window.innerWidth);

  useEffect(() => {
    changeWidth();

    window.addEventListener("resize", changeWidth);

    if (innerWidth == 768) {
      setIsOpen(false);
    }

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [innerWidth]);

  useEffect(() => {
    const section = document.getElementById("body");

    if (isOpen) {
      section?.classList.add("open");
    } else {
      section?.classList.remove("open");
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 lg:px-10 z-50 p-4 overflow-hidden overflow-y-scroll lg:py-2 flex justify-between w-full items-center bg-orange1 shadow-lg">
      <Navigation />
      <div className="flex justify-between items-center w-full large-tablet:hidden">
        <Logo classnames="object-cover" />
        <MobileBtn isOpen={isOpen} toggleMenu={toggleMenuHandler} />
        <MobileMenu isOpen={isOpen} closeMenu={closeMenuHandler} />
      </div>
    </header>
  );
};
