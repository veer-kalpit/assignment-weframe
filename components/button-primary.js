import Button from "./button";
import PropTypes from "prop-types";

const ButtonPrimary = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start ${className}`}
    >
      <Button />
    </button>
  );
};

ButtonPrimary.propTypes = {
  className: PropTypes.string,
};

export default ButtonPrimary;
