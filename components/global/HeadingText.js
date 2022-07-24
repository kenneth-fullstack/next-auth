import React from "react";

const HeadingText = ({ text, fontSize, textColor, customContainerStyle, customStyle }) => {
  return (
    <div className={`${customContainerStyle}`}>
      <h1 className={`${fontSize} ${textColor} ${customStyle}`}>{text}</h1>
    </div>
  );
};

export default HeadingText;
