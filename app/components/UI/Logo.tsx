import icon from "/public/assets/vibedigital-logo-white.png";

type LogoTypes = {
  classnames: string;
};

export const Logo = ({ classnames }: LogoTypes) => {
  return <img src={icon} alt="logo" className={classnames} />;
};
