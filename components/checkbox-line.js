import PropTypes from "prop-types";

const CheckboxLine = ({ className = "", aDREXpharma }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start gap-2.5 text-left text-base text-secondary-text font-captions ${className}`}
    >
      <input className="m-0 h-4 w-4 relative" type="checkbox" />
      <div className="flex-1 relative">{aDREXpharma}</div>
    </div>
  );
};

CheckboxLine.propTypes = {
  className: PropTypes.string,
  aDREXpharma: PropTypes.string,
};

export default CheckboxLine;
