import { useMemo } from "react";
import "./VariantContainedSizeLarge.css";

const VariantContainedSizeLarge = ({
  button,
  variantContainedSizeLargeBoxSizing,
  buttonColor,
  buttonDisplay,
}) => {
  const variantContainedSizeLargeStyle = useMemo(() => {
    return {
      boxSizing: variantContainedSizeLargeBoxSizing,
    };
  }, [variantContainedSizeLargeBoxSizing]);

  const buttonStyle = useMemo(() => {
    return {
      color: buttonColor,
      display: buttonDisplay,
    };
  }, [buttonColor, buttonDisplay]);

  return (
    <div
      className="variantcontained-sizelarge"
      style={variantContainedSizeLargeStyle}
    >
      <div className="button" style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

export default VariantContainedSizeLarge;
