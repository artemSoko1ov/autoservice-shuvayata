import "./AccordionGroup.scss";
import Accordion from "@/components/Accordion/index.js";
import { useEffect, useState } from "react";

const AccordionGroup = (props) => {
  const { brand } = props;

  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState({});
  const [openCategory, setOpenCategory] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch(`prices/${brand}/_categories.json`);
        if (!res.ok) throw new Error("Ошибка загрузки");
        const data = await res.json();
        setCategories(data);
        setServices({});
        setOpenCategory(null);
      } catch (e) {
        console.error(e);
      }
    };

    loadCategories();
  }, [brand]);

  const handleToggle = async (category) => {
    const isClosing = openCategory === category;

    if (isClosing) {
      setOpenCategory(null);
      return;
    }

    if (!services[category]) {
      const res = await fetch(`/prices/${brand}/${category}.json`);
      const data = await res.json();
      setServices((prev) => ({ ...prev, [category]: data }));
    }

    setOpenCategory(category);
  };

  return (
    <ul className="accordion-group">
      {categories.map((category) => (
        <li className="accordion-group__item" key={category}>
          <Accordion
            categoryName={category}
            services={services[category] ?? []}
            isOpen={openCategory === category}
            onToggle={() => handleToggle(category)}
          />
        </li>
      ))}
    </ul>
  );
};

export default AccordionGroup;
