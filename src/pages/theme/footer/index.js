import { memo, useState } from "react";
import "./style.scss";
import { BsMailbox2 } from "react-icons/bs";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setAgreed(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (agreed) {
      // Logic xử lý gửi form
      console.log("Form submitted with email:", email);
    }
  };

  return (
    <>
          <div className="footer-before">
      <div className="block_newsletter">
        <div className="newsletter-left">
          <div className="newsletter-title">
            <li className="footer-icon">
              <BsMailbox2 />
              <span className="notification-badge"></span>
            </li>
            <h4>Subscribe Our Newsletter</h4>
            <span>$20 coupon for first shopping</span>
          </div>
        </div>
        <div className="newsletter-right">
          <form onSubmit={handleSubmit}>
            <div className="newsletter-form">
              <input
                name="email"
                type="email"
                value={email}
                placeholder="Your Email Address"
                aria-labelledby="block-newsletter-label"
                required
                onChange={handleEmailChange}
              />
              <button
                className="subscribe-button"
                type="submit"
                disabled={!agreed}
              >
                Subscribe
              </button>
            </div>
            <div className="newsletter-consent">
              <label>
                <input
                  id="psgdpr_consent_checkbox_22"
                  name="psgdpr_consent_checkbox"
                  type="checkbox"
                  value="1"
                  checked={agreed}
                  onChange={handleCheckboxChange}
                />
                <span>
                  I agree to the terms and conditions and the privacy policy
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>

       <div className="footer-container">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-1">
                <h3>Quick Information</h3>
                <address>
                  Demo Store
                  <br />
                  42 Puffin street 12345 Puffinville
                  <br />
                  France, United States
                  <br />
                  0123-456-789
                  <br />
                  <a href="mailto:admin@gmail.com">admin@gmail.com</a>
                </address>
              </div>
              <div className="col-lg-2">
                <h3>Products</h3>
                <ul>
                  <li><a href="#">Delivery</a></li>
                  <li><a href="#">Prices Drop</a></li>
                  <li><a href="#">New Products</a></li>
                  <li><a href="#">Best Sales</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h3>Our Company</h3>
                <ul>
                  <li><a href="#">Delivery</a></li>
                  <li><a href="#">Legal Notice</a></li>
                  <li><a href="#">Terms and Conditions of Use</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Secure Payment</a></li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h3>Latest News</h3>
                <p>Stay updated with our latest news and products.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-after">

<div id="tmpaymentcmsblock" class="tmpaymentcmsblock container">
  <div class="payment block_content"><a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#">
  <img alt="payment.png" className=" ls-is-cached lazyloaded" src="https://prs.themedemo.org/PRSADD15/PRS368/modules/tm_paymentcmsblock/views/img/payment.png"/> </a></div>
</div>

        <div class="block-social hb-animate-element left-to-right">
          
  <h3 class="h3 hidden-md-down">follow us</h3>
    <ul class="hidden-md-down">
              <li class="rss"><a href="https://rss.com/blog/">Rss</a></li>
              <li class="youtube"><a href="https://www.youtube.com/">YouTube</a></li>
              <li class="vimeo"><a href="https://vimeo.com/">Vimeo</a></li>
              <li class="instagram"><a href="https://www.instagram.com/">Instagram</a></li>
              <li class="linkedin"><a href="https://www.linkedin.com/">LinkedIn</a></li>
          </ul>

<div class="block hidden-lg-up">
  <h4 class="block_title hidden-lg-up" data-target="#block_social_toggle" data-toggle="collapse">follow us
    <span class="pull-xs-right">
      <span class="navbar-toggler collapse-icons">
      <i class="material-icons add"></i>
      <i class="material-icons remove"></i>
      </span>
    </span>
  </h4>

<div class="col-md-12 col-xs-12 block_content collapse" id="block_social_toggle">
 <ul>
              <li class="rss"><a href="https://rss.com/blog/">Rss</a></li>
              <li class="youtube"><a href="https://www.youtube.com/">YouTube</a></li>
              <li class="vimeo"><a href="https://vimeo.com/">Vimeo</a></li>
              <li class="instagram"><a href="https://www.instagram.com/">Instagram</a></li>
              <li class="linkedin"><a href="https://www.linkedin.com/">LinkedIn</a></li>
          </ul>
    </div>
    </div>
  </div>

      <p class="copyright">
 
 <a href="http://www.prestashop.com" target="_blank" rel="noopener noreferrer nofollow">
   © 2024 - Ecommerce software by PrestaShop™
 </a>
</p>

 <a className="top_button" href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#" style={{ display: 'inline' }}>&nbsp;</a>
      </div>
    </>
  );
};

export default memo(Footer);
