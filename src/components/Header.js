import { useCallback } from "react";
import AccountSection from "./AccountSection";
import "./Header.css";

const Header = () => {
  const onSearchTextClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  const onHotelsTextClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <header className="top-header">
      <div className="top-container">
        <img
          className="fickleflight-logo-icon"
          alt=""
          src="/fickleflight-logo@2x.png"
        />
        <div className="navigation-right">
          <nav className="navigation-menu">
            <button className="explore">Explore</button>
            <div className="search" onClick={onSearchTextClick}>
              Search
            </div>
            <div className="search" onClick={onHotelsTextClick}>
              Hotels
            </div>
            <button className="offers">Offers</button>
          </nav>
          <AccountSection />
        </div>
      </div>
    </header>
  );
};

export default Header;
