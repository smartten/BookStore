import { memo,useState } from "react";
import "./style.scss";
import {  BsCart3, BsFillPersonFill, BsInstagram, BsLinkedin, BsRss, BsSearch, BsVimeo, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
window.onload = function () {
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    prevBtn.style.display = 'none'; 
  
    function checkButtonVisibility() {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
  
      if (slider.scrollLeft === 0) {
        prevBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'block';
      }
  
      if (slider.scrollLeft >= maxScrollLeft) {
        nextBtn.style.display = 'none';
      } else {
        nextBtn.style.display = 'block';
      }
    }
      checkButtonVisibility();
  
    prevBtn.addEventListener('click', () => {
      slider.scrollBy({
        left: -220,
        behavior: 'smooth'
      });
      setTimeout(checkButtonVisibility, 300);  
    });
  
    nextBtn.addEventListener('click', () => {
      slider.scrollBy({
        left: 220,
        behavior: 'smooth'
      });
      setTimeout(checkButtonVisibility, 300);  
    });
  
    slider.addEventListener('scroll', checkButtonVisibility);
  };

const Header =() => {
    const [isShowCategories, setShowCategories] = useState(false);
    return (
    <>
    <div className="header-top">
    <div className="container">
        <div className="row">
            <div className="col-6 header-top-left">
                <ul>
                    <li>
                    Good luck with shopping. Call us free 24/7 : (555) 172-244-7888
                    </li>
                </ul>
            </div>
            <div className="col-6 header-top-right">
                <ul>
                    <li>
                        <Link to={"https://rss.com/blog/"}>
                        <BsRss />
                        </Link >
                        </li>
                    <li>
                    <Link to={"https://www.youtube.com/"}>
                        <BsYoutube />
                        </Link>
                        </li>
                    <li>
                    <Link to={"https://vimeo.com/"}>
                        <BsVimeo />
                        </Link>
                        </li>
                    <li>
                    <Link to={"https://www.instagram.com/"}>
                        <BsInstagram />
                        </Link>
                        </li>
                    <li>
                    <Link yo={"https://www.linkedin.com/"}>
                        <BsLinkedin />
                        </Link>
                        </li>
                        <li>
                    <Link yo={"https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=authentication&back=my-account"}>
                    <BsFillPersonFill />
                        </Link>
                        <span>Login</span>
                        </li>
                </ul>
            </div>

        </div>
    </div>
    
    </div>
    <div className="header-center">
        <div className="container">
            <div className="row">
                <div className="col-xl-3">
                    <div className="header-logo">
                    <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php"></a>
                    <img clas="logo" src="https://prs.themedemo.org/PRSADD15/PRS368/img/logo-1646368028.jpg"></img>
                    </div>
                </div>
                <div className="col-xl-6">
                <nav className="header-block-top">
                    <ul>
                        <li className="active">
                            <Link to={"https://prs.themedemo.org/PRSADD15/PRS368/index.php#"}>Home</Link>
                        </li>
                    
                    
                        <li>
                            <Link to={"https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_cms=4&controller=cms&id_lang=1"}>About Us</Link>
                        </li>
                
                        <li>
                            <Link to={"https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=contact"}>Contact</Link>
                        </li>
                    
                  
                        <li>
                            <Link to={"https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=best-sales"}>Best Sales</Link>
                        </li>
                    
                        <li>
                            <Link to={"https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=new-products"}>New Product</Link>
                        </li>
                        <li>
                            <Link to={"https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_cms=1&controller=cms&id_lang=1"}>Delivery</Link>
                        </li>
                    </ul>
                    </nav>
                </div>
                <div className="col-xl-3">
                    <div className="header-cart">
                        <ul>
                             <BiGitCompare/>
                        </ul>
                   <ul>
                    <AiOutlineHeart />
                   </ul>
                   <ul>
                    <BsCart3 />
                   </ul>
                    
                    </div>
                </div>
            </div>
        </div>
       
    </div>  

    <div className="hero">
      <div className="container">
        <div className="row hero-categories-container">
          <div className="col-lg-3 hero-categories">
            <div className="hero-categories-all" onClick={() => setShowCategories(!isShowCategories)}>
              <AiOutlineMenu />
              Shop By Categories
            </div>
            

            
            <ul className={isShowCategories ? 'show' : ''}>
              <li><Link to={""}>Nonfiction</Link></li>
              <li><Link to={""}>Almanac</Link></li>
              <li><Link to={""}>Fashion Supplier</Link></li>
              <li><Link to={""}>Essays</Link></li>
              <li><Link to={""}>Memoir</Link></li>
              <li><Link to={""}>Poetry</Link></li>
              <li><Link to={""}>Dystopian</Link></li>
              <li><Link to={""}>Crime & Mystery</Link></li>
              <li><Link to={""}>Adventure</Link></li>
              <li><Link to={""}>Historical Fiction</Link></li>
              <li><Link to={""}>Satire</Link></li>
              <li><Link to={""}>Horror</Link></li>
            </ul>
            
          </div>
          <div className="col-lg-9">
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
      </div>
    </div>
     
    <div className="container">
    <div className="row">
        <div className="col-lg-3">
            <div className="tmleftbanner">
           
            </div>

            <div id="tmtestimonialcmsblock" className="testimonial block">
                <h4 className="block_title hidden-md-down">Our Client Says</h4>
                <h4 className="block_title hidden-lg-up" data-target="#testimonialtoggle" data-toggle="collapse">
                    Our Client Says
                </h4>
                <div className="testimonial_inner block_content collapse" id="testimonialtoggle">
                    <div className="testimonial_inner">
                        <ul id="testimonial_carousel" className="tm-carousel product_list owl-carousel owl-theme">
                            <div className="owl-wrapper-outer">
                                <div className="owl-wrapper">
                                    <div className="owl-item">
                                        <li className="item">
                                            <div className="peoplesay-block">
                                                <div className="test-content"></div>
                                                <div className="test-desc">
                                                    <span className="test-bg"></span>
                                                    <p>Contrary to popular belief, Ipsum is not simply random text. Ipsum is not simply dummy text.</p>
                                                    <div className="cms-box-heading">
                                                        <a className="test-name" href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#">Lorem Dolor</a>
                                                        <span className="manager">Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                    <div className="owl-item">
                                        <li className="item">
                                            <div className="peoplesay-block">
                                                <div className="test-content"></div>
                                                <div className="test-desc">
                                                    <span className="test-bg"></span>
                                                    <p>Contrary to popular belief, Ipsum is not simply random text. Ipsum is not simply dummy text.</p>
                                                    <div className="cms-box-heading">
                                                        <a className="test-name" href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#">Lorem Dolor</a>
                                                        <span className="manager">Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                    <div className="owl-item">
                                        <li className="item">
                                            <div className="peoplesay-block">
                                                <div className="test-content"></div>
                                                <div className="test-desc">
                                                    <span className="test-bg"></span>
                                                    <p>Contrary to popular belief, Ipsum is not simply random text. Ipsum is not simply dummy text.</p>
                                                    <div className="cms-box-heading">
                                                        <a className="test-name" href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#">Lorem Dolor</a>
                                                        <span className="manager">Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </ul>
                        <div className="owl-controls clickable">
                            <div className="owl-pagination">
                                <div className="owl-page"><span></span></div>
                                <div className="owl-page"><span></span></div>
                                <div className="owl-page active"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="tmleftbanner1">
               
            </div>
        </div>

        <div className="col-lg-9">
            <div className="hero-item-right">
                <div className="hero-text">
                    <span>Branded Choice</span>
                    <h2>Best Sell Books<br/>
                        Collection
                    </h2>
                    <Link to={"https://prs.themedemo.org/PRSADD15/PRS368/index.php#"} className="primary-btn">
                        Shop now
                    </Link>
                </div>
            </div>
            <div id="tmserviceblock">
                <div className="container">
                    <div className="serviceblock">
                        <div className="service-cms-banner-list service-1">
                            <div className="service_image"></div>
                            <div className="service_content">
                                <div className="service_title1">Fast Free Delivery</div>
                                <div className="service_title2">For On $100</div>
                            </div>
                        </div>
                        <div className="service-cms-banner-list service-2">
                            <div className="service_image"></div>
                            <div className="service_content">
                                <div className="service_title1">24/7 Online Support</div>
                                <div className="service_title2">Best Support</div>
                            </div>
                        </div>
                        <div className="service-cms-banner-list service-3">
                            <div className="service_image"></div>
                            <div className="service_content">
                                <div className="service_title1">Easy Safe Payment</div>
                                <div className="service_title2">100% Secure</div>
                            </div>
                        </div>
                        <div className="service-cms-banner-list service-4">
                            <div className="service_image"></div>
                            <div className="service_content">
                                <div className="service_title1">Easy Store Search</div>
                                <div className="service_title2">Best Location</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="tmcms1block">
                <div className="hidden-md-down">
                    <div className="cmsbanner">
                        <div className="left_side">
                            <div className="left_sub_image">
                                <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#" className="cmsimg">
                                    <img
                                        className="ls-is-cached lazyloaded"
                                        src="https://prs.themedemo.org/PRSADD15/PRS368/modules/tm_cms1block/views/img/cms-banner-1.jpg"
                                        alt="cms-banner-1.jpg"
                                    />
                                    <span className="hover"></span>
                                    <span className="bannercms-content1 full-banner">
                                        <span className="banner-text3">Now Trending 2021</span>
                                        <span className="banner-text1">for i-Watch <span>S7</span></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="right_side">
                            <div className="right_top_image">
                                <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#" className="cmsimg">
                                    <img
                                        className="ls-is-cached lazyloaded"
                                        src="https://prs.themedemo.org/PRSADD15/PRS368/modules/tm_cms1block/views/img/cms-banner-2.jpg"
                                        alt="cms-banner-2.jpg"
                                    />
                                    <span className="hover"></span>
                                    <span className="bannercms-content2 full-banner">
                                        <span className="banner-text3">Now Trending 2021</span>
                                        <span className="banner-text1">for i-Watch <span>S7</span></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
      <h2 class="heading">Featured Products</h2>
      <div class="slider-wrapper">
          <button id="prevBtn" class="slider-btn left-btn">‹</button>
          <div class="slider">
      
          <div class="card">
  <span class="badge new">New</span>
  <span class="badge out-of-stock">Out-of-Stock</span>
  <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_product=1&id_product_attribute=1&rewrite=hummingbird-printed-t-shirt&controller=product&id_lang=1#/1-size-small/8-color-white">
    <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/2/4/24-home_default.jpg" alt="Encounters With Police" class="product-image"/>
  </a>
  <h3 class="product-title">Encounters With Police</h3>
  <p class="brand-name">Brand2</p>
  <p class="price">$33.90</p>
      


                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>

              </div>
   
              <div class="card">
                  <span class="badge new">New</span>
                  <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/3/0/30-home_default.jpg" alt="Ear, Nose And Throat" class="product-image"/>
                  <h3 class="product-title">Ear, Nose And Throat</h3>
                  <p class="brand-name">Brand3</p>
                  <p class="price">$45.90</p>

                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>
              </div>
             
              <div class="card">
                  <span class="badge new">New</span>
                  <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/3/6/36-home_default.jpg" alt="Woodworking Tips" class="product-image"/>
                  <h3 class="product-title">Woodworking Tips</h3>
                  <p class="brand-name">Brand1</p>
                  <p class="price">$44.00</p>
                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>
              </div>
         
              <div class="card">
                  <span class="badge new">New</span>
                  <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/4/3/43-home_default.jpg" alt="Collins English Dictionary" class="product-image"/>
                  <h3 class="product-title">Collins English Dictionary</h3>
                  <p class="brand-name">Brand1</p>
                  <p class="price">$45.00</p>

                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>
              </div>
       
              <div class="card">
                  <span class="badge new">New</span>
                  <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/5/0/50-home_default.jpg" alt="Runner The Scorch Trials" class="product-image"/>
                  <h3 class="product-title">Runner The Scorch Trials</h3>
                  <p class="brand-name">Brand3</p>
                  <p class="price">$39.00</p>
                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>
              </div>

              <div class="card">
              <span class="badge new">New</span>
                  <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/5/6/56-home_default.jpg" alt="Cambridge Dictionary" class="product-image"/>
                  <h3 class="product-title">Cambridge Dictionary</h3>
                  <p class="price">$100.90</p>

                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>
              </div>
              
              <div class="card">
              <span class="badge new">New</span>
                  <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/6/2/62-home_default.jpg" alt="Agoda Official Site" class="product-image"/>
                  <h3 class="product-title">Agoda Official Site</h3>
                  <p class="brand-name">Brand3</p>
                  <p class="price">$28.90</p>
                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>
              </div>

              <div class="card">
              <span class="badge new">New</span>
                  <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/2/4/24-home_default.jpg" alt="Futuregames In Sweden" class="product-image"/>
                  <h3 class="product-title">Futuregames In Sweden</h3>
                  <p class="brand-name">Brand3</p>
                  <p class="price">$122.90</p>

                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>
              </div>
          </div>
          <button id="nextBtn" class="slider-btn right-btn">›</button>
      </div>
  </div>

  <div className="container">
  <h2 class="heading">Deal of the week</h2>
      <div class="slider-wrapper">
          <button id="prevBtn" class="slider-btn left-btn">‹</button>
          <div class="slider">
          <div class="card">
              <span class="badge new">14%</span>
                  <span class="badge out-of-stock">New</span>
                  <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/9/8/98-home_default.jpg" alt="Encounters With Police" class="product-image"/>
                  <h3 class="product-title">Veraitech Book Cover</h3>
                  <p class="brand-name">Brand4</p>
                  <p class="price">$110.94</p>
                  </div>
</div>
</div>
  </div>

  <div id="tmcms3_block">
		<div class="tmcms3">
                <div class="main-content">
                <div class="tmcms_content">
                <div class="cms_img">
<a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#">
<img class=" ls-is-cached lazyloaded" alt="Offer-banner.jpg" src="https://prs.themedemo.org/PRSADD15/PRS368/modules/tm_cms3block/views/img/Offer-banner.jpg"/>
</a>
</div>
                <div class="cms-block">
                <div class="cms_offer">shop and<span class="tmcms3_color"> save big</span> on hottest gegetes</div>
                </div>
                </div>
                </div>
                </div>
</div>

<div class="container">
      <h2 class="heading">Bestseller Products</h2>
      <div class="slider-wrapper">
          <button id="prevBtn" class="slider-btn left-btn">‹</button>
          <div class="slider">
      
          <div class="card">
  <span class="badge new">New</span>
  <span class="badge out-of-stock">Out-of-Stock</span>
  <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_product=1&id_product_attribute=1&rewrite=hummingbird-printed-t-shirt&controller=product&id_lang=1#/1-size-small/8-color-white">
    <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/2/4/24-home_default.jpg" alt="Encounters With Police" class="product-image"/>
  </a>
  <h3 class="product-title">Encounters With Police</h3>
  <p class="brand-name">Brand2</p>
  <p class="price">$33.90</p>
      


                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>

              </div>
              
              <div class="card">
                  <span class="badge new">New</span>
                  <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/1/4/0/140-home_default.jpg" alt="Emory University Hospital" class="product-image"/>
                  <h3 class="product-title">Emory University Hospital</h3>
                  <p class="brand-name">Brand2</p>
                  <p class="price">$120.00</p>
                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>
              </div>

                     <div class="card">
                  <span class="badge new">New</span>
                  <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/1/1/6/116-home_default.jpg" alt="Dolphin Browser Android" class="product-image"/>
                  <h3 class="product-title">Dolphin Browser Android</h3>
                  <p class="brand-name">Brand1</p>
                  <p class="price">$24.90</p>
                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>
              </div>  

              <div class="card">
                  <span class="badge new">New</span>
                  <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/4/3/43-home_default.jpg" alt="Collins English Dictionary" class="product-image"/>
                  <h3 class="product-title">Collins English Dictionary</h3>
                  <p class="brand-name">Brand1</p>
                  <p class="price">$45.00</p>

                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>
              </div>

              <div class="card">
                  <span class="badge new">New</span>
                  <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/3/0/30-home_default.jpg" alt="Ear, Nose And Throat" class="product-image"/>
                  <h3 class="product-title">Ear, Nose And Throat</h3>
                  <p class="brand-name">Brand3</p>
                  <p class="price">$45.90</p>

                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>
              </div>

              <div class="card">
              <span class="badge new">New</span>
                  <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/8/1/81-home_default.jpg" alt="Hastings Hotels" class="product-image"/>
                  <h3 class="product-title">Hastings Hotels</h3>
                  <p class="brand-name">Brand3</p>
                  <p class="price">$28.90</p>

                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>
              </div>
              
              <div class="card">
              <span class="badge new">New</span>
                  <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/6/8/68-home_default.jpg" alt="Futuregames In Sweden" class="product-image"/>
                  <h3 class="product-title">Futuregames In Sweden</h3>
                  <p class="brand-name">Brand3</p>
                  <p class="price">$122.90</p>
                  <div className="hover-block">
  <div className="product-actions-main">
    <form
      action="https://prs.themedemo.org/PRSADD15/PRS368/index.php?controller=cart"
      method="post"
      className="add-to-cart-or-refresh"
    >
      <input type="hidden" name="token" value="f84fb07d04fddacc75b38a5d182d116f" />
      <input type="hidden" name="id_product" value="1" className="product_page_product_id" />
      <input type="hidden" name="id_customization" value="0" className="product_customization_id" />
      <button
        className="btn btn-primary add-to-cart"
        data-button-action="add-to-cart"
        type="submit"
        disabled
        data-toggle="tooltip"
        title="Out of stock"
      >
        + add to cart
      </button>
    </form>
  </div>

  <a
    className="quick-view"
    href="https://prs.themedemo.org/PRSADD15/PRS368/index.php#"
    data-link-action="quickview"
    data-toggle="tooltip"
    title="Quickview"
  >
    {/* <i class="material-icons search"></i> Quick view */}
  </a>

  <div className="compare">
    <a
      className="st-compare-button btn-product btn"
      href="#"
      data-id-product="1"
      title="Add to Compare"
    >
      <span className="st-compare-bt-content">
        <i className="fa fa-area-chart"></i>
        Add to Compare
      </span>
    </a>
  </div>

  <div className="wishlist">
    <a
      className="st-wishlist-button btn-product btn"
      href="#"
      data-id-wishlist=""
      data-id-product="1"
      data-id-product-attribute="1"
      title="Add to Wishlist"
    >
      <span className="st-wishlist-bt-content">
        <i className="fa fa-heart" aria-hidden="true"></i>
        Add to Wishlist
      </span>
    </a>
  </div>
</div>
              </div>


          </div>
          <button id="nextBtn" class="slider-btn right-btn">›</button>
      </div>
  </div>


    <div class="tmcategorylist">
        <div class="tmcategory-container container">
            <h1 class="products-section-title text-uppercase">Shop by category</h1>
            <div id="spe_res">
                <div class="products">
                    <div class="customNavigation">
                        <a class="btn prev cat_prev">&nbsp;</a>
                        <a class="btn next cat_next">&nbsp;</a>
                    </div>
                    <ul id="tmcategorylist-carousel" class="tm-carousel product_list product_slider_grid owl-carousel owl-theme">
                        <div class="owl-wrapper-outer">
                            <div class="owl-wrapper" >
                              
                                <div class="owl-item" >
                                    
                                        <div class="categoryblock0 categoryblock item">
                                            <div class="block_content">
                                                <div class="categoryimage_bg">
                                                    <div class="categoryimage">
          <img src="https://prs.themedemo.org/PRSADD15/PRS368/modules/tm_categorylist/views/img/5-tm_categorylist.jpg" alt="Pictures"/>
                                                  
      </div>
                                                </div>
                                                <div class="categorylist">
                                                    <div class="cate-heading">
                                                        <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_category=5&amp;controller=category&amp;id_lang=1">Adventure</a>
                                                    </div>
                                                    <div class="cate-btn">
                                                        <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_category=5&amp;controller=category&amp;id_lang=1" class="btn">View more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                  
                                </div>
                                
                                <div class="owl-item" >
                                    
                                        <div class="categoryblock1 categoryblock item">
                                            <div class="block_content">
                                                <div class="categoryimage_bg">
                                                    <div class="categoryimage">
    <img src="https://prs.themedemo.org/PRSADD15/PRS368/modules/tm_categorylist/views/img/6-tm_categorylist.jpg" alt="Pictures"/>
                                                    </div>
                                                </div>
                                                <div class="categorylist">
                                                    <div class="cate-heading">
                                                        <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_category=6&amp;controller=category&amp;id_lang=1">Crime & Mystery</a>
                                                    </div>
                                                    <div class="cate-btn">
                                                        <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_category=6&amp;controller=category&amp;id_lang=1" class="btn">View more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                  
                                </div>
                                
                                <div class="owl-item" >
                                    
                                        <div class="categoryblock2 categoryblock item">
                                            <div class="block_content">
                                                <div class="categoryimage_bg">
                                                    <div class="categoryimage">
            <img src="https://prs.themedemo.org/PRSADD15/PRS368/modules/tm_categorylist/views/img/7-tm_categorylist.jpg" alt="Pictures"/>
                                                    </div>
                                                </div>
                                                <div class="categorylist">
                                                    <div class="cate-heading">
                                                        <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_category=7&amp;controller=category&amp;id_lang=1">Historical Fiction</a>
                                                    </div>
                                                    <div class="cate-btn">
                                                        <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_category=7&amp;controller=category&amp;id_lang=1" class="btn">View more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                </div>
                                
                                <div class="owl-item" >
                                  
                                        <div class="categoryblock3 categoryblock item">
                                            <div class="block_content">
                                                <div class="categoryimage_bg">
                                                    <div class="categoryimage">
    <img src="https://prs.themedemo.org/PRSADD15/PRS368/modules/tm_categorylist/views/img/8-tm_categorylist.jpg" alt="Pictures"/>
                                                    </div>
                                                </div>
                                                <div class="categorylist">
                                                    <div class="cate-heading">
                                                        <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_category=8&amp;controller=category&amp;id_lang=1">Humor</a>
                                                    </div>
                                                    <div class="cate-btn">
                                                        <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_category=8&amp;controller=category&amp;id_lang=1" class="btn">View more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                  
                                </div>
                                
                                <div class="owl-item" >
                                
                                        <div class="categoryblock4 categoryblock item">
                                            <div class="block_content">
                                                <div class="categoryimage_bg">
                                                    <div class="categoryimage">
                        <img src="https://prs.themedemo.org/PRSADD15/PRS368/modules/tm_categorylist/views/img/7-tm_categorylist.jpg" alt="Pictures"/>
                                                    </div>
                                                </div>
                                                <div class="categorylist">
                                                    <div class="cate-heading">
                                                        <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_category=9&amp;controller=category&amp;id_lang=1">Satire</a>
                                                    </div>
                                                    <div class="cate-btn">
                                                        <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_category=9&amp;controller=category&amp;id_lang=1" class="btn">View more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                  
                                </div>
                                
                                <div class="owl-item" >
                                  
                                        <div class="categoryblock5 categoryblock item">
                                            <div class="block_content">
                                                <div class="categoryimage_bg">
                                                    <div class="categoryimage">
    <img src="https://prs.themedemo.org/PRSADD15/PRS368/modules/tm_categorylist/views/img/5-tm_categorylist.jpg" alt="Pictures"/>
                                                    </div>
                                                </div>
                                                <div class="categorylist">
                                                    <div class="cate-heading">
                                                        <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_category=10&amp;controller=category&amp;id_lang=1">Horror</a>
                                                    </div>
                                                    <div class="cate-btn">
                                                        <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_category=10&amp;controller=category&amp;id_lang=1" class="btn">View more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                  
                                </div>
                                
                                <div class="owl-item" >
                                  
                                        <div class="categoryblock6 categoryblock item">
                                            <div class="block_content">
                                                <div class="categoryimage_bg">
                                                    <div class="categoryimage">
    <img src="https://prs.themedemo.org/PRSADD15/PRS368/modules/tm_categorylist/views/img/6-tm_categorylist.jpg" alt="Pictures"/>
                                                    </div>
                                                </div>
                                                <div class="categorylist">
                                                    <div class="cate-heading">
                                                        <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_category=11&amp;controller=category&amp;id_lang=1">Dystopian</a>
                                                    </div>
                                                    <div class="cate-btn">
                                                        <a href="https://prs.themedemo.org/PRSADD15/PRS368/index.php?id_category=11&amp;controller=category&amp;id_lang=1" class="btn">View more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                  
                                </div>
                            </div>
                        </div>
                    </ul>
                    <div class="owl-controls clickable">
                        <div class="owl-pagination">
                            <div class="owl-page"><span></span></div>
                            <div class="owl-page active"><span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<div id="new-products-carousel" class="new-products">
  <h2>New Products</h2>
  <div class="carousel-navigation">
    <button class="prev">&lt;</button>
    <button class="next">&gt;</button>
  </div>
  <div class="product-grid">
    <div class="product-item">
      <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/1/3/4/134-new_product.jpg" alt="Design Custom Posters"/>
      <div class="product-info">
        <span class="brand">Brand4</span>
        <h3>Design Custom Posters</h3>
        <span class="price">$163.90</span>
        <div class="color-options">
          <span class="color gray"></span>
          <span class="color red"></span>
        </div>
      </div>
    </div>
    <div class="product-item">
      <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/1/2/2/122-new_product.jpg" alt="Book Cat Polly Faber"/>
      <div class="product-info">
        <span class="brand">Brand4</span>
        <h3>Book Cat Polly Faber</h3>
        <span class="price">$29.90</span>
        <div class="color-options">
          <span class="color blue"></span>
          <span class="color green"></span>
        </div>
      </div>
    </div>  
    <div class="product-item">
      <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/1/1/0/110-new_product.jpg" alt="Scary Book"/>
      <div class="product-info">
        <span class="brand">Brand4</span>
        <h3>Scary Book</h3>
        <span class="price">$155.00</span>
        <div class="color-options">
          <span class="color red"></span>
          <span class="color blue"></span>
        </div>
      </div>
    </div> 
    <div class="product-item">
      <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/9/8/98-new_product.jpg" alt="Veraitech Book Cover"/>
      <div class="product-info">
        <span class="brand">Brand4</span>
        <h3>Veraitech Book Cover</h3>
        <span class="price">$110.94</span>
        <div class="color-options">
          <span class="color gray"></span>
          <span class="color red"></span>
        </div>
      </div>
    </div> 
    <div class="product-item">
      <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/1/2/8/128-new_product.jpg" alt="Lesser Known Monsters"/>
      <div class="product-info">
        <span class="brand">Brand4</span>
        <h3>Lesser Known Monsters </h3>
        <span class="price">$137.90</span>
        <div class="color-options">
          <span class="color blue"></span>
          <span class="color green"></span>
        </div>
      </div>
    </div> 
    <div class="product-item">
      <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/1/1/6/116-new_product.jpg" alt="Dolphin Browser Android"/>
      <div class="product-info">
        <span class="brand">Brand1</span>
        <h3>Dolphin Browser Android</h3>
        <span class="price">$24.90</span>
        <div class="color-options">
          <span class="color gray"></span>
          <span class="color red"></span>
        </div>
      </div>
    </div> 
    <div class="product-item">
      <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/1/0/4/104-new_product.jpg" alt="Lenny's Book Of Everything"/>
      <div class="product-info">
        <span class="brand">Brand4</span>
        <h3>Lenny's Book Of Everything</h3>
        <span class="price">$26.00</span>
        <div class="color-options">
          <span class="color red"></span>
          <span class="color green"></span>
        </div>
      </div>
    </div> 
    <div class="product-item">
      <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/p/9/2/92-new_product.jpg" alt="Last Seen Alive"/>
      <div class="product-info">
        <span class="brand">Brand4</span>
        <h3>Last Seen Alive</h3>
        <span class="price">$24.00</span>
        <div class="color-options">
          <span class="color red"></span>
          <span class="color green"></span>
        </div>
      </div>
    </div> 
  </div>
  
  
</div>

<div className="brands">
<div className="container">
<h2 class="h1 products-section-title text-uppercase">
					our happy clients
			</h2>
      <div class="customNavigation">
					<a class="btn prev brand_prev">&nbsp;</a>
					<a class="btn next brand_next">&nbsp;</a>
				</div>
        <ul id="tmcategorylist-carousel" class="tm-carousel product_list product_slider_grid owl-carousel owl-theme">
    <div class="owl-wrapper-outer">
        <div class="owl-wrapper">
            <div class="owl-item">
                <div class="categoryblock0 categoryblock item">
                    <div class="block_content">
                        <div class="categoryimage_bg">
                            <div class="categoryimage">
                                <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/m/9.jpg" alt="Pictures"/>
                            </div>
                        </div>
                        <div class="categorylist">
                            <div class="cate-heading">
                            
                            </div>
                            <div class="cate-btn">
                                <button class="btn">View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="owl-item">
                <div class="categoryblock1 categoryblock item">
                    <div class="block_content">
                        <div class="categoryimage_bg">
                            <div class="categoryimage">
                                <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/m/15.jpg" alt="Pictures"/>
                            </div>
                        </div>
                        <div class="categorylist">
                            <div class="cate-heading">
                                
                            </div>
                            <div class="cate-btn">
                                <button class="btn">View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="owl-item">
                <div class="categoryblock2 categoryblock item">
                    <div class="block_content">
                        <div class="categoryimage_bg">
                            <div class="categoryimage">
                                <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/m/10.jpg" alt="Pictures"/>
                            </div>
                        </div>
                        <div class="categorylist">
                            <div class="cate-heading">
                                
                            </div>
                            <div class="cate-btn">
                                <button class="btn">View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="owl-item">
                <div class="categoryblock3 categoryblock item">
                    <div class="block_content">
                        <div class="categoryimage_bg">
                            <div class="categoryimage">
                                <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/m/11.jpg" alt="Pictures"/>
                            </div>
                        </div>
                        <div class="categorylist">
                            <div class="cate-heading">
                                
                            </div>
                            <div class="cate-btn">
                                <button class="btn">View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="owl-item">
                <div class="categoryblock4 categoryblock item">
                    <div class="block_content">
                        <div class="categoryimage_bg">
                            <div class="categoryimage">
                                <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/m/13.jpg" alt="Pictures"/>
                            </div>
                        </div>
                        <div class="categorylist">
                            <div class="cate-heading">
                                
                            </div>
                            <div class="cate-btn">
                                <button class="btn">View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="owl-item">
                <div class="categoryblock5 categoryblock item">
                    <div class="block_content">
                        <div class="categoryimage_bg">
                            <div class="categoryimage">
                                <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/m/14.jpg" alt="Pictures"/>
                            </div>
                        </div>
                        <div class="categorylist">
                            <div class="cate-heading">
                                
                            </div>
                            <div class="cate-btn">
                                <button class="btn">View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="owl-item">
                <div class="categoryblock6 categoryblock item">
                    <div class="block_content">
                        <div class="categoryimage_bg">
                            <div class="categoryimage">
                                <img src="https://prs.themedemo.org/PRSADD15/PRS368/img/m/12.jpg" alt="Pictures"/>
                            </div>
                        </div>
                        <div class="categorylist">
                            <div class="cate-heading">
                                
                            </div>
                            <div class="cate-btn">
                                <button class="btn">View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</ul>

     
  </div>
</div>
 
        </div>
    </div>
</div>

    </>
    );
};
export default memo(Header);