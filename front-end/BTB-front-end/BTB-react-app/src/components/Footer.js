import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="frame-parent">
        <div className="contact-parent">
          <div className="contact">Contact</div>
          <div className="support">Support</div>
          <div className="faq">FAQ</div>
          <div className="company">Company</div>
        </div>
        <div className="hotels-parent">
          <div className="hotels">Hotels</div>
          <div className="frame18">
            <div className="quick-links">Quick links</div>
            <div className="flights">Flights</div>
          </div>
          <div className="frame19">
            <div className="trains">Trains</div>
            <div className="bus">Bus</div>
          </div>
        </div>
        <div className="salesbookmyvacationsnowcom-parent">
          <div className="salesbookmyvacationsnowcom">
            sales@bookmyvacationsnow.com
          </div>
          <div className="div">94422 39333</div>
          <div className="ssv-complex-sri">
            SSV Complex, Sri Sarada College Road, Fairlands, Salem - 636 016.
          </div>
        </div>
        <div className="bookmyvacations-has-been">
          Bookmyvacations has been a leading award-winning travel company, tour
          operator and experiential destination management company (DMC).
        </div>
        <div className="newsletter-parent">
          <div className="newsletter">Newsletter</div>
          <div className="email">
            <div className="email-parent">
              <div className="email1">Email</div>
              <img className="arrow-icon" alt="" src="/arrow-1.svg" />
            </div>
          </div>
          <img className="frame-child4" alt="" src="/group-7.svg" />
        </div>
        <div className="logo">
          <div className="logo1">
            <i className="book">{`Book `}</i>
            <i className="my-vacations">MY VACATIONS</i>
          </div>
          <img className="icon" alt="" src="/20230930134049922-11@2x.png" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
