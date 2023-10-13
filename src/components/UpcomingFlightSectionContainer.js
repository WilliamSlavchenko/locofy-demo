import { useCallback } from "react";
import FlightSearchContainer from "./FlightSearchContainer";
import "./UpcomingFlightSectionContainer.css";

const UpcomingFlightSectionContainer = () => {
  const onHotelClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <div className="upcoming-flight-section">
      <div className="upcoming-flight-section1">
        <b className="recent-searches">Recent Searches</b>
        <div className="flight-details">
          <div className="recent-searches1">
            <FlightSearchContainer
              flightOrigin="SIN"
              flightDestination="/flight-icons.svg"
              flightOriginCode="LAX"
              departureDate="Depart on: "
              returnDate="7 Sep 2021"
            />
            <FlightSearchContainer
              flightOrigin="MY"
              flightDestination="/flight-icons1.svg"
              flightOriginCode="DUB"
              departureDate="Depart on:"
              returnDate=" 9 Sep 2021"
            />
          </div>
          <div className="prepare-menu">
            <div className="recent-searches">Prepare for your trip</div>
            <div className="trip-menus">
              <button className="hotel" onClick={onHotelClick}>
                <img className="hotel-icon" alt="" src="/hotel-icon.svg" />
                <div className="hotel1">Hotel</div>
              </button>
              <button className="hotel">
                <img
                  className="attractions-icon"
                  alt=""
                  src="/attractions-icon.svg"
                />
                <div className="attractions1">Attractions</div>
              </button>
              <button className="hotel">
                <img className="hotel-icon" alt="" src="/eats-icon.svg" />
                <div className="attractions1">Eats</div>
              </button>
              <button className="hotel">
                <img
                  className="attractions-icon"
                  alt=""
                  src="/commute-icon.svg"
                />
                <div className="attractions1">Commute</div>
              </button>
              <button className="hotel">
                <img className="taxi-icon" alt="" src="/taxi-icon.svg" />
                <div className="taxi1">Taxi</div>
              </button>
              <button className="hotel">
                <img
                  className="attractions-icon"
                  alt=""
                  src="/movies-icon.svg"
                />
                <div className="attractions1">Movies</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFlightSectionContainer;
