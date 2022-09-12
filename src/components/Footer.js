import React from "react";

function Footer() {
  return (
    <>

      {/* -------------------------------------------------------------------- */}
      <div className="bottomfootabove"></div>
      <div className="bottomfoot">
        <div className="about">
          <ul>
            <li style={{ marginBottom: "15px", color: "gray" }}>ABOUT</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
            <li>Flipkart</li>
            <li>Wholesale</li>
            <li>Corporate</li>
            <li>Information</li>
          </ul>
        </div>
        <div className="help">
          <ul>
            <li style={{ marginBottom: "15px", color: "gray" }}>HELP</li>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>FAQ</li>
            <li>Report</li>
            <li>Infringement</li>
          </ul>
        </div>
        <div className="policy">
          <ul>
            <li style={{ marginBottom: "15px", color: "gray" }}>POLICY</li>
            <li>Return Policy</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>EPR Compilance</li>
          </ul>
        </div>
        <div className="social">
          <ul>
            <li style={{ marginBottom: "15px", color: "gray" }}>SOCIAL</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div className="mailUs">
          <div className="vl"></div>
          <div>
            <ul>
              <li style={{ marginBottom: "15px", color: "gray" }}>Mail Us:</li>
              <li>
                Flipkart Internet Private Limited,
                <br />
                Buildings Alyssa, Begonia &
                <br />
                Clove Embassy Tech Village,
                <br />
                Outer Ring Road, Devarabeesanahalli Village,
                <br />
                Bengaluru, 560103,
                <br />
                Karnataka, India
              </li>
            </ul>
          </div>
        </div>
        <div className="officeadd">
          <ul>
            <li style={{ marginBottom: "15px", color: "gray" }}>
              Registered Office Address:
            </li>
            <li>
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &
              <br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
              <br />
              CIN : U51109KA2012PTC066107
              <br />
              Telephone: 044-45614700
            </li>
          </ul>
        </div>
      </div>
      <div className="mainfoot">
        <br />
        <br />
        <hr style={{ backgroundColor: "gray" }} />
        <div className="lastfoot">
          <div>
            <img src="/images/footerimage/ft1.png" alt="" />
            <p>Become a Seller</p>
          </div>
          <div>
            <img src="/images/footerimage/ft2.png" alt="" />
            <p> Advertise</p>
          </div>
          <div>
            <img src="/images/footerimage/ft3.png" alt="" />
            <p> Gift Cards</p>
          </div>
          <div>
            <img src="/images/footerimage/ft4.png" alt="" />
            <p> Help Center</p>
          </div>
          <div>
            <p>&#169; 2007-2022 Flipkart.com</p>{" "}
          </div>
          <div>
            {" "}
            <img src="/images/footimg.png" alt="" id="footimg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
