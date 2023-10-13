import Header from "../components/Header";
import TravelSearchContainer from "../components/TravelSearchContainer";
import UpcomingFlightSectionContainer from "../components/UpcomingFlightSectionContainer";
import PopDestinationsMainContainer1 from "../components/PopDestinationsMainContainer1";
import RecommendedHolidaysCard from "../components/RecommendedHolidaysCard";
import PopularStaysContainer1 from "../components/PopularStaysContainer1";
import SubscribeFormContainer from "../components/SubscribeFormContainer";
import Footer from "../components/Footer";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="hero-section">
        <Header />
        <TravelSearchContainer />
      </section>
      <section className="home-contents">
        <UpcomingFlightSectionContainer />
        <PopDestinationsMainContainer1 />
        <RecommendedHolidaysCard />
        <PopularStaysContainer1 />
      </section>
      <section className="footer-section">
        <SubscribeFormContainer />
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
