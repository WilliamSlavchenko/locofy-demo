import { useCallback } from "react";
import PopularStaysContainer from "./PopularStaysContainer";
import "./PopularStaysContainer1.css";

const PopularStaysContainer1 = () => {
  const onViewAllStaysButtonClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <div className="popular-stays">
      <div className="popular-stays-header">
        <h2 className="popular-stays1">Popular Stays</h2>
        <button
          className="view-all-stays-button"
          onClick={onViewAllStaysButtonClick}
        >
          <div className="view-all-stays">View all stays</div>
          <img className="arrow-right-icon4" alt="" src="/arrowright4.svg" />
        </button>
      </div>
      <div className="hotel-cards">
        <PopularStaysContainer
          imageDimensions="/matterhorn-suites-image@2x.png"
          accommodationType="Entire bungalow"
          accommodationName="Matterhorn Suites"
          pricePerNight="$575/night"
          reviewCount="(60 reviews)"
          rating="4.9"
          imageDimensions2="/vector.svg"
        />
        <PopularStaysContainer
          imageDimensions="/discovery-shores-image@2x.png"
          accommodationType="2-Story beachfront suite"
          accommodationName="Discovery Shores"
          pricePerNight="$360/night"
          reviewCount="(116 reviews)"
          rating="4.8"
          imageDimensions2="/vector1.svg"
          propFlex="1"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
        <PopularStaysContainer
          imageDimensions="/arctic-hut-image@2x.png"
          accommodationType="Single deluxe hut"
          accommodationName="Arctic Hut "
          pricePerNight="$420/night"
          reviewCount="(78 reviews)"
          rating="4.7"
          imageDimensions2="/vector2.svg"
          propFlex="1"
          propGap="5px"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <PopularStaysContainer
          imageDimensions="/lake-louise-image@2x.png"
          accommodationType="Deluxe King Room"
          accommodationName="Lake Louise Inn"
          pricePerNight="$244/night"
          reviewCount="(63 reviews)"
          rating="4.6"
          imageDimensions2="/vector3.svg"
          propFlex="unset"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
      </div>
      <div className="mobile-view-all-stays">
        <div className="view-all-stays1">View all stays</div>
        <img className="arrow-right-icon4" alt="" src="/arrowright5.svg" />
      </div>
    </div>
  );
};

export default PopularStaysContainer1;
