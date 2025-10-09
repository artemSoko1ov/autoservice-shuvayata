import "./Section.scss";
import classNames from "classnames";

const Section = (props) => {
  const { className, title, children } = props;
  return (
    <section className={classNames(className, "section")}>
      <div
        className={classNames(
          `${className}__inner`,
          "section__inner",
          "container",
        )}
      >
        <h1>{title}</h1>
        <div className={`${className}__body`}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
