import Hero from "../../sections/Hero";
import Services from "../../sections/Services";
import Booking from "../../sections/Booking";
import React from "react";

const Content = (props) => {
  const {} = props;
  return (
    <main className="content">
      <Hero />
      <Services />
      <Booking />
    </main>
  );
};

export default Content;
