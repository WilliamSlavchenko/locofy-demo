import "./FlightSearchContainer.css";

const FlightSearchContainer = ({
  flightOrigin,
  flightDestination,
  flightOriginCode,
  departureDate,
  returnDate,
}) => {
  return (
    <div className="flight-main-container">
      <div className="to-and-from">
        <h3 className="sin">{flightOrigin}</h3>
        <img className="flight-icons" alt="" src={flightDestination} />
        <h3 className="lax">{flightOriginCode}</h3>
      </div>
      <div className="depart-on-7-container">
        <b>{departureDate}</b>
        <span>{returnDate}</span>
      </div>
    </div>
  );
};

export default FlightSearchContainer;
