import { useMemo } from "react";
import "./TripContainer.css";

const TripContainer = ({
  destinationPrice,
  destinationPriceRange,
  propBackgroundImage,
  propWidth,
  propDisplay,
  propWidth1,
  propLeft,
}) => {
  const parisCardStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const detailsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth1,
    };
  }, [propDisplay, propWidth1]);

  const fromStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className="col-1">
      <div className="pariscard" style={parisCardStyle}>
        <div className="destination-details">
          <b className="paris">{destinationPrice}</b>
          <div className="details" style={detailsStyle}>
            <div className="div" style={divStyle}>
              {destinationPriceRange}
            </div>
            <div className="from" style={fromStyle}>
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TripContainer;
