import { MapCommunity } from "../assets";

const JoinCommunity = () => {
  return (
    <section className="joinCommunity">
      <div className="joinCommunity_container">
        <p className="community_subheader">join our community</p>
        <h2 className="community_header">
          Are you ready to connect with the future talent of the tech world
        </h2>
        <p className="community_subheader">
          meet up with other techstars and grow together
        </p>
        <div className="map_container">
          <img src={MapCommunity} alt="map-community" />
          <button className="map_button">join our community</button>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
