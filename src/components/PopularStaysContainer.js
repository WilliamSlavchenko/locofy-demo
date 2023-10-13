import { useState, useMemo, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import "./PopularStaysContainer.css";

const PopularStaysContainer = ({
  imageDimensions,
  accommodationType,
  accommodationName,
  pricePerNight,
  reviewCount,
  rating,
  imageDimensions2,
  propFlex,
  propGap,
  propWidth,
  propRight,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const stayDetailsStyle = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className="hotel-card-1">
        <div className="hotel-card">
          <img
            className="matterhorn-suites-image"
            alt=""
            src={imageDimensions}
          />
          <div className="stay-details" style={stayDetailsStyle}>
            <div className="stay-details-rows">
              <div className="entire-bungalow">{accommodationType}</div>
              <h3 className="matterhorn-suites">{accommodationName}</h3>
              <div className="night">{pricePerNight}</div>
            </div>
            <img
              className="video-icon1"
              alt=""
              src="/video1.svg"
              onClick={openMatterhornPopup}
            />
          </div>
          <div className="rating">
            <div className="reviews">{reviewCount}</div>
            <div className="parent">
              <div className="div2">{rating}</div>
              <img
                className="vector-icon"
                alt=""
                src={imageDimensions2}
                style={vectorIconStyle}
              />
            </div>
          </div>
          <button className="more-details-button">
            <div className="button2">More details</div>
          </button>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopularStaysContainer;
