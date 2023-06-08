import React from "react";

const Footer = () => {
  return (
    <footer id="Contact">
      <div className="footer-container">
        <h4>Contact</h4>
        <div className="all-container">
          <form className="form-container">
            <label htmlFor="">Nom</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">Message</label>
            <input type="text" />
            <button type="submit">Envoyer</button>
          </form>
          <div className="infos-container">
            <div className="info-all">
              <div className="icon">
                <img src="./assets/city.svg" alt="" />
              </div>
              <div className="infos">
                <h5>Ville</h5>
                <p>Lyon, 69000</p>
              </div>
            </div>

            <div className="info-all">
              <div className="icon">
                <img src="./assets/phone1.svg" alt="" />
              </div>
              <div className="infos">
                <h5>Télephone</h5>
                <p>06 02 29 67 98</p>
              </div>
            </div>

            <div className="info-all">
              <div className="icon">
                <img src="./assets/mail.svg" alt="" />
              </div>
              <div className="infos">
                <h5>Email</h5>
                <p>gardettefaustin@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
