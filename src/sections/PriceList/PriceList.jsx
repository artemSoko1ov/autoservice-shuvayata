import "./PriceList.scss";
import Section from "@/layouts/Section";
import Tabs from "@/components/Tabs";

const PriceList = (props) => {
  const {} = props;
  return (
    <Section className="price-list" title="Прайс лист">
      <Tabs />
    </Section>
  );
};

export default PriceList;
