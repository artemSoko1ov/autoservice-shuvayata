import "./Footer.scss";
import Logo from "../../assets/icons/logo.svg?react";
import Telegram from "../../assets/icons/telegram.svg?react";
import Vkontakte from "../../assets/icons/vk.svg?react";
import WhatsApp from "../../assets/icons/whatsapp.svg?react";

const Footer = (props) => {
  const {} = props;
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <a
            href="/"
            className="footer__logo"
          >
            <Logo />
          </a>

          <div className="footer__contacts">
            <h2 className="h4">Контакты</h2>
            <ul className="footer__contacts-list">
              <li className="footer__contacts-element">
                г. Пермь, ул. Ленина, дом 7
              </li>
              <li className="footer__contacts-element">+7 (999) 999-99-99</li>
              <li className="footer__contacts-element">info@shuvayata.ru</li>
              <li className="footer__contacts-element">Пн–Сб: 9:00–19:00</li>
            </ul>
          </div>

          <div className="footer__socials">
            <h2 className="h4">Соцсети</h2>
            <ul className="footer__contacts-list">
              <li className="footer__contacts-element">
                <a href="#">
                  <Telegram />
                  <p>Telegram</p>
                </a>
              </li>
              <li className="footer__contacts-element">
                <a href="#">
                  <Vkontakte />
                  <p>VK</p>
                </a>
              </li>
              <li className="footer__contacts-element">
                <a href="#">
                  <WhatsApp />
                  <p>WhatsApp</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__line"></div>
          <p>&copy; 2025 «Автосервис Шуваята». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
