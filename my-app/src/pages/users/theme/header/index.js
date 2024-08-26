import { memo, useState } from "react";
import "./style.scss";
import { Button, Drawer } from "antd";
import { BsList, BsRepeat, BsCart3, BsSuitHeart, BsPerson, BsSearch } from "react-icons/bs";

const Header = () => {
  const [visible, setVisible] =  useState(false);
  const onSearch = (value) => console.log(value);
  const showDrawer = () => {
    setVisible(true);
  };
const [isShowCategories, setShowCategories] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col6 header__top__left">
              <ul>
                <li>Good luck with shopping. Call us free 24/7 : (555) 172-244-7888</li>
              </ul>
            </div>
            <div className="col6 header__top__right">
              <ul>
                <li>Track Your Order</li>
                <li>Language: En</li>
                <li>Currency: EUR(€)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-2">
              <a href="/Home">
                <div className="col-x1-1 header__logo">
                  <img
                    src="https://prs.themedemo.org/PRSADD15/PRS368/img/logo-1646368028.jpg"
                    alt="Logo"
                    style={{ width: "auto" }}
                  />
                </div>
              </a>
            </div>
            <div id="links_block_top" class="col-xl-4 header__top_center">
            <ul id="tm_toplink" class="block_content">
			 
       <li>
         <a href="#" title="Home">Home</a></li>
            
       <li>
         <a href="?id_cms=4&amp;controller=cms" title="About Us">About Us</a></li>
            
       <li>
         <a href="?controller=contact" title="Contact ">Contact </a></li>
            
       <li>
         <a href="?controller=best-sales" title="best sales">Best Sales</a></li>
            
       <li>
         <a href="?controller=new-products" title="new product">New Product</a></li>
            
       <li>
         <a href="?id_cms=1&amp;controller=cms" title=" Delivery "> Delivery </a></li>
         </ul>
            </div>
            <div className="col-xl-3 header__top_right">
              <ul>
                <li className="header__icon">
                  <BsRepeat />
                  <span className="notification-badge">2</span>
                </li>
                <li className="header__icon">
                  <BsSuitHeart />
                  <span className="notification-badge">99+</span>
                </li>
                <li className="header__icon">
                  <BsPerson />
                </li>
                <li className="header__icon">
                  <BsCart3 />
                  <span className="notification-badge">1</span>
                </li>
                <li className="header__icon">My Cart</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header__top__main bg_main">
        <div className="container">
          <div id="tmnavcmsblock">
          <div className="text-contact">Free Shipping on Orders $50+</div>
          </div>
          
          <div id="search_widget" className="col-lg-4 col-md-5 col-sm-12 search-widget">
            <span className="search_button"></span>
            <div className="search_widget">
              <form method="get" action="//prs.themedemo.org/PRSADD15/PRS368/index.php?controller=search">
                <input type="hidden" name="controller" value="search" />
                <span role="status" aria-live="polite" className="ui-helper-hidden-accessible"></span>
                <input
                  type="text"
                  name="s"
                  placeholder="Search for all products ..."
                  aria-label="Search"
                  className="ui-autocomplete-input"
                  autoComplete="off"
                />
                <button type="submit" className="search-button">
                  <BsSearch />
                </button>
              </form>
            </div>
          </div>
         

          </div>
        </div>
     
    </>
  );
};


export default memo(Header);
