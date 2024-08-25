import { useMemo } from "react";
import PropTypes from "prop-types";

const CheckboxTag = ({ className = "", propFlex, tHC24, propMinWidth }) => {
  const checkboxTagStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const tHC24Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] py-1 px-5 bg-primary flex-1 rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkcyan-100 ${className}`}
      style={checkboxTagStyle}
    >
      <div
        className="relative text-base font-captions text-background text-left inline-block min-w-[70px]"
        style={tHC24Style}
      >
        {tHC24}
      </div>
    </button>
  );
};

CheckboxTag.propTypes = {
  className: PropTypes.string,
  tHC24: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default CheckboxTag;
