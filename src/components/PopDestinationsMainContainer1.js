import TripContainer from "./TripContainer";
import "./PopDestinationsMainContainer1.css";

const PopDestinationsMainContainer1 = () => {
  return (
    <div className="pop-destinations-main">
      <div className="destinations-titles">
        <div className="title-container">
          <b className="plan-your-next">Plan your next trip</b>
          <h2 className="most-popular-destinations">
            Most Popular Destinations
          </h2>
        </div>
        <button className="view-all-top">
          <div className="view-all-destinations">View all destinations</div>
          <img className="arrow-right-icon" alt="" src="/arrowright.svg" />
        </button>
      </div>
      <div className="cards-container">
        <TripContainer destinationPrice="Paris" destinationPriceRange="$699" />
        <TripContainer
          destinationPrice="Greece"
          destinationPriceRange="$1079"
          propBackgroundImage="url('/greececard@3x.png')"
          propWidth="99.92px"
          propDisplay="inline-block"
          propWidth1="unset"
          propLeft="47.39px"
        />
        <TripContainer
          destinationPrice="Norway"
          destinationPriceRange="$895"
          propBackgroundImage="url('/norwaycard@3x.png')"
          propWidth="90.92px"
          propDisplay="inline-block"
          propWidth1="90.92px"
          propLeft="38.39px"
        />
        <TripContainer
          destinationPrice="Tuscany"
          destinationPriceRange="$1245"
          propBackgroundImage="url('/tuscanycard@3x.png')"
          propWidth="100.62px"
          propDisplay="inline-block"
          propWidth1="100.62px"
          propLeft="48.09px"
        />
      </div>
      <div className="view-all-bottom">
        <div className="view-all-destinations1">View all destinations</div>
        <img className="arrow-right-icon" alt="" src="/arrowright1.svg" />
      </div>
    </div>
  );
};

export default PopDestinationsMainContainer1;
