import { useEffect, useState } from "react";
import { MobileBtn } from "./MobileBtn";
import { Navigation } from "./Navigation";
import MobileMenu from "./MobileMenu";

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
    <header className="sticky top-0 z-50 p-4 lg:p-0 text-white border-b-2  border-b-white overflow-hidden overflow-y-scroll lg:py-4">
      <Navigation />
      <div className="flex justify-end w-full lg:justify-center">
        <MobileBtn isOpen={isOpen} toggleMenu={toggleMenuHandler} />
        <MobileMenu isOpen={isOpen} closeMenu={closeMenuHandler} />
      </div>
    </header>
  );
};
