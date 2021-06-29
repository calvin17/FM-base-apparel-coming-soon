import { useState } from "react";
import LogoImg from "../assets/images/logo.svg";
import heroBannerMobile from "../assets/images/hero-mobile.jpg";
import heroBannerDesktop from "../assets/images/hero-desktop.jpg";
import errorIcon from "../assets/images/icon-error.svg";

function BaseApparelComingSoon() {
  const [isEmailValid, setEmailValid] = useState(true);
  const [email, setEmail] = useState("");
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function submitEmail(e) {
    e.preventDefault();
    console.log("validateEmail(email);", validateEmail(email));
    if (!validateEmail(email)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  }
  return (
    <div className="continer">
      <header className="header">
        <img src={LogoImg} alt="logo" className="logo" />
      </header>
      <div className="hero-banner">
        <picture>
          <source media="(min-width:1120px)" srcSet={heroBannerDesktop} />
          <source media="(min-width:360px)" srcSet={heroBannerMobile} />
          <img src={heroBannerMobile} alt="hero-banner" className="banner-img" />
        </picture>
      </div>
      <div className="info-content">
        <h1 className="title">
          <span className="title-highlighter">We're </span>coming soon
        </h1>
        <div className="description">
          Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay
          up-to-date with announcements and our launch deals.
        </div>
        <form className="email">
          <input
            type="text"
            placeholder="Email Address"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className={`error-icon ${isEmailValid && "error"}`}>
            <img src={errorIcon} alt="error icon" />
          </span>
          <input type="submit" className="email-submit" value="" onClick={submitEmail} />
        </form>
        <div className={`email-error ${isEmailValid && "error"}`}>Please provide a valid email</div>
      </div>
    </div>
  );
}

export default BaseApparelComingSoon;
