import "./Accordion.scss";
import { useState } from "react";

const Accordion = (props) => {
  const { categoryName, services } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion ${open ? "active" : ""}`}>
      <h2 className="accordion__title h3" onClick={() => setOpen(!open)}>
        {categoryName}
      </h2>

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

export default Accordion;
