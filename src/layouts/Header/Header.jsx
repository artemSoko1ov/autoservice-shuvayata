import "./Header.scss";
import Logo from "../../assets/icons/logo.svg?react";

const Header = (props) => {
  const {} = props;
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/"><Logo className="header__logo-image" /></a>
      </div>
    </header>
  );
};

export default Header;
