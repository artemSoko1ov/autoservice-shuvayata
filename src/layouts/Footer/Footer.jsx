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
                <a href="https://yandex.ru/maps/-/CLRjrUoH" target="_blank">
                  Пермский край, <br/>д. Шуваята,  ул. Речная, 11
                </a>
              </li>
              <li className="footer__contacts-element">
                <a href="tel:+79958606236" target="_blank">+7 (995) 860-62-36</a>
              </li>
              <li className="footer__contacts-element">
                <a href="mailto:shuvayata59@yandex.ru" target="_blank">shuvayata59@yandex.ru</a>
              </li>
              <li className="footer__contacts-element">Пн–Сб: 9:00–19:00</li>
            </ul>
          </div>

          <div className="footer__socials">
            <h2 className="h4">Соцсети</h2>
            <ul className="footer__contacts-list">
              <li className="footer__contacts-element">
                <a href="https://t.me/pilot_am" target="_blank">
                  <Telegram />
                  <p>Telegram</p>
                </a>
              </li>
              <li className="footer__contacts-element">
                <a href="https://vk.com/vazilla777" target="_blank">
                  <Vkontakte />
                  <p>VK</p>
                </a>
              </li>
              <li className="footer__contacts-element">
                <a href="https://wa.me/79958606236" target="_blank">
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
