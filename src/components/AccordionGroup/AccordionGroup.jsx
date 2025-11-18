import "./AccordionGroup.scss";
import Accordion from "@/components/Accordion/index.js";

const AccordionGroup = (props) => {
  const { categories } = props;

  return (
    <ul className="accordion-group">
      {Object.keys(categories).map((category, index) => (
        <li className="accordion-group__item" key={index}>
          <Accordion categoryName={category} services={categories[category]} />
        </li>
      ))}
    </ul>
  );
};

export default AccordionGroup;
