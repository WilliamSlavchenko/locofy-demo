import "./RecommendedHolidayCardContaine.css";

const RecommendedHolidayCardContaine = ({
  packageDetails,
  packageDestination,
  packageDuration,
  packagePrice,
}) => {
  return (
    <button className="rec-card-1">
      <img className="unsplash5mv818tzxeo-icon" alt="" src={packageDetails} />
      <div className="holiday-details">
        <div className="frame-parent">
          <div className="bali-parent">
            <div className="bali">{packageDestination}</div>
            <div className="d3n">{packageDuration}</div>
          </div>
          <div className="div1">{packagePrice}</div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedHolidayCardContaine;
