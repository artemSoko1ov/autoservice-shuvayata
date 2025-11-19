import "./Tabs.scss";
import { useState } from "react";
import classNames from "classnames";
import AccordionGroup from "@/components/AccordionGroup";

const brands = ["ВАЗ", "ГАЗ", "УАЗ", "KAMAZ", "MAZ"];

const Tabs = () => {
  const [activeBrand, setActiveBrand] = useState("ВАЗ");

  return (
    <div className="tabs">
      <div className="tabs__head">
        {brands.map((brand) => (
          <button
            key={brand}
            className={classNames("tabs__element", {
              "is-active": activeBrand === brand,
            })}
            onClick={() => setActiveBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>

      <div className="tabs__body">
        <AccordionGroup brand={activeBrand} />
      </div>
    </div>
  );
};

export default Tabs;
