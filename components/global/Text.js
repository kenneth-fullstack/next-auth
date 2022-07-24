import React from "react";

const Text = ({ text, fontSize, textColor, customStyle, customContainerStyle }) => {
  return (
    <div className={`${customContainerStyle}`}>
      <p className={`${fontSize} ${textColor} ${customStyle}`}>{text}</p>
    </div>
  );
};

export default Text;
