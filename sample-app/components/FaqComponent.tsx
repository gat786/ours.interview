import React from "react";

import styles from "components/components.module.css";

export interface FAQModel {
  question: string;
  answer: string;
}

const FrequentlyAskedQuestion = (props: FAQModel) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div
      className="py-2 mlb-4 border-b cursor-pointer"
      onClick={() => {
        setIsOpen((currentState) => !currentState);
      }}
    >
      <div
        className={`flex flex-row font-medium justify-between items-center gap-4 text-sm text-primaryColor`}
      >
        {props.question}
        <i
          className={`material-icons square-aspect duration-500 text-sm rounded-full ${
            isOpen && "transform rotate-180"
          }`}
        >
          expand_less
        </i>
      </div>
      <div
        className={`text-sm ${
          styles.transitionDuration
        } duration-300 text-gray-700 ${
          isOpen ? `${styles.openGracefully}` : "max-h-0 overflow-hidden mlb-0"
        }`}
      >
        {props.answer}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
