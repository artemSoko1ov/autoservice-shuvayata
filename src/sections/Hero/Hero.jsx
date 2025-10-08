import "./Hero.scss";
import Button from "../../components/Button";

const Hero = (props) => {
  const {} = props;
  return (
    <section className="hero">
      <div className="hero__inner container">
        <div className="hero__body">
          <div className="hero__title">
            <h1>Автосервис Шуваята</h1>
            <h2 className="h3">ремонт отечественного автопрома</h2>
          </div>
          <div className="hero__description">
            <p>
              Диагностика, ремонт и обслуживание ВАЗ, ГАЗ, УАЗ и других
              российских авто. Быстро, качественно, надёжно.
            </p>
          </div>
          <div className="hero__link">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
