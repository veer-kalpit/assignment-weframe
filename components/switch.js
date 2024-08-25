import PropTypes from "prop-types";

const Switch = ({ className = "" }) => {
  return (
    <div className={`w-[27px] h-[15px] relative ${className}`}>
      <div className="absolute top-[3px] left-[0px] rounded-xl bg-secondary-30 w-6 h-[9px]" />
      <div className="absolute top-[0px] left-[12px] rounded-[50%] bg-primary w-[15px] h-[15px] z-[1]" />
    </div>
  );
};

Switch.propTypes = {
  className: PropTypes.string,
};

export default Switch;
