import "./Tabs.scss";
import priceList from "@/components/Tabs/priceList.js";
import { useState } from "react";
import classNames from "classnames";
import AccordionGroup from "@/components/AccordionGroup";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("ВАЗ");

  return (
    <div className="tabs">
      <div className="tabs__head">
        {Object.keys(priceList).map((marka) => (
          <div
            key={marka}
            className={classNames("tabs__element", {
              "is-active": activeTab === marka,
            })}
          >
            <button
              className="tabs__element-button"
              type="button"
              onClick={() => setActiveTab(marka)}
            >
              {marka}
            </button>
          </div>
        ))}
      </div>
      <div className="tabs__body">
        <AccordionGroup categories={priceList[activeTab]} />
      </div>
    </div>
  );
};

export default Tabs;
