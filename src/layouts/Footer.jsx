import { Facebook, Twitter, Youtube, Instagram, Discord } from "../assets";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer-grid">
          <h3 className="footer-logo">TechTime</h3>
          <p className="footer-description">
            Reach out to us on any of our social media networks
          </p>
          <div className="socials">
            <span className="facebook">
              <img src={Facebook} alt="facebook" />
            </span>
            <span className="twitter">
              <img src={Twitter} alt="twitter" />
            </span>
            <span className="youtube">
              <img src={Youtube} alt="youtube" />
            </span>
            <span className="instagram">
              <img src={Instagram} alt="instagram" />
            </span>
            <span className="discord">
              <img src={Discord} alt="discord" />
            </span>
          </div>
        </div>
        <div className="footer-grid">
          <h3 className="list-header">useful links</h3>
          <ul className="footer_list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">our courses</a>
            </li>
            <li>
              <a href="#">testimonials</a>
            </li>
            <li>
              <a href="#">our community</a>
            </li>
          </ul>
        </div>
        <div className="footer-grid">
          <h3 className="list-header">Community</h3>
          <ul className="footer_list">
            <li>
              <a href="#">help centers</a>
            </li>
            <li>
              <a href="#">partners</a>
            </li>
            <li>
              <a href="#">suggestion</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
            <li>
              <a href="#">newsletter</a>
            </li>
          </ul>
        </div>
        <div className="footer-grid">
          <h3 className="list-header">subscribe us</h3>
          <div className="footer_search">
            <div className="search">
              <input type="email" placeholder="nft123@gmail.com" />
              <button className="footer_button">send message</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
