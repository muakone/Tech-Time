import { Dropbox, Monday, Slack, Stripe, Zoom } from "../assets";

const Logo = () => {
  const logos = [Zoom, Stripe, Monday, Slack, Dropbox];
  return (
    <section className="logos">
      <div className="logo_container">
        {logos.map((logo, index) => (
          <span className="logo" key={index}>
            <img src={logo} alt="logo" />
          </span>
        ))}
      </div>
    </section>
  );
};

export default Logo;
