import "./Header.scss";
import Logo from "../../assets/icons/logo.svg?react";

const Header = (props) => {
  const {} = props;
  return (
    <header className="header">
      <div className="header__logo">
        <Logo className="header__logo-image" />
      </div>
    </header>
  );
};

export default Header;
