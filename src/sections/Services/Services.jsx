import "./Services.scss";
import Section from "../../layouts/Section";
import Slider from "../../components/Slider";

const Services = (props) => {
  const {} = props;
  return (
    <Section className="services" title="Наши услуги">
      <div className="services__slider">
        <Slider />
      </div>
    </Section>
  );
};

export default Services;
