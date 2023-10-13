import RecommendedHolidayCardContaine from "./RecommendedHolidayCardContaine";
import "./RecommendedHolidaysCard.css";

const RecommendedHolidaysCard = () => {
  return (
    <div className="recommended-holidays-container">
      <div className="rec-title">
        <h2 className="recommended-holidays">Recommended Holidays</h2>
        <button className="view-all-holidays-parent">
          <div className="view-all-holidays">View all holidays</div>
          <img className="arrow-right-icon2" alt="" src="/arrowright2.svg" />
        </button>
      </div>
      <div className="rec-cards-container">
        <RecommendedHolidayCardContaine
          packageDetails="/unsplash5mv818tzxeo@2x.png"
          packageDestination="Bali"
          packageDuration="4D3N"
          packagePrice="$899"
        />
        <RecommendedHolidayCardContaine
          packageDetails="/switzerlandimage@2x.png"
          packageDestination="Swiss"
          packageDuration="6D5N"
          packagePrice="$900"
        />
        <RecommendedHolidayCardContaine
          packageDetails="/boracayimage@2x.png"
          packageDestination="Boracay"
          packageDuration="5D4N"
          packagePrice="$699"
        />
        <RecommendedHolidayCardContaine
          packageDetails="/palawanimage@2x.png"
          packageDestination="Palawan"
          packageDuration="4D3N"
          packagePrice="$789"
        />
      </div>
      <div className="view-all-bottom1">
        <div className="view-all-holidays1">View all holidays</div>
        <img className="arrow-right-icon2" alt="" src="/arrowright3.svg" />
      </div>
    </div>
  );
};

export default RecommendedHolidaysCard;
