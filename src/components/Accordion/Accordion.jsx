import "./Accordion.scss";
import classNames from "classnames";
import React from "react";

const Accordion = (props) => {
  const { categoryName, services, isOpen, onToggle } = props;

  return (
    <div
      className={classNames("accordion", {
        active: isOpen,
      })}
      onClick={onToggle}
    >
      <h2 className="accordion__title h3">{categoryName}</h2>

      <div className="accordion__content">
        <table>
          <tbody>
            {services.map(({ id, name, price }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(Accordion);
