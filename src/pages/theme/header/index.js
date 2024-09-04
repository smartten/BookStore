import { memo,useState } from "react";
import "./style.scss";
import {  BsCart3, BsFillPersonFill, BsInstagram, BsLinkedin, BsRss, BsSearch, BsVimeo, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";

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
        </div>
    </div>
</div>

    </>
    );
};
export default memo(Header);