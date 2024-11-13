import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { FAQs } from "../constants";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <section className="container">
      <h2 className="text-5xl font-semibold mb-12">FAQs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6">
        {FAQs.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="group rounded-xl border border-gray-200 bg-gray-50 p-6"
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">{item.question}</p>

              <FontAwesomeIcon
                icon={faChevronUp}
                className={`${!activeIndex && "rotate-180"}`}
              />
            </div>
            {activeIndex === index && (
              <div>
                <p className="text-lg mt-6 font-light">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
