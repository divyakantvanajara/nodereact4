import { Link, Outlet } from "react-router-dom"
var UserLayout = () => {
  return (<div>
<div className="pageWrapper">
  {/* Promotion Bar */}
  <div className="notification-bar mobilehide d-none">
    <a href="#" className="notification-bar__message">20% off your very first purchase, use promo code: diva fashion</a>
    <span className="close-announcement icon an an-times" />
  </div>
  {/* End Promotion Bar */}
  {/* Search Form Drawer */}
  <div className="search">
    <div className="search__form">
      <form className="search-bar__form" action="#">
        <button className="go-btn search__button" type="submit"><i className="icon an an-search" /></button>
        <input className="search__input" type="search" name="q" defaultValue placeholder="Search for products, brands..." aria-label="Search" autoComplete="off" />
      </form>
      <button type="button" className="search-trigger close-btn" data-bs-toggle="tooltip" data-bs-placement="left" title="Close"><i className="icon an an-times" /></button>
    </div>
  </div>
  {/* End Search Form Drawer */}
  {/* Main Header */}
  <div className="header-section classicHeader clearfix animated hdr-sticky">
    {/* Desktop Header */}
    <div className="header-1 classic-style">
      {/* Top Header */}
      <div className="top-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 col-sm-8 col-md-7 col-lg-4">
              <div className="currency picker float-start">
                <select className="nice-select" name="currency">
                  <option value="USD">USD</option>
                  <option value="AUD">AUD</option>
                  <option value="CAD">CAD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="INR">INR</option>
                  <option value="JPY">JPY</option>
                </select>
              </div>
              <div className="language picker float-start">
                <select className="nice-select" name="language">
                  <option value="EN">English</option>
                  <option value="AR">Arabic</option>
                  <option value="FR">French</option>
                  <option value="DE">German</option>
                  <option value="JA">Japanese</option>
                  <option value="ES">Spanish</option>
                </select>
              </div>
              <p className="phone-no float-start"><i className="icon an an-phone me-1" /><a href="tel:+4400(111)044833">+440 0(111) 044 833</a></p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 d-none d-md-none d-lg-block">
              <div className="text-center">
                <p className="top-header_middle-text">Free Ground Shipping Over $250</p>
              </div>
            </div>
            <div className="col-2 col-sm-4 col-md-5 col-lg-4 text-end d-none d-sm-block d-md-block d-lg-block">
              <div className="header-social">
                <ul className="justify-content-end list--inline social-icons">
                  <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Facebook"><i className="icon an an-facebook" /> <span className="icon__fallback-text">Facebook</span></a></li>
                  <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Twitter"><i className="icon an an-twitter" /> <span className="icon__fallback-text">Twitter</span></a></li>
                  <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Pinterest"><i className="icon an an-pinterest-p" /> <span className="icon__fallback-text">Pinterest</span></a></li>
                  <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Instagram"><i className="icon an an-instagram" /> <span className="icon__fallback-text">Instagram</span></a></li>
                  <li><a className="social-icons__link" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" title="YouTube"><i className="icon an an-youtube" /> <span className="icon__fallback-text">YouTube</span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-2 col-sm-4 col-md-5 col-lg-4 text-end d-block d-sm-none d-md-none d-lg-none">
              {/* Mobile User Links */}
              <div className="user-menu-dropdown">
                <span className="user-menu"><i className="an an-user-alt" /></span>
                <ul className="customer-links list-inline" style={{"display":"none"}}>
                  <li className="item"><a href="login.html">Login</a></li>
                  <li className="item"><a href="register.html">Register</a></li>
                  <li className="item"><a href="my-account.html">Orders</a></li>
                  <li className="item"><a href="compare.html">Compare</a></li>
                </ul>
              </div>
              {/* End Mobile User Links */}
            </div>
          </div>
        </div>
      </div>
      {/* End Top Header */}
      {/* Header */}
      <div className="header-wrap d-flex">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-4 col-sm-4 col-md-4 col-lg-8 d-block d-lg-none">
              <button type="button" className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Menu"><i className="icon an an-times" /><i className="icon an an-bars" /></button>
              {/* Mobile Search */}
              <div className="site-header__search d-block d-lg-none mobile-search-icon">
                <button type="button" className="search-trigger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search"><i className="icon an an-search" /></button>
              </div>
              {/* End Mobile Search */}
            </div>
            {/* Desktop Logo */}
            <div className="logo col-4 col-sm-4 col-md-4 col-lg-2 align-self-center">
              <a href="index.html"><img src="theme/assets/images/logo.png" alt="Diva Multipurpose Html Template" title="Diva Multipurpose Html Template" /></a>
            </div>
            {/* End Desktop Logo */}
            {/* Desktop Navigation */}
            <div className="col-2 col-sm-3 col-md-3 col-lg-8 d-none d-lg-block">
              {/* Desktop Menu */}
              <nav className="grid__item" id="AccessibleNav">
                <ul id="siteNav" className="d-flex flex-wrap site-nav medium center hidearrow">
                  <li className="lvl1 parent dropdown">
                    <a href="#">Layout <i className="an an-angle-down" /></a>
                    <ul className="dropdown">
                      <li><a href="index.html" className="site-nav">Layout 1 - Classic 01</a></li>
                      <li><a href="home2-default.html" className="site-nav">Layout 2 - Default</a></li>
                      <li><a href="home3-classic.html" className="site-nav">Layout 3 - Classic 02</a></li>
                      <li><a href="home4-fullwidth.html" className="site-nav">Layout 4 - Full Width</a></li>
                      <li><a href="home5-boxed.html" className="site-nav">Layout 5 - Boxed</a></li>
                      <li><a href="home6-parallax.html" className="site-nav">Layout 6 - Parallax  Banner</a></li>
                      <li><a href="home7-creative.html" className="site-nav">Layout 7 - Creative</a></li>
                      <li><a href="home8-simple.html" className="site-nav">Layout 8 - Simple</a></li>
                      <li><a href="home9-simple2.html" className="site-nav">Layout 9 - Simple 2</a></li>
                      <li><a href="home10-minimal.html" className="site-nav">Home 10 - Minimal</a></li>
                      <li><a href="home11-modern.html" className="site-nav">Layout 11 - Modern</a></li>
                      <li><a href="home12-category.html" className="site-nav">Layout 12 - Category</a></li>
                      <li><a href="home13-dark.html" className="site-nav">Layout 13 - Dark</a></li>
                      <li><a href="home14.html" className="site-nav last">Layout 14 <span className="lbl nm_label1">New</span></a></li>
                    </ul>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <a href="#">Shop <i className="an an-angle-down" /></a>
                    <div className="megamenu style1">
                      <div className="row">
                        <div className="lvl-1 col-12 col-md-9 col-lg-9">
                          <ul className="row grid--uniform mmWrapper">
                            <li className="lvl-1 col-12 col-md-4 col-lg-4">
                              <a href="#" className="site-nav lvl-1">Shop Pages</a>
                              <ul className="subLinks">
                                <li className="lvl-2"><a href="shop-left-sidebar.html" className="site-nav">Left Sidebar</a></li>
                                <li className="lvl-2"><a href="shop-right-sidebar.html" className="site-nav">Right Sidebar</a></li>
                                <li className="lvl-2"><a href="shop-fullwidth.html" className="site-nav">No Sidebar</a></li>
                                <li className="lvl-2"><a href="shop-sidebar-drawer.html" className="site-nav">Sidebar Drawer</a></li>
                                <li className="lvl-2"><a href="shop-listview-sidebar.html" className="site-nav">Sidebar Products List</a></li>
                                <li className="lvl-2"><a href="shop-left-sidebar.html" className="site-nav">Sidebar Products Slider</a></li>
                                <li className="lvl-2"><a href="shop-right-sidebar.html" className="site-nav">Pagination - Infinite Scroll</a></li>
                                <li className="lvl-2"><a href="shop-grid-6.html" className="site-nav">Pagination - Load More</a></li>
                                <li className="lvl-2"><a href="product-swatches-style.html" className="site-nav">Diffrent Swatches Style</a></li>
                                <li className="lvl-2"><a href="product-labels.html" className="site-nav">Product Labels</a></li>
                                <li className="lvl-2"><a href="collection-3columns.html" className="site-nav last">Collection 3 Columns</a></li>
                              </ul>
                            </li>
                            <li className="lvl-1 col-12 col-md-4 col-lg-4">
                              <a href="#" className="site-nav lvl-1">Shop Pages</a>
                              <ul className="subLinks">
                                <li className="lvl-2"><a href="shop-right-sidebar.html" className="site-nav">Category Slideshow</a></li>
                                <li className="lvl-2"><a href="shop-grid-2.html" className="site-nav">2 Products Per Row</a></li>
                                <li className="lvl-2"><a href="shop-grid-3.html" className="site-nav">3 Products Per Row</a></li>
                                <li className="lvl-2"><a href="shop-grid-4.html" className="site-nav">4 Products Per Row</a></li>
                                <li className="lvl-2"><a href="shop-grid-5.html" className="site-nav">5 Products Per Row</a></li>
                                <li className="lvl-2"><a href="shop-grid-6.html" className="site-nav">6 Products Per Row</a></li>
                                <li className="lvl-2"><a href="shop-listview.html" className="site-nav">List View</a></li>
                                <li className="lvl-2"><a href="shop-listview-sidebar.html" className="site-nav">List View Sidebar</a></li>
                                <li className="lvl-2"><a href="shop-grid-3.html" className="site-nav">Pagination - Number</a></li>
                                <li className="lvl-2"><a href="product-hover-info.html" className="site-nav">Product Hover Info</a></li>
                                <li className="lvl-2"><a href="collection-4columns.html" className="site-nav last">Collection 4 Columns</a></li>
                              </ul>
                            </li>
                            <li className="lvl-1 col-12 col-md-4 col-lg-4">
                              <a href="#" className="site-nav lvl-1 menu-title">Shop Other Page</a>
                              <ul className="subLinks">
                                <li className="lvl-2"><a href="wishlist.html" className="site-nav">My Wishlist Page Style1</a></li>
                                <li className="lvl-2"><a href="wishlist-style2.html" className="site-nav">My Wishlist Page Style2</a></li>
                                <li className="lvl-2"><a href="compare.html" className="site-nav">Compare Page Style1</a></li>
                                <li className="lvl-2"><a href="compare-style2.html" className="site-nav last">Compare Page Style2</a></li>
                                <li className="lvl-2"><a href="cart.html" className="site-nav">Cart Page Style1</a></li>
                                <li className="lvl-2"><a href="cart-style2.html" className="site-nav">Cart Page Style2</a></li>
                                <li className="lvl-2"><a href="checkout.html" className="site-nav">Checkout Page Style1</a></li>
                                <li className="lvl-2"><a href="checkout-style2.html" className="site-nav">Checkout Page Style2</a></li>
                                <li className="lvl-2"><a href="checkout-success.html" className="site-nav">Checkout Success</a></li>
                                <li className="lvl-2"><a href="shop-search-results.html" className="site-nav">Search Results</a></li>
                                <li className="lvl-2"><a href="collection-5columns.html" className="site-nav last">Collection 5 Columns</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div className="lvl-1 col-12 col-md-3 col-lg-3 product-menu">
                          <a href="#" className="site-nav lvl-1 text-center">Best Seller</a>
                          <div className="grid-products text-center">
                            <div className="product-image">
                              <a href="product-layout1.html" className="grid-view-item__link"><img src="theme/assets/images/megamenu/megamenu-product.jpg" alt="image" title /></a>
                            </div>
                            <div className="product-details text-center">
                              <div className="product-name">
                                <a href="product-layout1.html">J B Crepe multi Color Top</a>
                              </div>
                              <div className="product-price">
                                <span className="price">$800.00</span>
                              </div>
                              <div className="product-review mt-1">
                                <i className="an an-star" />
                                <i className="an an-star" />
                                <i className="an an-star" />
                                <i className="an an-star" />
                                <i className="an an-star-half-alt" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 imageCol">
                          <div className="row mm2-banner">
                            <div className="col-12 col-md-6 col-lg-6">
                              <a href="shop-left-sidebar.html"><img src="theme/assets/images/megamenu/megamenu-bg2.jpg" alt="image" /></a>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                              <a href="shop-listview-sidebar.html"><img src="theme/assets/images/megamenu/megamenu-bg3.jpg" alt="image" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <a href="#">Features <i className="an an-angle-down" /> <span className="navLbl">Hot</span></a>
                    <div className="megamenu style2 megabgfull">
                      <ul className="row mmWrapper">
                        <li className="lvl-1 col-md-4 col-lg-4">
                          <a href="#" className="site-nav lvl-1 menu-title">Product Page</a>
                          <ul className="subLinks">
                            <li className="lvl-2"><a href="product-layout1.html" className="site-nav">Product Layout1</a></li>
                            <li className="lvl-2"><a href="product-layout2.html" className="site-nav">Product Layout2</a></li>
                            <li className="lvl-2"><a href="product-layout3.html" className="site-nav">Product Layout3</a></li>
                            <li className="lvl-2"><a href="product-layout4.html" className="site-nav">Product Layout4</a></li>
                            <li className="lvl-2"><a href="product-layout5.html" className="site-nav">Product Layout5</a></li>
                            <li className="lvl-2"><a href="product-layout6.html" className="site-nav">Product Layout6</a></li>
                            <li className="lvl-2"><a href="product-layout7.html" className="site-nav">Product Layout7</a></li>
                            <li className="lvl-2"><a href="product-layout8.html" className="site-nav last">Product Layout8</a></li>
                          </ul>
                        </li>
                        <li className="lvl-1 col-md-4 col-lg-4">
                          <a href="#" className="site-nav lvl-1 menu-title">Product Types</a>
                          <ul className="subLinks">
                            <li className="lvl-2"><a href="product-accordian.html" className="site-nav">Product Accordian</a></li>
                            <li className="lvl-2"><a href="product-layout3.html" className="site-nav">Product Tabs Left</a></li>
                            <li className="lvl-2"><a href="product-layout6.html" className="site-nav">Product Tabs Center</a></li>
                            <li className="lvl-2"><a href="product-standard.html" className="site-nav">Standard Product</a></li>
                            <li className="lvl-2"><a href="product-variable.html" className="site-nav">Variable Product</a></li>
                            <li className="lvl-2"><a href="product-grouped.html" className="site-nav">Grouped Product</a></li>
                            <li className="lvl-2"><a href="product-pre-orders.html" className="site-nav">Product Pre-orders</a></li>
                            <li className="lvl-2"><a href="product-call-for-price.html" className="site-nav last">Product Call for Price</a></li>
                          </ul>
                        </li>
                        <li className="lvl-1 col-md-4 col-lg-4">
                          <a href="#" className="site-nav lvl-1 menu-title">Product Types</a>
                          <ul className="subLinks">
                            <li className="lvl-2"><a href="product-layout6.html" className="site-nav">Products Coundown</a></li>
                            <li className="lvl-2"><a href="product-layout1.html" className="site-nav">New Product</a></li>
                            <li className="lvl-2"><a href="product-layout2.html" className="site-nav">Sale Product</a></li>
                            <li className="lvl-2"><a href="product-outofstock.html" className="site-nav">Out Of Stock Product</a></li>
                            <li className="lvl-2"><a href="product-external-affiliate.html" className="site-nav">External / Affiliate Product</a></li>
                            <li className="lvl-2"><a href="product-layout1.html" className="site-nav">Variable Image</a></li>
                            <li className="lvl-2"><a href="product-layout3.html" className="site-nav">Variable Select</a></li>
                            <li className="lvl-2"><a href="product-360-degree-view.html" className="site-nav last">360 Degree view</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <a href="#">Pages <i className="an an-angle-down" /><span className="navLbl new">New</span></a>
                    <div className="megamenu style2">
                      <ul className="row mmWrapper">
                        <li className="col-12 menuCol">
                          <ul className="row">
                            <li className="lvl-1 col">
                              <a href="#" className="site-nav lvl-1">My Account</a>
                              <ul className="subLinks">
                                <li><a href="login.html" className="site-nav">Login</a></li>
                                <li><a href="my-account.html" className="site-nav">My Account</a></li>
                                <li><a href="register.html" className="site-nav">Register</a></li>
                                <li><a href="forgot-your-password.html" className="site-nav">Forgot Password</a></li>
                                <li><a href="empty-cart.html" className="site-nav last">Empty cart</a></li>
                              </ul>
                            </li>
                            <li className="lvl-1 col">
                              <a href="#" className="site-nav lvl-1">About Us</a>
                              <ul className="subLinks">
                                <li><a href="about-us-style1.html" className="site-nav">About Us 01</a></li>
                                <li><a href="about-us-style2.html" className="site-nav">About Us 02</a></li>
                                <li><a href="about-us-style3.html" className="site-nav">About Us 03</a></li>
                                <li><a href="cms-page.html" className="site-nav">CMS Page</a></li>
                                <li><a href="empty-category.html" className="site-nav last">Empty category</a></li>
                              </ul>
                            </li>
                            <li className="lvl-1 col">
                              <a href="#" className="site-nav lvl-1">Others Pages</a>
                              <ul className="subLinks">
                                <li><a href="contactus-style1.html" className="site-nav">Contact Us 01</a></li>
                                <li><a href="contactus-style2.html" className="site-nav">Contact Us 02</a></li>
                                <li><a href="faqs-style1.html" className="site-nav">FAQs 01</a></li>
                                <li><a href="faqs-style2.html" className="site-nav">FAQs 02</a></li>
                                <li><a href="empty-compare.html" className="site-nav last">Empty compare</a></li>
                              </ul>
                            </li>
                            <li className="lvl-1 col">
                              <a href="#" className="site-nav lvl-1">Others Pages</a>
                              <ul className="subLinks">
                                <li><a href="404.html" className="site-nav">404 Error</a></li>
                                <li><a href="size-guide.html" className="site-nav">Size Guide</a></li>
                                <li><a href="privacy-policy.html" className="site-nav">Privacy Policy</a></li>
                                <li><a href="brands-page.html" className="site-nav">Brands Page</a></li>
                                <li><a href="empty-search.html" className="site-nav last">Empty search</a></li>
                              </ul>
                            </li>
                            <li className="lvl-1 col">
                              <a href="#" className="site-nav  lvl-1">Others Pages</a>
                              <ul>
                                <li><a href="coming-soon-style1.html" className="site-nav">Coming soon 01</a></li>
                                <li><a href="coming-soon-style2.html" className="site-nav">Coming soon 02</a></li>
                                <li><a href="coming-soon-style3.html" className="site-nav">Coming soon 03</a></li>
                                <li><a href="coming-soon-style4.html" className="site-nav">Coming soon 04</a></li>
                                <li><a href="empty-wishlist.html" className="site-nav last">Empty wishlist</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="col-12 imageCol">
                          <a href="#"><img src="theme/assets/images/megamenu/megamenu-bg4.jpg" alt="image" /></a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="lvl1 parent dropdown">
                    <a href="#">Lookbook <i className="an an-angle-down" /></a>
                    <ul className="dropdown">
                      <li><a href="lookbook-2columns.html" className="site-nav">2 Columns</a></li>
                      <li><a href="lookbook-3columns.html" className="site-nav">3 Columns</a></li>
                      <li><a href="lookbook-4columns.html" className="site-nav">4 Columns</a></li>
                      <li><a href="lookbook-5columns.html" className="site-nav">5 Columns + Fullwidth</a></li>
                      <li><a href="lookbook-shop.html" className="site-nav last">Lookbook Shop</a></li>
                    </ul>
                  </li>
                  <li className="lvl1 parent dropdown">
                    <a href="#">Blog <i className="an an-angle-down" /></a>
                    <ul className="dropdown">
                      <li><a href="blog-left-sidebar.html" className="site-nav">Left Sidebar</a></li>
                      <li><a href="blog-right-sidebar.html" className="site-nav">Right Sidebar</a></li>
                      <li><a href="blog-grid-view.html" className="site-nav">Grid View</a></li>
                      <li><a href="blog-list-view.html" className="site-nav">List View</a></li>
                      <li><a href="blog-fullwidth.html" className="site-nav">Fullwidth</a></li>
                      <li><a href="blog-masonry.html" className="site-nav">Masonry</a></li>
                      <li><a href="blog-single-post.html" className="site-nav last">Single Post</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* End Desktop Menu */}
            </div>
            {/* End Desktop Navigation */}
            {/* Right Side */}
            <div className="col-4 col-sm-4 col-md-4 col-lg-2">
              <div className="right-action d-flex-align-center justify-content-end">
                {/* Search */}
                <div className="item site-header__search d-none d-lg-block">
                  <button type="button" className="search-trigger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search"><i className="icon an an-search" /></button>
                </div>
                {/* End Search */}
                {/* User Links */}
                <div className="item user-menu-dropdown d-none d-sm-block d-md-block d-lg-block">
                  <span className="user-menu" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Account"><i className="icon an an-user-alt" /></span>
                  <ul className="customer-links list-inline" style={{"display":"none"}}>
                    <li className="item"><a href="login.html">Login</a></li>
                    <li className="item"><a href="register.html">Register</a></li>
                    <li className="item"><a href="my-account.html">Orders</a></li>
                    <li className="item"><a href="compare.html">Compare</a></li>
                  </ul>
                </div>
                {/* End User Links */}
                {/* Wishlist */}
                <div className="item site-header-wishlist">
                  <a href="wishlist.html" className="wishlist-trigger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Wishlist">
                    <i className="icon an an-heart" /><span id="WishCount" className="site-header-wish-count">2</span>
                  </a>
                </div>
                {/* End Wishlist */}
                {/* Minicart */}
                <div className="item site-cart" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cart">
                  <a href="#" className="site-header__cart btn-minicart" data-bs-toggle="modal" data-bs-target="#minicart-drawer">
                    <i className="icon an an-shopping-bag" /><span id="CartCount" className="site-header__cart-count">2</span>
                  </a>  
                </div>
                {/* End Minicart */}
              </div>
            </div>
            {/* End Right Side */}
          </div>
        </div>
      </div>
      {/* End Header */}
    </div>
    {/* End Desktop Header */}
  </div>
  {/* End Main Header */}
  {/* Mobile Menu */}
  <div className="mobile-nav-wrapper" role="navigation">
    <div className="closemobileMenu"><i className="icon an an-times-circle closemenu" /> Close Menu</div>
    <ul id="MobileNav" className="mobile-nav">
      <li className="lvl1 parent megamenu">
        <a href="index.html">Layout <i className="an an-plus" /></a>
        <ul>
          <li><a href="index.html" className="site-nav">Layout 1 - Classic 01</a></li>
          <li><a href="home2-default.html" className="site-nav">Layout 2 - Default</a></li>
          <li><a href="home3-classic.html" className="site-nav">Layout 3 - Classic 02</a></li>
          <li><a href="home4-fullwidth.html" className="site-nav">Layout 4 - Full Width</a></li>
          <li><a href="home5-boxed.html" className="site-nav">Layout 5 - Boxed</a></li>
          <li><a href="home6-parallax.html" className="site-nav">Layout 6 - Parallax  Banner</a></li>
          <li><a href="home7-creative.html" className="site-nav">Layout 7 - Creative</a></li>
          <li><a href="home8-simple.html" className="site-nav">Layout 8 - Simple</a></li>
          <li><a href="home9-simple2.html" className="site-nav">Layout 9 - Simple 2</a></li>
          <li><a href="home10-minimal.html" className="site-nav">Home 10 - Minimal</a></li>
          <li><a href="home11-modern.html" className="site-nav">Layout 11 - Modern</a></li>
          <li><a href="home12-category.html" className="site-nav">Layout 12 - Category</a></li>
          <li><a href="home13-dark.html" className="site-nav">Layout 13 - Dark</a></li>
          <li><a href="home14.html" className="site-nav last">Layout 14 <span className="lbl nm_label1">New</span></a></li>
        </ul>
      </li>
      <li className="lvl1 parent megamenu">
        <a href="shop-left-sidebar.html">Shop <i className="an an-plus" /></a>
        <ul>
          <li>
            <a href="#" className="site-nav">Shop Pages<i className="an an-plus" /></a>
            <ul>
              <li><a href="shop-left-sidebar.html" className="site-nav">Left Sidebar</a></li>
              <li><a href="shop-right-sidebar.html" className="site-nav">Right Sidebar</a></li>
              <li><a href="shop-fullwidth.html" className="site-nav">No Sidebar</a></li>
              <li><a href="shop-sidebar-drawer.html" className="site-nav">Sidebar Drawer</a></li>
              <li><a href="shop-listview-sidebar.html" className="site-nav">Sidebar Products List</a></li>
              <li><a href="shop-left-sidebar.html" className="site-nav">Sidebar Products Slider</a></li>
              <li><a href="shop-right-sidebar.html" className="site-nav">Pagination - Infinite Scroll</a></li>
              <li><a href="shop-grid-6.html" className="site-nav">Pagination - Load More</a></li>
              <li><a href="product-swatches-style.html" className="site-nav">Diffrent Swatches Style</a></li>
              <li><a href="product-labels.html" className="site-nav">Product Labels</a></li>
              <li><a href="collection-3columns.html" className="site-nav last">Collection 3 Columns</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="site-nav">Shop Pages<i className="an an-plus" /></a>
            <ul>
              <li><a href="shop-right-sidebar.html" className="site-nav">Category Slideshow</a></li>
              <li><a href="shop-grid-2.html" className="site-nav">2 Products Per Row</a></li>
              <li><a href="shop-grid-3.html" className="site-nav">3 Products Per Row</a></li>
              <li><a href="shop-grid-4.html" className="site-nav">4 Products Per Row</a></li>
              <li><a href="shop-grid-5.html" className="site-nav">5 Products Per Row</a></li>
              <li><a href="shop-grid-6.html" className="site-nav">6 Products Per Row</a></li>
              <li><a href="shop-listview.html" className="site-nav">List View</a></li>
              <li><a href="shop-listview-sidebar.html" className="site-nav">List View Sidebar</a></li>
              <li><a href="shop-grid-3.html" className="site-nav">Pagination - Number</a></li>
              <li><a href="product-hover-info.html" className="site-nav">Product Hover Info</a></li>
              <li><a href="collection-4columns.html" className="site-nav last">Collection 4 Columns</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="site-nav">Shop Other Page<i className="an an-plus" /></a>
            <ul>
              <li><a href="wishlist.html" className="site-nav">My Wishlist Page Style1</a></li>
              <li><a href="wishlist-style2.html" className="site-nav">My Wishlist Page Style2</a></li>
              <li><a href="compare.html" className="site-nav">Compare Page Style1</a></li>
              <li><a href="compare-style2.html" className="site-nav last">Compare Page Style2</a></li>
              <li><a href="cart.html" className="site-nav">Cart Page Style1</a></li>
              <li><a href="cart-style2.html" className="site-nav">Cart Page Style2</a></li>
              <li><a href="checkout.html" className="site-nav">Checkout Page Style1</a></li>
              <li><a href="checkout-style2.html" className="site-nav">Checkout Page Style2</a></li>
              <li><a href="checkout-success.html" className="site-nav">Checkout Success</a></li>
              <li><a href="shop-search-results.html" className="site-nav">Search Results</a></li>
              <li><a href="collection-5columns.html" className="site-nav last">Collection 5 Columns</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="lvl1 parent megamenu">
        <a href="product-layout1.html">Features <i className="an an-plus" /></a>
        <ul>
          <li>
            <a href="#" className="site-nav">Product Page<i className="an an-plus" /></a>
            <ul>
              <li><a href="product-layout1.html" className="site-nav">Product Layout1</a></li>
              <li><a href="product-layout2.html" className="site-nav">Product Layout2</a></li>
              <li><a href="product-layout3.html" className="site-nav">Product Layout3</a></li>
              <li><a href="product-layout4.html" className="site-nav">Product Layout4</a></li>
              <li><a href="product-layout5.html" className="site-nav">Product Layout5</a></li>
              <li><a href="product-layout6.html" className="site-nav">Product Layout6</a></li>
              <li><a href="product-layout7.html" className="site-nav">Product Layout7</a></li>
              <li><a href="product-layout8.html" className="site-nav last">Product Layout8</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="site-nav">Product Types <i className="an an-plus" /></a>
            <ul>
              <li><a href="product-accordian.html" className="site-nav">Product Accordian</a></li>
              <li><a href="product-layout3.html" className="site-nav">Product Tabs Left</a></li>
              <li><a href="product-layout6.html" className="site-nav">Product Tabs Center</a></li>
              <li><a href="product-standard.html" className="site-nav">Standard Product</a></li>
              <li><a href="product-variable.html" className="site-nav">Variable Product</a></li>
              <li><a href="product-grouped.html" className="site-nav">Grouped Product</a></li>
              <li><a href="product-pre-orders.html" className="site-nav">Product Pre-orders</a></li>
              <li><a href="product-call-for-price.html" className="site-nav last">Product Call for Price</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="site-nav">Product Types <i className="an an-plus" /></a>
            <ul>
              <li><a href="product-layout6.html" className="site-nav">Products Coundown</a></li>
              <li><a href="product-layout1.html" className="site-nav">New Product</a></li>
              <li><a href="product-layout2.html" className="site-nav">Sale Product</a></li>
              <li><a href="product-outofstock.html" className="site-nav">Out Of Stock Product</a></li>
              <li><a href="product-external-affiliate.html" className="site-nav">External / Affiliate Product</a></li>
              <li><a href="product-layout1.html" className="site-nav">Variable Image</a></li>
              <li><a href="product-layout3.html" className="site-nav">Variable Select</a></li>
              <li><a href="product-360-degree-view.html" className="site-nav last">360 Degree view</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="lvl1 parent megamenu">
        <a href="#">Pages <i className="an an-plus" /></a>
        <ul>
          <li>
            <a href="my-account.html" className="site-nav">My Account <i className="an an-plus" /></a>
            <ul>
              <li><a href="login.html" className="site-nav">Login</a></li>
              <li><a href="my-account.html" className="site-nav">My Account</a></li>
              <li><a href="register.html" className="site-nav">Register</a></li>
              <li><a href="forgot-your-password.html" className="site-nav">Forgot Password</a></li>
              <li><a href="empty-cart.html" className="site-nav last">Empty cart</a></li>
            </ul>
          </li>
          <li>
            <a href="about-us-style1.html" className="site-nav">About Us <i className="an an-plus" /></a>
            <ul>
              <li><a href="about-us-style1.html" className="site-nav">About Us 01</a></li>
              <li><a href="about-us-style2.html" className="site-nav">About Us 02</a></li>
              <li><a href="about-us-style3.html" className="site-nav">About Us 03</a></li>
              <li><a href="cms-page.html" className="site-nav">CMS Page</a></li>
              <li><a href="empty-category.html" className="site-nav last">Empty category</a></li>
            </ul>
          </li>
          <li className="grid__item lvl-1 col">
            <a href="#" className="site-nav  lvl-1">Others Pages <i className="an an-plus" /></a>
            <ul>
              <li><a href="contactus-style1.html" className="site-nav">Contact Us 01</a></li>
              <li><a href="contactus-style2.html" className="site-nav">Contact Us 02</a></li>
              <li><a href="faqs-style1.html" className="site-nav">FAQs 01</a></li>
              <li><a href="faqs-style2.html" className="site-nav">FAQs 02</a></li>
              <li><a href="empty-compare.html" className="site-nav last">Empty compare</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="site-nav">Others Pages <i className="an an-plus" /></a>
            <ul>
              <li><a href="404.html" className="site-nav">404 Error</a></li>
              <li><a href="size-guide.html" className="site-nav">Size Guide</a></li>
              <li><a href="privacy-policy.html" className="site-nav">Privacy Policy</a></li>
              <li><a href="brands-page.html" className="site-nav">Brands Page</a></li>
              <li><a href="empty-search.html" className="site-nav last">Empty search</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="site-nav">Others Pages <i className="an an-plus" /></a>
            <ul>
              <li><a href="coming-soon-style1.html" className="site-nav">Coming soon 01</a></li>
              <li><a href="coming-soon-style2.html" className="site-nav">Coming soon 02</a></li>
              <li><a href="coming-soon-style3.html" className="site-nav">Coming soon 03</a></li>
              <li><a href="coming-soon-style4.html" className="site-nav">Coming soon 04</a></li>
              <li><a href="empty-wishlist.html" className="site-nav last">Empty wishlist</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="lvl1 parent megamenu">
        <a href="lookbook-2columns.html">Lookbook <i className="an an-plus" /></a>
        <ul>
          <li><a href="lookbook-2columns.html" className="site-nav">2 Columns</a></li>
          <li><a href="lookbook-3columns.html" className="site-nav">3 Columns</a></li>
          <li><a href="lookbook-4columns.html" className="site-nav">4 Columns</a></li>
          <li><a href="lookbook-5columns.html" className="site-nav">5 Columns + Fullwidth</a></li>
          <li><a href="lookbook-shop.html" className="site-nav last">Lookbook Shop</a></li>
        </ul>
      </li>
      <li className="lvl1 parent megamenu">
        <a href="blog-left-sidebar.html">Blog <i className="an an-plus" /></a>
        <ul>
          <li><a href="blog-left-sidebar.html" className="site-nav">Left Sidebar</a></li>
          <li><a href="blog-right-sidebar.html" className="site-nav">Right Sidebar</a></li>
          <li><a href="blog-grid-view.html" className="site-nav">Grid View</a></li>
          <li><a href="blog-list-view.html" className="site-nav">List View</a></li>
          <li><a href="blog-fullwidth.html" className="site-nav">Fullwidth</a></li>
          <li><a href="blog-masonry.html" className="site-nav">Masonry</a></li>
          <li><a href="blog-single-post.html" className="site-nav last">Single Post</a></li>
        </ul>
      </li>
    </ul>
  </div>
  {/* End Mobile Menu */}
  {/* Body Content */}
  <div id="page-content">
    {/* Bredcrumbs */}
    <div className="bredcrumbWrap bredcrumb-style2">
      <div className="container breadcrumbs">
        <a href="index.html" title="Back to the home page">Home</a><span aria-hidden="true">|</span><span className="title-bold">Product Layout1</span>
      </div>
    </div>
    {/* End Bredcrumbs */}
    <div className="container">
      {/* Main Content */}
      <div id="ProductSection-product-template" className="product-template__container prstyle2">
        {/* #ProductSection product template */}
        <div className="product-single product-single-1">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="product-details-img product-single__photos bottom">
                {/* Product Images */}
                <div className="zoompro-wrap product-zoom-right pl-20">
                  <div className="zoompro-span">
                    <img className="blur-up lazyload zoompro" data-zoom-image="assets/images/product-detail-page/cape-dress-1.jpg" alt src="assets/images/product-detail-page/cape-dress-1.jpg" />               
                  </div>
                  <div className="product-labels"><span className="lbl pr-label1">new</span><span className="lbl on-sale">Exclusive</span></div>
                  <div className="product-buttons">
                    <a href="https://www.youtube.com/watch?v=93A2jOW5Mog" className="btn popup-video" data-bs-toggle="tooltip" data-bs-placement="left" title="Watch Video"><i className="icon an an-play" aria-hidden="true" /></a>
                    <a href="#" className="btn prlightbox" data-bs-toggle="tooltip" data-bs-placement="left" title="Zoom Image"><i className="icon an an-expand-arrows-alt" aria-hidden="true" /></a>
                  </div>
                </div>
                <div className="product-thumb product-thumb-1">
                  <div id="gallery" className="product-dec-slider-1 product-tab-left">
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-1.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-1.jpg" className="slick-slide slick-cloned active" data-slick-index={-4} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-1.jpg" alt />
                    </a>
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-2.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-2.jpg" className="slick-slide slick-cloned" data-slick-index={-3} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-2.jpg" alt />
                    </a>
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-3.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-3.jpg" className="slick-slide slick-cloned" data-slick-index={-2} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-3.jpg" alt />
                    </a>
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-4.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-4.jpg" className="slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-4.jpg" alt />
                    </a>
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-5.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-5.jpg" className="slick-slide slick-cloned" data-slick-index={0} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-5.jpg" alt />
                    </a>
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-6.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-6.jpg" className="slick-slide slick-cloned" data-slick-index={1} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-6.jpg" alt />
                    </a>
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-7.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-7.jpg" className="slick-slide slick-cloned" data-slick-index={2} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-7.jpg" alt />
                    </a>
                    <a data-image="theme/assets/images/product-detail-page/cape-dress-8.jpg" data-zoom-image="theme/assets/images/product-detail-page/cape-dress-8.jpg" className="slick-slide slick-cloned" data-slick-index={3} aria-hidden="true" tabIndex={-1}>
                      <img className="blur-up lazyload" src="theme/assets/images/product-detail-page/cape-dress-8.jpg" alt />
                    </a>
                  </div>
                </div>
                <div className="lightboximages">
                  <a href="theme/assets/images/product-detail-page/cape-dress-1.jpg" data-size="1462x2048" />
                  <a href="theme/assets/images/product-detail-page/cape-dress-2.jpg" data-size="1462x2048" />
                  <a href="theme/assets/images/product-detail-page/cape-dress-3.jpg" data-size="1462x2048" />
                  <a href="theme/assets/images/product-detail-page/cape-dress-4.jpg" data-size="1462x2048" />
                  <a href="theme/assets/images/product-detail-page/cape-dress-5.jpg" data-size="1462x2048" />
                  <a href="theme/assets/images/product-detail-page/cape-dress-6.jpg" data-size="1462x2048" />
                  <a href="theme/assets/images/product-detail-page/cape-dress-7.jpg" data-size="731x1024" />
                  <a href="theme/assets/images/product-detail-page/cape-dress-8.jpg" data-size="731x1024" />
                </div>
                {/* End Product Images */}
                {/* Wishlist - Share */}
                <div className="display-table shareRow pt-3 pb-0 d-table">
                  <div className="display-table-cell text-center align-top">
                    <div className="social-sharing">
                      <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-facebook" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Facebook">
                        <i className="icon an an-facebook" aria-hidden="true" /><span className="share-title" aria-hidden="true">Facebook</span>
                      </a>
                      <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-twitter" data-bs-toggle="tooltip" data-bs-placement="top" title="Tweet on Twitter">
                        <i className="icon an an-twitter" aria-hidden="true" /><span className="share-title" aria-hidden="true">Tweet</span>
                      </a>
                      <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-google" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on google+">
                        <i className="icon an an-google-plus" aria-hidden="true" /><span className="share-title" aria-hidden="true">Google+</span>
                      </a>
                      <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-pinterest" data-bs-toggle="tooltip" data-bs-placement="top" title="Pin on Pinterest">
                        <i className="icon an an-pinterest-p" aria-hidden="true" /><span className="share-title" aria-hidden="true">Pin it</span>
                      </a>
                      <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-email" data-bs-toggle="tooltip" data-bs-placement="top" title="Share by Email">
                        <i className="icon an an-envelope" aria-hidden="true" /><span className="share-title" aria-hidden="true">Email</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Wishlist - Share */}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              {/* Product Info */}
              <div className="product-single__meta">
                <h1 className="product-single__title">Product Layout Style 1</h1>
                {/* Product Reviews */}
                <div className="prInfoRow d-flex flex-wrap">
                  <div className="product-review">
                    <a className="reviewLink d-flex flex-wrap align-items-center" href="#tab2">
                      <i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star-half-alt" />
                      <span className="spr-badge-caption">6 reviews</span>
                    </a>
                  </div>
                </div>
                {/* End Product Reviews */}
                {/* Product Price */}
                <div className="product-single__price product-single__price-product-template">
                  <span className="visually-hidden">Regular price</span>
                  <s id="ComparePrice-product-template"><span className="money">$900.00</span></s>
                  <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                    <span id="ProductPrice-product-template"><span className="money">$788.00</span></span>
                  </span>
                  <span className="discount-badge"> <span className="devider">|</span>&nbsp;
                    <span>You Save</span>
                    <span id="SaveAmount-product-template" className="product-single__save-amount">
                      <span className="money">$100.00</span>
                    </span>
                    <span className="off">(<span>16</span>%)</span>
                  </span>
                  <div className="product__policies rte" data-product-policies>Tax included.</div>
                </div>
                {/* End Product Price */}
                {/* Product orderMsg */}
                <div className="orderMsg mb-2 pb-1 d-flex flex-wrap align-items-center" data-user={17} data-time={16}>
                  <img src="theme/assets/images/order-icon.jpg" alt="order" />
                  <strong className="ms-1 me-1 items">16</strong> sold in last <strong className="ms-1 me-1 time">6</strong> hours
                </div>
                {/* End Product orderMsg */}
                {/* Product Description */}
                <div className="product-single__description rte">
                  <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <ul className="checkmark">
                    <li>Wash Care: Hand Wash Cold</li>
                    <li>Size And Fit: The specifications for the model are: Height 5 feet 8 inches, bust 34 inches, waist 28 inches. The model is wearing size S.</li>
                  </ul>
                </div>
                {/* End Product Description */}
                {/* Product Quantity */}
                <div id="quantity_message">Hurry! Only  <span className="items">15</span>  left in stock.</div>
                {/* End Product Quantity */}
                {/* Form */}
                <form method="post" action="https://template.annimexweb.com/cart/add" id="product_form_10508262282" acceptCharset="UTF-8" className="product-form product-form-product-template product-form-border hidedropdown" encType="multipart/form-data">
                  {/* Size Swatch */}
                  <div className="swatch clearfix swatch-1 option2 w-100" data-option-index={1}>
                    <div className="product-form__item">
                      <label>Size: <span className="slVariant">XL</span><a href="#sizechart" className="sizelink">Size Guide <i className="icon an an-question" /></a></label>
                      <div data-value="XL" className="swatch-element xl available">
                        <input className="swatchInput" id="swatch-1-xl-1" type="radio" name="option-1" defaultValue="XL" />
                        <label className="swatchLbl medium" htmlFor="swatch-1-xl-1" data-bs-toggle="tooltip" data-bs-placement="top" title="XL">XL</label>
                      </div>
                      <div data-value="L" className="swatch-element l available">
                        <input className="swatchInput" id="swatch-1-l-1" type="radio" name="option-1" defaultValue="L" />
                        <label className="swatchLbl medium" htmlFor="swatch-1-l-1" data-bs-toggle="tooltip" data-bs-placement="top" title="L">L</label>
                      </div>
                      <div data-value="M" className="swatch-element m available">
                        <input className="swatchInput" id="swatch-1-m-1" type="radio" name="option-1" defaultValue="M" />
                        <label className="swatchLbl medium" htmlFor="swatch-1-m-1" data-bs-toggle="tooltip" data-bs-placement="top" title="M">M</label>
                      </div>
                      <div data-value="S" className="swatch-element s available">
                        <input className="swatchInput" id="swatch-1-s-1" type="radio" name="option-1" defaultValue="S" />
                        <label className="swatchLbl medium" htmlFor="swatch-1-s-1" data-bs-toggle="tooltip" data-bs-placement="top" title="S">S</label>
                      </div>
                      <div data-value="XS" className="swatch-element xs available">
                        <input className="swatchInput" id="swatch-1-xs-1" type="radio" name="option-1" defaultValue="XS" />
                        <label className="swatchLbl medium" htmlFor="swatch-1-xs-1" data-bs-toggle="tooltip" data-bs-placement="top" title="XS">XS</label>
                      </div>
                    </div>
                  </div>
                  {/* End Size Swatch */}
                  {/* Image Swatch */}
                  <div className="swatch clearfix swatch-0 option1 w-100" data-option-index={0}>
                    <div className="product-form__item">
                      <label>Color: <span className="slVariant">Blue</span></label>
                      <div data-value="Red" className="swatch-element color red available">
                        <input className="swatchInput" id="swatch-0-red1" type="radio" name="option-0" defaultValue="Red" />
                        <label className="swatchLbl color large" htmlFor="swatch-0-red1" style={{"background-image":"url(theme/assets/images/product-detail-page/cape-dress-1.jpg)"}} data-bs-toggle="tooltip" data-bs-placement="top" title="Red" />
                      </div>
                      <div data-value="Blue" className="swatch-element color blue available">
                        <input className="swatchInput" id="swatch-0-blue1" type="radio" name="option-0" defaultValue="Blue" />
                        <label className="swatchLbl color large" htmlFor="swatch-0-blue1" style={{"background-image":"url(theme/assets/images/product-detail-page/cape-dress-2.jpg)"}} data-bs-toggle="tooltip" data-bs-placement="top" title="Blue" />
                      </div>
                      <div data-value="Green" className="swatch-element color green available">
                        <input className="swatchInput" id="swatch-0-green1" type="radio" name="option-0" defaultValue="Green" />
                        <label className="swatchLbl color large" htmlFor="swatch-0-green1" style={{"background-image":"url(theme/assets/images/product-detail-page/cape-dress-3.jpg)"}} data-bs-toggle="tooltip" data-bs-placement="top" title="Green" />
                      </div>
                      <div data-value="Gray" className="swatch-element color gray available">
                        <input className="swatchInput" id="swatch-0-gray1" type="radio" name="option-0" defaultValue="Gray" />
                        <label className="swatchLbl color large" htmlFor="swatch-0-gray1" style={{"background-image":"url(theme/assets/images/product-detail-page/cape-dress-4.jpg)"}} data-bs-toggle="tooltip" data-bs-placement="top" title="Gray" />
                      </div>
                      <div data-value="Orange" className="swatch-element color orange available">
                        <input className="swatchInput" id="swatch-0-orange1" type="radio" name="option-0" defaultValue="Orange" />
                        <label className="swatchLbl color large" htmlFor="swatch-0-orange1" style={{"background-image":"url(theme/assets/images/product-detail-page/cape-dress-5.jpg)"}} data-bs-toggle="tooltip" data-bs-placement="top" title="Orange" />
                      </div>
                    </div>
                  </div>
                  {/* End Image Swatch */}
                  {/* Product Action */}
                  <div className="product-action clearfix">
                    <div className="product-form__item--quantity">
                      <div className="wrapQtyBtn">
                        <div className="qtyField">
                          <a className="qtyBtn minus" href="javascript:void(0);"><i className="icon an an-minus" aria-hidden="true" /></a>
                          <input type="text" name="quantity" defaultValue={1} className="product-form__input qty" />
                          <a className="qtyBtn plus" href="javascript:void(0);"><i className="icon an an-plus" aria-hidden="true" /></a>
                        </div>
                      </div>
                    </div>                                
                    <div className="product-form__item--submit">
                      <button type="button" name="add" className="btn product-form__cart-submit"><span>Add to cart</span></button>
                    </div>
                    <div className="payment-button" data-shopify="payment-button">
                      <button type="button" className="payment-button__button payment-button__button--unbranded">Buy it now</button>
                    </div>
                  </div>
                  {/* End Product Action */}
                  {/* Wishlist - Compare */}
                  <div className="infolinks d-flex flex-wrap align-items-center px-0 mb-0">
                    <a className="wishlist add-to-wishlist d-flex align-items-center" href="wishlist.html"><i className="icon an an-heart me-1" /> <span>Add to Wishlist</span></a>
                    <a className="wishlist add-to-wishlist d-flex align-items-center" href="compare.html"><i className="icon an an-sync me-1" /> <span>Add to Compare</span></a>
                    <a className="wishlist emaillink d-flex align-items-center" href="#productInquiry"><i className="icon an an-envelope me-1" style={{"margin-top":"-1px"}} /> <span>Enquiry</span></a>
                    <a className="wishlist shippingInfo d-flex align-items-center" href="#ShippingInfo"><i className="icon an an-telegram-plane me-1" /> <span>Delivery &amp; Returns</span></a>
                  </div>
                  {/* End Wishlist - Compare */}
                </form>
                {/* End Form */}
                {/* Product Feature */}
                <div className="safecheckout row my-3">
                  <div className="item col-lg-3 mb-1 mb-sm-0">
                    <div className="icon"><i className="icon an an-truck" /></div>
                    <div className="content">Free &amp; fast shipping</div>
                  </div>
                  <div className="item col-lg-3 mb-1 mb-sm-0">
                    <div className="icon"><i className="icon an an-certificate" /></div>
                    <div className="content">Secure checkout</div>
                  </div>
                  <div className="item col-lg-3">
                    <div className="icon"><i className="icon an an-thumbs-up" /></div>
                    <div className="content">Satisfaction guarantee</div>
                  </div>
                  <div className="item col-lg-3">
                    <div className="icon"><i className="icon an an-lock" /></div>
                    <div className="content">Privacy protected</div>
                  </div>
                </div>
                {/* End Product Feature */}
                <div id="freeShipMsg" className="freeShipMsg rte mb-1" data-price={199}><i className="icon an an-truck" aria-hidden="true" /> GETTING CLOSER! ONLY <b className="freeShip"><span className="money" data-currency-usd="$199.00" data-currency="USD">$199.00</span></b> AWAY FROM <b>FREE SHIPPING!</b></div>
                <div className="shippingMsg rte mb-1"><i className="icon an an-clock-o an-2x" aria-hidden="true" /> ESTIMATED DELIVERY BETWEEN <b id="fromDate">Wed. May 1</b> and <b id="toDate">Tue. May 7</b>.</div>
                <div className="userViewMsg rte" data-user={20} data-time={5000}><i className="icon an an-users" aria-hidden="true" /> <strong className="uersView">25</strong> People are looking at this product right now</div>
                {/* Product Intro */}
                <div className="product-info">
                  <p className="product-stock">Availability: <span className="instock">In Stock</span><span className="outstock hide">Unavailable</span></p> 
                  <p className="product-type">Product Type: <span>unique</span></p>  
                  <p className="product-type">Vendor: <span>Sibel Saral</span></p>  
                  <p className="product-sku">SKU: <span className="variant-sku">3435DT-1</span></p>
                </div>
                {/* End Product Intro */}
              </div>
              {/* End Product Info */}
            </div>
          </div>
          {/* End Product single */}
          {/* Product Tabs */}
          <div className="tabs-listing tab-details mt-0 mt-md-4">
            {/* Tabs */}
            <ul className="product-tabs d-none d-md-block">
              <li className="active" rel="tab1"><a className="tablink">Product Details</a></li>
              <li rel="tab2"><a className="tablink">Product Reviews</a></li>
              <li rel="tab3"><a className="tablink">Size Chart</a></li>
              <li rel="tab4"><a className="tablink">Shipping &amp; Returns</a></li>
            </ul>
            {/* End Tabs */}
            {/* Tabs Container */}
            <div className="tab-container pb-0 mb-0">
              {/* Tabs Content One */}
              <h3 className="acor-ttl active d-block d-md-none" rel="tab1">Product Details</h3>
              <div id="tab1" className="tab-content py-3 py-md-0" style={{"display":"block"}}>
                <div className="product-description rte">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <ul className="checkmark my-0">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
                    <li>Neque porro quisquam est qui dolorem ipsum quia dolor</li>
                    <li>Lorem Ipsum is not simply random text.</li>
                    <li>Morbi malesuada lacus sed metus luctus pulvinar quis at odio.</li>
                  </ul>
                  <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h3>
                  <p>Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                  <div className="rte__table-wrapper">
                    <div className="table-responsive">
                      <table>
                        <tbody>
                          <tr>
                            <td><strong>Shoulder (cm):</strong></td>
                            <td>XS: 35.5 cm, S: 36.5 cm, M: 37.5 cm, L: 38.5 cm</td>
                          </tr>
                          <tr>
                            <td><strong>Bust (cm):</strong></td>
                            <td>XS: 87 cm, S: 91 cm, M: 95 cm, L: 99 cm</td>
                          </tr>
                          <tr>
                            <td><strong>Sleeve Length (cm):</strong></td>
                            <td>XS: 13.5 cm, S: 14.5 cm, M: 15.5 cm, L: 16.5 cm</td>
                          </tr>
                          <tr>
                            <td><strong>Length (cm):</strong></td>
                            <td>XS: 59 cm, S: 60 cm, M: 61 cm, L: 62 cm</td>
                          </tr>
                          <tr>
                            <td><strong>Size Available:</strong></td>
                            <td>XS, S, M, L</td>
                          </tr>
                          <tr>
                            <td><strong>Fabric:</strong></td>
                            <td>Fabric has some stretch</td>
                          </tr>
                          <tr>
                            <td><strong>Season:</strong></td>
                            <td>Summer</td>
                          </tr>
                          <tr>
                            <td><strong>Cuff (cm):</strong></td>
                            <td>XS: 28.5 cm, S: 29.5 cm, M: 30.5 cm, L: 31.5 cm</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <h5 className="mt-4 mb-2" style={{"font-weight":"600"}}>Features:</h5>
                  <ul className="checkmark">
                    <li>high quality fabric, very comfortable to touch and wear. light weight and perfect forlayering</li>
                    <li>This cardigan sweater is cute for no reason,perfect for travel and casual. with dress or t-shirt inside,Perfect match</li>
                    <li>It can tie in front-is forgiving to you belly or tie behind like Bow, you can tie different ways</li>
                    <li>Pictures may slightly vary from actual item due to lighting and monitor.</li>
                  </ul>
                  <h5 className="mt-4 mb-2" style={{"font-weight":"600"}}>Notes:</h5>
                  <p>Return or exchange within 30 days from the delivered date.</p>
                </div>
              </div>
              {/* End Tabs Content One */}
              {/* Tabs Content Two */}
              <h3 className="acor-ttl d-block d-md-none" rel="tab2">Product Reviews</h3>
              <div id="tab2" className="tab-content py-3 py-md-0">
                <div id="shopify-product-reviews">
                  <div className="spr-container">
                    <div className="spr-header clearfix">
                      <div className="spr-summary text-center d-flex justify-content-start justify-content-sm-between flex-column flex-sm-row">
                        <span className="product-review justify-content-center"><a className="reviewLink"><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star-half-alt" /></a><span className="spr-summary-actions-togglereviews ms-2">Based on 6 reviews 456</span></span>
                        <span className="spr-summary-actions mt-3 mt-sm-0">
                          <a href="#" className="spr-summary-actions-newreview write-review-btn btn"><i className="an-1x an an-pencil-alt me-1" /> Write a review</a>
                        </span>
                      </div>
                    </div>
                    <div className="spr-content">
                      <div className="product-review-form spr-form clearfix" style={{"display":"none"}}>
                        <form method="post" action="#" id="new-review-form" className="new-review-form">
                          <h3 className="spr-form-title">Write a review</h3>
                          <fieldset className="spr-form-contact">
                            <div className="spr-form-contact-name">
                              <label className="spr-form-label" htmlFor="review_author_10508262282">Name</label>
                              <input className="spr-form-input spr-form-input-text" id="review_author_10508262282" type="text" name="review[author]" defaultValue placeholder="Enter your name" />
                            </div>
                            <div className="spr-form-contact-email">
                              <label className="spr-form-label" htmlFor="review_email_10508262282">Email</label>
                              <input className="spr-form-input spr-form-input-email " id="review_email_10508262282" type="email" name="review[email]" defaultValue placeholder="john.smith@example.com" />
                            </div>
                          </fieldset>
                          <fieldset className="spr-form-review">
                            <div className="spr-form-review-rating">
                              <label className="spr-form-label">Rating</label>
                              <div className="spr-form-input spr-starrating">
                                <div className="product-review justify-content-start">
                                  <a className="reviewLink" href="#"><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star-half-alt" /></a>
                                </div>
                              </div>
                            </div>
                            <div className="spr-form-review-title">
                              <label className="spr-form-label" htmlFor="review_title_10508262282">Review Title</label>
                              <input className="spr-form-input spr-form-input-text" id="review_title_10508262282" type="text" name="review[title]" defaultValue placeholder="Give your review a title" />
                            </div>
                            <div className="spr-form-review-body">
                              <label className="spr-form-label" htmlFor="review_body_10508262282">Body of Review <span className="spr-form-review-body-charactersremaining">(1500)</span></label>
                              <div className="spr-form-input">
                                <textarea className="spr-form-input spr-form-input-textarea" id="review_body_10508262282" data-product-id={10508262282} name="review[body]" rows={5} placeholder="Write your comments here" defaultValue={""} />
                              </div>
                            </div>
                          </fieldset>
                          <fieldset className="spr-form-actions">
                            <input type="submit" className="spr-button spr-button-primary button button-primary btn btn-primary" defaultValue="Submit Review" />
                          </fieldset>
                        </form>
                      </div>
                      <div className="spr-reviews">
                        <div className="spr-review">
                          <div className="spr-review-header">
                            <span className="product-review spr-starratings spr-review-header-starratings"><span className="reviewLink"><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /></span></span>
                            <h3 className="spr-review-header-title">Lorem ipsum dolor sit amet</h3>
                            <span className="spr-review-header-byline"><strong>dsacc</strong> on <strong>Apr 09, 2019</strong></span>
                          </div>
                          <div className="spr-review-content">
                            <p className="spr-review-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                        <div className="spr-review">
                          <div className="spr-review-header">
                            <span className="product-review spr-starratings spr-review-header-starratings"><span className="reviewLink"><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star" /><i className="an an-star-half-alt" /></span></span>
                            <h3 className="spr-review-header-title">Lorem Ipsum is simply dummy text of the printing</h3>
                            <span className="spr-review-header-byline"><strong>larrydude</strong> on <strong>Dec 30, 2018</strong></span>
                          </div>
                          <div className="spr-review-content">
                            <p className="spr-review-content-body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Tabs Content Two */}
              {/* Tabs Content Three */}
              <h3 className="acor-ttl d-block d-md-none" rel="tab3">Size Chart</h3>
              <div id="tab3" className="tab-content py-3 py-md-0">
                <div className="product-description rte">
                  <h4>WOMEN'S BODY SIZING CHART</h4>
                  <div className="table-responsive">
                    <table>
                      <tbody>
                        <tr>
                          <th>Size</th>
                          <th>XS</th>
                          <th>S</th>
                          <th>M</th>
                          <th>L</th>
                          <th>XL</th>
                        </tr>
                        <tr>
                          <td>Chest</td>
                          <td>31" - 33"</td>
                          <td>33" - 35"</td>
                          <td>35" - 37"</td>
                          <td>37" - 39"</td>
                          <td>39" - 42"</td>
                        </tr>
                        <tr>
                          <td>Waist</td>
                          <td>24" - 26"</td>
                          <td>26" - 28"</td>
                          <td>28" - 30"</td>
                          <td>30" - 32"</td>
                          <td>32" - 35"</td>
                        </tr>
                        <tr>
                          <td>Hip</td>
                          <td>34" - 36"</td>
                          <td>36" - 38"</td>
                          <td>38" - 40"</td>
                          <td>40" - 42"</td>
                          <td>42" - 44"</td>
                        </tr>
                        <tr>
                          <td>Regular inseam</td>
                          <td>30"</td>
                          <td>30½"</td>
                          <td>31"</td>
                          <td>31½"</td>
                          <td>32"</td>
                        </tr>
                        <tr>
                          <td>Long (Tall) Inseam</td>
                          <td>31½"</td>
                          <td>32"</td>
                          <td>32½"</td>
                          <td>33"</td>
                          <td>33½"</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4 className="mt-0 pt-1">MEN'S BODY SIZING CHART</h4>
                  <div className="table-responsive">
                    <table>
                      <tbody>
                        <tr>
                          <th>Size</th>
                          <th>XS</th>
                          <th>S</th>
                          <th>M</th>
                          <th>L</th>
                          <th>XL</th>
                          <th>XXL</th>
                        </tr>
                        <tr>
                          <td>Chest</td>
                          <td>33" - 36"</td>
                          <td>36" - 39"</td>
                          <td>39" - 41"</td>
                          <td>41" - 43"</td>
                          <td>43" - 46"</td>
                          <td>46" - 49"</td>
                        </tr>
                        <tr>
                          <td>Waist</td>
                          <td>27" - 30"</td>
                          <td>30" - 33"</td>
                          <td>33" - 35"</td>
                          <td>36" - 38"</td>
                          <td>38" - 42"</td>
                          <td>42" - 45"</td>
                        </tr>
                        <tr>
                          <td>Hip</td>
                          <td>33" - 36"</td>
                          <td>36" - 39"</td>
                          <td>39" - 41"</td>
                          <td>41" - 43"</td>
                          <td>43" - 46"</td>
                          <td>46" - 49"</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="text-center mt-3">
                    <img src="theme/assets/images/size.jpg" alt />
                  </div>
                </div>
              </div>
              {/* End Tabs Content Three */}
              {/* Tabs Content Four */}
              <h3 className="acor-ttl d-block d-md-none" rel="tab4">Shipping &amp; Returns</h3>
              <div id="tab4" className="tab-content py-3 py-md-0">
                <h4>Returns Policy</h4>
                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros justo, accumsan non dui sit amet. Phasellus semper volutpat mi sed imperdiet. Ut odio lectus, vulputate non ex non, mattis sollicitudin purus. Mauris consequat justo a enim interdum, in consequat dolor accumsan. Nulla iaculis diam purus, ut vehicula leo efficitur at.</p>
                <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. In blandit nunc enim, sit amet pharetra erat aliquet ac.</p>
                <h4>Shipping</h4>
                <p>Pellentesque ultrices ut sem sit amet lacinia. Sed nisi dui, ultrices ut turpis pulvinar. Sed fringilla ex eget lorem consectetur, consectetur blandit lacus varius. Duis vel scelerisque elit, et vestibulum metus.  Integer sit amet tincidunt tortor. Ut lacinia ullamcorper massa, a fermentum arcu vehicula ut. Ut efficitur faucibus dui Nullam tristique dolor eget turpis consequat varius. Quisque a interdum augue. Nam ut nibh mauris.</p>
              </div>
              {/* End Tabs Content Four */}
            </div>
            {/* End Tabs Container */}
          </div>
          {/* End Product Tabs */}
          {/* Related Product Slider */}
          <div className="related-product grid-products">
            <header className="section-header">
              <h2 className="section-header__title text-center h2"><span>Related Products</span></h2>
              <p className="sub-heading">You can stop autoplay, increase/decrease aniamtion speed and number of grid to show and products from store admin.</p>
            </header>
            <div className="productPageSlider">
              <div className="col-12 item">
                {/* Product Image */}
                <div className="product-image">
                  {/* Product Image */}
                  <a href="product-layout1.html">
                    {/* Image */}
                    <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image1.jpg" src="theme/assets/images/product-images/product-image1.jpg" alt="image" title="product" />
                    {/* End Image */}
                    {/* Hover Image */}
                    <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image1-1.jpg" src="theme/assets/images/product-images/product-image1-1.jpg" alt="image" title="product" />
                    {/* End Hover Image */}
                    {/* Product Label */}
                    <div className="product-labels rectangular"><span className="lbl on-sale">Exclusive</span></div>
                    {/* End Product Label */}
                  </a>
                  {/* End Product Image */}
                  {/* Countdown */}
                  <div className="saleTime desktop" data-countdown="2022/03/01" />
                  {/* End Countdown */}
                  {/* Product Button */}
                  <div className="button-set">
                    <div className="quickview-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="quick view">
                      <a href="#open-quickview-popup" className="btn quick-view-popup quick-view"><i className="icon an an-search" /></a>
                    </div>
                    <div className="variants add" data-bs-toggle="tooltip" data-bs-placement="top" title="add to cart">
                      <form className="addtocart" action="#" method="post">
                        <a href="#open-addtocart-popup" className="btn cartIcon btn-addto-cart open-addtocart-popup"><i className="icon an an-shopping-bag" /></a>
                      </form>
                    </div>
                    <div className="wishlist-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist">
                      <a href="#open-wishlist-popup" className="open-wishlist-popup wishlist add-to-wishlist"><i className="icon an an-heart" /></a>
                    </div>
                    <div className="compare-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to compare">
                      <a href="compare.html" className="compare add-to-compare"><i className="icon an an-random" /></a>
                    </div>
                  </div>
                  {/* End Product Button */}
                </div>
                {/* End Product Image */}
                {/* Product Details */}
                <div className="product-details text-center">
                  {/* Product Name */}
                  <div className="product-name">
                    <a href="product-layout1.html">Edna Dress</a>
                  </div>
                  {/* End Product Name */}
                  {/* Product Price */}
                  <div className="product-price">
                    <span className="old-price">$500.00</span>
                    <span className="price">$600.00</span>
                  </div>
                  {/* End Product Price */}
                  {/* Product Review */}
                  <div className="product-review">
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star-half-alt" />
                  </div>
                  {/* End Product Review */}
                  {/* Variant */}
                  <ul className="swatches">
                    <li className="swatch large radius"><img src="theme/assets/images/product-images/variant1.jpg" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue" /></li>
                    <li className="swatch large radius"><img src="theme/assets/images/product-images/variant1.jpg" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="Maroon" /></li>
                    <li className="swatch large radius"><img src="theme/assets/images/product-images/variant1.jpg" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="Pink" /></li>
                    <li className="swatch large radius"><img src="theme/assets/images/product-images/variant1.jpg" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="Green" /></li>
                  </ul>
                  {/* End Variant */}
                </div>
                {/* End Product Details */}
                {/* Countdown */}
                <div className="timermobile"><div className="saleTime desktop" data-countdown="2022/03/01" /></div>
                {/* End Countdown */}
              </div>
              <div className="col-12 item">
                {/* Product Image */}
                <div className="product-image">
                  {/* Product Image */}
                  <a href="product-layout1.html">
                    {/* Image */}
                    <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image2.jpg" src="theme/assets/images/product-images/product-image2.jpg" alt="image" title="product" />
                    {/* End Image */}
                    {/* Hover Image */}
                    <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image2-1.jpg" src="theme/assets/images/product-images/product-image2-1.jpg" alt="image" title="product" />
                    {/* End Hover Image */}
                    {/* Product Label */}
                    <div className="product-labels rectangular"><span className="lbl pr-label1">New</span></div>
                    {/* End Product Label */}
                  </a>
                  {/* End Product Image */}
                  {/* Product Button */}
                  <div className="button-set">
                    <div className="quickview-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="quick view">
                      <a href="#open-quickview-popup" className="btn quick-view-popup quick-view"><i className="icon an an-search" /></a>
                    </div>
                    <div className="variants add" data-bs-toggle="tooltip" data-bs-placement="top" title="add to cart">
                      <form className="addtocart" action="#" method="post">
                        <a href="#open-addtocart-popup" className="btn cartIcon btn-addto-cart open-addtocart-popup"><i className="icon an an-shopping-bag" /></a>
                      </form>
                    </div>
                    <div className="wishlist-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist">
                      <a href="#open-wishlist-popup" className="open-wishlist-popup wishlist add-to-wishlist"><i className="icon an an-heart" /></a>
                    </div>
                    <div className="compare-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to compare">
                      <a href="compare.html" className="compare add-to-compare"><i className="icon an an-random" /></a>
                    </div>
                  </div>
                  {/* End product button */}
                </div>
                {/* End Product Image */}
                {/* Product Details */}
                <div className="product-details text-center">
                  {/* Product Name */}
                  <div className="product-name">
                    <a href="product-layout1.html">Elastic Waist Dress</a>
                  </div>
                  {/* End Product Name */}
                  {/* Product Price */}
                  <div className="product-price">
                    <span className="price">$748.00</span>
                  </div>
                  {/* End Product Price */}
                  {/* Product Review */}
                  <div className="product-review">
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                  </div>
                  {/* End Product Review */}
                  {/* Variant */}
                  {/* End Variant */}
                </div>
                {/* End Product Details */}
              </div>
              <div className="col-12 item">
                {/* Product Image */}
                <div className="product-image">
                  {/* Product Image */}
                  <a href="product-layout1.html">
                    {/* Image */}
                    <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image3.jpg" src="theme/assets/images/product-images/product-image4.jpg" alt="image" title="product" />
                    {/* End Image */}
                    {/* Hover Image */}
                    <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image3-1.jpg" src="theme/assets/images/product-images/product-image4-1.jpg" alt="image" title="product" />
                    {/* End Hover Image */}
                    {/* Product Label */}
                    <div className="product-labels rectangular"><span className="lbl pr-label2">Hot</span></div>
                    {/* End Product Label */}
                  </a>
                  {/* End Product Image */}
                  {/* Product Button */}
                  <div className="button-set">
                    <div className="quickview-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="quick view">
                      <a href="#open-quickview-popup" className="btn quick-view-popup quick-view"><i className="icon an an-search" /></a>
                    </div>
                    <div className="variants add" data-bs-toggle="tooltip" data-bs-placement="top" title="add to cart">
                      <form className="addtocart" action="#" method="post">
                        <a href="#open-addtocart-popup" className="btn cartIcon btn-addto-cart open-addtocart-popup"><i className="icon an an-shopping-bag" /></a>
                      </form>
                    </div>
                    <div className="wishlist-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist">
                      <a href="#open-wishlist-popup" className="open-wishlist-popup wishlist add-to-wishlist"><i className="icon an an-heart" /></a>
                    </div>
                    <div className="compare-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to compare">
                      <a href="compare.html" className="compare add-to-compare"><i className="icon an an-random" /></a>
                    </div>
                  </div>
                  {/* End product button */}
                </div>
                {/* End Product Image */}
                {/* Product Details */}
                <div className="product-details text-center">
                  {/* Product Name */}
                  <div className="product-name">
                    <a href="product-layout1.html">3/4 Sleeve Kimono Dress</a>
                  </div>
                  {/* End Product Name */}
                  {/* Product Price */}
                  <div className="product-price">
                    <span className="price">$550.00</span>
                  </div>
                  {/* End Product Price */}
                  {/* Product Review */}
                  <div className="product-review">
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star-half-alt" />
                  </div>
                  {/* End Product Review */}
                  {/* Variant */}
                  <ul className="swatches">
                    <li className="swatch large radius"><img src="theme/assets/images/product-images/variant3.jpg" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue" /></li>
                    <li className="swatch large radius"><img src="theme/assets/images/product-images/variant3-1.jpg" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="Maroon" /></li>
                    <li className="swatch large radius"><img src="theme/assets/images/product-images/variant3-3.jpg" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="Pink" /></li>
                    <li className="swatch large radius"><img src="theme/assets/images/product-images/variant3-4.jpg" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="Green" /></li>
                  </ul>
                  {/* End Variant */}
                </div>
                {/* End Product Details */}
              </div>
              <div className="col-12 item">
                {/* Product Image */}
                <div className="product-image">
                  {/* Product Image */}
                  <a href="product-layout1.html">
                    {/* Image */}
                    <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image4.jpg" src="theme/assets/images/product-images/product-image4.jpg" alt="image" title="product" />
                    {/* End Image */}
                    {/* Hover Image */}
                    <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image4-1.jpg" src="theme/assets/images/product-images/product-image4-1.jpg" alt="image" title="product" />
                    {/* End Hover Image */}
                    {/* Product Label */}
                    <div className="product-labels"><span className="lbl on-sale">Sale</span></div>
                    {/* End Product Label */}
                  </a>
                  {/* End Product Image */}
                  {/* Product Button */}
                  <div className="button-set">
                    <div className="quickview-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="quick view">
                      <a href="#open-quickview-popup" className="btn quick-view-popup quick-view"><i className="icon an an-search" /></a>
                    </div>
                    <div className="variants add" data-bs-toggle="tooltip" data-bs-placement="top" title="add to cart">
                      <form className="addtocart" action="#" method="post">
                        <a href="#open-addtocart-popup" className="btn cartIcon btn-addto-cart open-addtocart-popup"><i className="icon an an-shopping-bag" /></a>
                      </form>
                    </div>
                    <div className="wishlist-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist">
                      <a href="#open-wishlist-popup" className="open-wishlist-popup wishlist add-to-wishlist"><i className="icon an an-heart" /></a>
                    </div>
                    <div className="compare-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to compare">
                      <a href="compare.html" className="compare add-to-compare"><i className="icon an an-random" /></a>
                    </div>
                  </div>
                  {/* End product button */}
                </div>
                {/* End Product Image */}
                {/* Product Details */}
                <div className="product-details text-center">
                  {/* Product Name */}
                  <div className="product-name">
                    <a href="product-layout1.html">Cape Dress</a>
                  </div>
                  {/* End Product Name */}
                  {/* Product Price */}
                  <div className="product-price">
                    <span className="old-price">$900.00</span>
                    <span className="price">$788.00</span>
                  </div>
                  {/* End Product Price */}
                  {/* Product Review */}
                  <div className="product-review">
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star-half-alt" />
                  </div>
                  {/* End Product Review */}
                  {/* Variant */}
                  <ul className="swatches">
                  </ul>
                  {/* End Variant */}
                </div>
                {/* End Product Details */}
              </div>
              <div className="col-12 item">
                {/* Product Image */}
                <div className="product-image">
                  {/* Product Image */}
                  <a href="product-layout1.html">
                    {/* Image */}
                    <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image5.jpg" src="theme/assets/images/product-images/product-image5.jpg" alt="image" title="product" />
                    {/* End Image */}
                    {/* Hover Image */}
                    <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image5-1.jpg" src="theme/assets/images/product-images/product-image5-1.jpg" alt="image" title="product" />
                    {/* End Hover Image */}
                  </a>
                  {/* End Product Image */}
                  {/* Product Button */}
                  <div className="button-set">
                    <div className="quickview-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="quick view">
                      <a href="#open-quickview-popup" className="btn quick-view-popup quick-view"><i className="icon an an-search" /></a>
                    </div>
                    <div className="variants add" data-bs-toggle="tooltip" data-bs-placement="top" title="add to cart">
                      <form className="addtocart" action="#" method="post">
                        <a href="#open-addtocart-popup" className="btn cartIcon btn-addto-cart open-addtocart-popup"><i className="icon an an-shopping-bag" /></a>
                      </form>
                    </div>
                    <div className="wishlist-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist">
                      <a href="#open-wishlist-popup" className="open-wishlist-popup wishlist add-to-wishlist"><i className="icon an an-heart" /></a>
                    </div>
                    <div className="compare-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to compare">
                      <a href="compare.html" className="compare add-to-compare"><i className="icon an an-random" /></a>
                    </div>
                  </div>
                  {/* End product button */}
                </div>
                {/* End Product Image */}
                {/* Product Details */}
                <div className="product-details text-center">
                  {/* Product Name */}
                  <div className="product-name">
                    <a href="product-layout1.html">Paper Dress</a>
                  </div>
                  {/* End Product Name */}
                  {/* Product Price */}
                  <div className="product-price">
                    <span className="price">$550.00</span>
                  </div>
                  {/* End Product Price */}
                  {/* Product Review */}
                  <div className="product-review">
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                  </div>
                  {/* End Product Review */}
                  {/* Variant */}
                  <ul className="swatches">
                    <li className="swatch large radius"><img src="theme/assets/images/product-images/variant5.jpg" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue" /></li>
                    <li className="swatch large radius"><img src="theme/assets/images/product-images/variant5-1.jpg" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="Maroon" /></li>
                    <li className="swatch large radius"><img src="theme/assets/images/product-images/variant5-2.jpg" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="Pink" /></li>
                  </ul>
                  {/* End Variant */}
                </div>
                {/* End Product Details */}
              </div>
              <div className="col-12 item">
                {/* Product Image */}
                <div className="product-image">
                  {/* Product Image */}
                  <a href="product-layout1.html">
                    {/* Image */}
                    <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image6.jpg" src="theme/assets/images/product-images/product-image6.jpg" alt="image" title="product" />
                    {/* End Image */}
                    {/* Hover Image */}
                    <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image6-1.jpg" src="theme/assets/images/product-images/product-image6-1.jpg" alt="image" title="product" />
                    {/* End Hover Image */}
                  </a>
                  {/* End Product Image */}
                  {/* Product Button */}
                  <div className="button-set">
                    <div className="quickview-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="quick view">
                      <a href="#open-quickview-popup" className="btn quick-view-popup quick-view"><i className="icon an an-search" /></a>
                    </div>
                    <div className="variants add" data-bs-toggle="tooltip" data-bs-placement="top" title="add to cart">
                      <form className="addtocart" action="#" method="post">
                        <a href="#open-addtocart-popup" className="btn cartIcon btn-addto-cart open-addtocart-popup"><i className="icon an an-shopping-bag" /></a>
                      </form>
                    </div>
                    <div className="wishlist-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist">
                      <a href="#open-wishlist-popup" className="open-wishlist-popup wishlist add-to-wishlist"><i className="icon an an-heart" /></a>
                    </div>
                    <div className="compare-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to compare">
                      <a href="compare.html" className="compare add-to-compare"><i className="icon an an-random" /></a>
                    </div>
                  </div>
                  {/* End product button */}
                </div>
                {/* End Product Image */}
                {/* Product Details */}
                <div className="product-details text-center">
                  {/* Product Name */}
                  <div className="product-name">
                    <a href="product-layout1.html">Buttercup Dress</a>
                  </div>
                  {/* End Product Name */}
                  {/* Product Price */}
                  <div className="product-price">
                    <span className="price">$420.00</span>
                  </div>
                  {/* End Product Price */}
                  {/* Product Review */}
                  <div className="product-review">
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star-half-alt" />
                  </div>
                  {/* End Product Review */}
                </div>
                {/* Variant */}
                <ul className="swatches">
                  <li className="swatch large radius"><img src="theme/assets/images/product-images/variant6.jpg" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue" /></li>
                  <li className="swatch large radius"><img src="theme/assets/images/product-images/variant6-1.jpg" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="Maroon" /></li>
                  <li className="swatch large radius"><img src="theme/assets/images/product-images/variant6-2.jpg" alt="image" data-bs-toggle="tooltip" data-bs-placement="top" title="Pink" /></li>
                </ul>
                {/* End Variant */}
                {/* End Product Details */}
              </div>
              <div className="col-12 item">
                {/* Product Image */}
                <div className="product-image">
                  {/* Product Image */}
                  <a href="product-layout1.html">
                    {/* Image */}
                    <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image7.jpg" src="theme/assets/images/product-images/product-image7.jpg" alt="image" title="product" />
                    {/* End Image */}
                    {/* Hover Image */}
                    <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image7-1.jpg" src="theme/assets/images/product-images/product-image7-1.jpg" alt="image" title="product" />
                    {/* End Hover Image */}
                  </a>
                  {/* End Product Image */}
                  {/* Product Button */}
                  <div className="button-set">
                    <div className="quickview-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="quick view">
                      <a href="#open-quickview-popup" className="btn quick-view-popup quick-view"><i className="icon an an-search" /></a>
                    </div>
                    <div className="variants add" data-bs-toggle="tooltip" data-bs-placement="top" title="add to cart">
                      <form className="addtocart" action="#" method="post">
                        <a href="#open-addtocart-popup" className="btn cartIcon btn-addto-cart open-addtocart-popup"><i className="icon an an-shopping-bag" /></a>
                      </form>
                    </div>
                    <div className="wishlist-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist">
                      <a href="#open-wishlist-popup" className="open-wishlist-popup wishlist add-to-wishlist"><i className="icon an an-heart" /></a>
                    </div>
                    <div className="compare-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="add to compare">
                      <a href="compare.html" className="compare add-to-compare"><i className="icon an an-random" /></a>
                    </div>
                  </div>
                  {/* End product button */}
                </div>
                {/* End Product Image */}
                {/* Product Details */}
                <div className="product-details text-center">
                  {/* Product Name */}
                  <div className="product-name">
                    <a href="product-layout1.html">Lima Shirt</a>
                  </div>
                  {/* End Product Name */}
                  {/* Product Price */}
                  <div className="product-price">
                    <span className="price">$698.00</span>
                  </div>
                  {/* End Product Price */}
                  {/* Product Review */}
                  <div className="product-review">
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                    <i className="an an-star" />
                  </div>
                  {/* End Product Review */}
                  {/* Variant */}
                  <ul className="swatches" />
                  {/* End Variant */}
                </div>
                {/* End Product Details */}
              </div>
            </div>
          </div>
          {/* End Related Product Slider */}
          {/* Recently Product Slider */}
          <div className="related-product recently-product grid-products">
            <header className="section-header">
              <h2 className="section-header__title text-center h2"><span>Recently Viewed Product</span></h2>
              <p className="sub-heading">You can manage this section from store admin as describe in above section</p>
            </header>
            <div className="productPageSlider">
              <div className="col-12 item">
                {/* Product Image */}
                <div className="product-image">
                  {/* Product Image */}
                  <a href="product-layout1.html">
                    {/* Image */}
                    <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image8.jpg" src="theme/assets/images/product-images/product-image8.jpg" alt="image" title="product" />
                    {/* End Image */}
                    {/* Hover image */}
                    <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image8-1.jpg" src="theme/assets/images/product-images/product-image8-1.jpg" alt="image" title="product" />
                    {/* End Hover Image */}
                  </a>
                  {/* End Product Image */}
                </div>
                {/* End Product Image */}
                {/* Product Details */}
                <div className="product-details text-center">
                  {/* Product Name */}
                  <div className="product-name">
                    <a href="product-layout1.html">Romary Dress</a>
                  </div>
                  {/* End Product Name */}
                  {/* Product Price */}
                  <div className="product-price">
                    <span className="price">$348.60</span>
                  </div>
                  {/* End Product Price */}
                </div>
                {/* End product details */}
              </div>
              <div className="col-12 item">
                {/* Product Image */}
                <div className="product-image">
                  {/* Product Image */}
                  <a href="product-layout1.html">
                    {/* Image */}
                    <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image9.jpg" src="theme/assets/images/product-images/product-image9.jpg" alt="image" title="product" />
                    {/* End Image */}
                    {/* Hover image */}
                    <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image9-1.jpg" src="theme/assets/images/product-images/product-image9-1.jpg" alt="image" title="product" />
                    {/* End Hover Image */}
                    {/* Product Label */}
                    <div className="product-labels"><span className="lbl pr-label3">Popular</span></div>
                    {/* End Product Label */}
                  </a>
                  {/* End Product Image */}
                </div>
                {/* End Product Image */}
                {/* Product Details */}
                <div className="product-details text-center">
                  {/* Product Name */}
                  <div className="product-name">
                    <a href="product-layout1.html">Floral Sleeveless Dress</a>
                  </div>
                  {/* End Product Name */}
                  {/* Product Price */}
                  <div className="product-price">
                    <span className="price">$380.00</span>
                  </div>
                  {/* End Product Price */}
                </div>
                {/* End product details */}
              </div>
              <div className="col-12 item">
                {/* Product Image */}
                <div className="product-image">
                  {/* Product Image */}
                  <a href="product-layout1.html">
                    {/* Image */}
                    <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image10.jpg" src="theme/assets/images/product-images/product-image10.jpg" alt="image" title="product" />
                    {/* End Image */}
                    {/* Hover image */}
                    <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image10-1.jpg" src="theme/assets/images/product-images/product-image10-1.jpg" alt="image" title="product" />
                    {/* End Hover Image */}
                  </a>
                  {/* End Product Image */}
                </div>
                {/* End Product Image */}
                {/* Product Details */}
                <div className="product-details text-center">
                  {/* Product Name */}
                  <div className="product-name">
                    <a href="product-layout1.html">Button Up Dress</a>
                  </div>
                  {/* End Product Name */}
                  {/* Product Price */}
                  <div className="product-price">
                    <span className="price">$400.00</span>
                  </div>
                  {/* End Product Price */}
                </div>
                {/* End product details */}
              </div>
              <div className="col-12 item">
                {/* Product Image */}
                <div className="product-image">
                  {/* Product Image */}
                  <a href="product-layout1.html">
                    {/* Image */}
                    <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image11.jpg" src="theme/assets/images/product-images/product-image11.jpg" alt="image" title="product" />
                    {/* End Image */}
                    {/* Hover image */}
                    <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image11-1.jpg" src="theme/assets/images/product-images/product-image11-1.jpg" alt="image" title="product" />
                    {/* End Hover Image */}
                  </a>
                  {/* End Product Image */}
                </div>
                {/* End Product Image */}
                {/* Product Details */}
                <div className="product-details text-center">
                  {/* Product Name */}
                  <div className="product-name">
                    <a href="product-layout1.html">Lexie Shirt</a>
                  </div>
                  {/* End Product Name */}
                  {/* Product Price */}
                  <div className="product-price">
                    <span className="price">$200.00</span>
                  </div>
                  {/* End Product Price */}
                </div>
                {/* End product details */}
              </div>
              <div className="col-12 item">
                {/* Product Image */}
                <div className="product-image">
                  {/* Product Image */}
                  <a href="product-layout1.html">
                    {/* Image */}
                    <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image12.jpg" src="theme/assets/images/product-images/product-image12.jpg" alt="image" title="product" />
                    {/* End Image */}
                    {/* Hover image */}
                    <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image12-1.jpg" src="theme/assets/images/product-images/product-image12-1.jpg" alt="image" title="product" />
                    {/* End Hover Image */}
                  </a>
                  {/* End Product Image */}
                </div>
                {/* End Product Image */}
                {/* Product Details */}
                <div className="product-details text-center">
                  {/* Product Name */}
                  <div className="product-name">
                    <a href="product-layout1.html">One Shoulder Dress in Navy</a>
                  </div>
                  {/* End Product Name */}
                  {/* Product Price */}
                  <div className="product-price">
                    <span className="price">$1,048.60</span>
                  </div>
                  {/* End Product Price */}
                </div>
                {/* End product details */}
              </div>
              <div className="col-12 item">
                {/* Product Image */}
                <div className="product-image">
                  {/* Product Image */}
                  <a href="product-layout1.html">
                    {/* Image */}
                    <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image13.jpg" src="theme/assets/images/product-images/product-image13.jpg" alt="image" title="product" />
                    {/* End Image */}
                    {/* Hover image */}
                    <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image13-1.jpg" src="theme/assets/images/product-images/product-image13-1.jpg" alt="image" title="product" />
                    {/* End Hover Image */}
                  </a>
                  {/* End Product Image */}
                </div>
                {/* End Product Image */}
                {/* Product Details */}
                <div className="product-details text-center">
                  {/* Product Name */}
                  <div className="product-name">
                    <a href="product-layout1.html">Triangle Sleeveless Dress in Multi</a>
                  </div>
                  {/* End Product Name */}
                  {/* Product Price */}
                  <div className="product-price">
                    <span className="price">$684.60</span>
                  </div>
                  {/* End Product Price */}
                </div>
                {/* End product details */}
              </div>
              <div className="col-12 item">
                {/* Product Image */}
                <div className="product-image">
                  {/* Product Image */}
                  <a href="product-layout1.html">
                    {/* Image */}
                    <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image14.jpg" src="theme/assets/images/product-images/product-image14.jpg" alt="image" title="product" />
                    {/* End Image */}
                    {/* Hover image */}
                    <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image14-1.jpg" src="theme/assets/images/product-images/product-image14-1.jpg" alt="image" title="product" />
                    {/* End Hover Image */}
                  </a>
                  {/* End Product Image */}
                </div>
                {/* End Product Image */}
                {/* Product Details */}
                <div className="product-details text-center">
                  {/* Product Name */}
                  <div className="product-name">
                    <a href="product-layout1.html">ACB Top</a>
                  </div>
                  {/* End Product Name */}
                  {/* Product Price */}
                  <div className="product-price">
                    <span className="price">$280.00</span>
                  </div>
                  {/* End Product Price */}
                </div>
                {/* End product details */}
              </div>
            </div>
          </div>
          {/* End Recently Product Slider */}
        </div>
        {/* #ProductSection product template */}
      </div>
      {/* End Main Content */}
    </div>                
  </div>
  {/* End Body Content */}
  {/* Footer */}
  <footer id="footer">
    <div className="site-footer">
      <div className="footer-top">
        <div className="container">
          {/* Footer Links */}
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
              <h4 className="h4">Quick Links</h4>
              <ul>
                <li><a href="#">Women</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Kids</a></li>
                <li><a href="#">Deals</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">New In</a></li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
              <h4 className="h4">Help</h4>
              <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">My Orders</a></li>
                <li><a href="#">Terms And Conditions</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Returns &amp; Exchange</a></li>
                <li><a href="#">Ordering &amp; Payment</a></li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
              <h4 className="h4">Contact Us</h4>
              <ul className="addressFooter">
                <li>
                  <i className="icon an an-map-marker" />
                  <p>55 Gallaxy Enque,<br />2568 steet, 23568 NY</p>
                </li>
                <li className="phone">
                  <i className="icon an an-phone-volume" />
                  <p><a href="tel:(440)0000000000">(440) 000 000 0000</a></p>
                </li>
                <li className="email">
                  <i className="icon an an-envelope" />
                  <p><a href="mailto:sales@yousite.com">sales@yousite.com</a></p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 newsletter">
              <div className="display-table">
                <div className="display-table-cell footer-newsletter">
                  <form action="#" method="post">
                    <label className="h4">Newsletter</label>
                    <p>sign up for newsletter to know our latest news and offers.</p>
                    <div className="input-group">
                      <input type="email" className="input-group__field newsletter__input" name="EMAIL" defaultValue placeholder="Email address" required />
                      <span className="input-group__btn">
                        <button type="submit" className="btn newsletter__submit" name="commit" id="Subscribe"><span className="newsletter__submit-text--large">Sign Up</span></button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Links */}
      </div>
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-Start align-items-center">
              <div className="footer-social w-100 text-start d-flex">
                <h3 className="h4">Stay Connected</h3>
                <ul className="list--inline site-footer__social-icons social-icons">
                  <li><a className="social-icons__link d-inline-block" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook"><i className="icon an an-facebook" /></a></li>
                  <li><a className="social-icons__link d-inline-block" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><i className="icon an an-twitter" /> <span className="icon__fallback-text">Twitter</span></a></li>
                  <li><a className="social-icons__link d-inline-block" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Pinterest"><i className="icon an an-pinterest-p" /> <span className="icon__fallback-text">Pinterest</span></a></li>
                  <li><a className="social-icons__link d-inline-block" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><i className="icon an an-instagram" /> <span className="icon__fallback-text">Instagram</span></a></li>
                  <li><a className="social-icons__link d-inline-block" href="#" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="YouTube"><i className="icon an an-youtube" /> <span className="icon__fallback-text">YouTube</span></a></li>
                </ul>
              </div>
            </div>
            {/*Footer Payment Icon*/}
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end align-items-center">
              <ul className="payment-icons list--inline w-100 justify-content-end text-end">
                <li><i className="icon an an-cc-visa" aria-hidden="true" /></li>
                <li><i className="icon an an-cc-mastercard" aria-hidden="true" /></li>
                <li><i className="icon an an-cc-amex" aria-hidden="true" /></li>
                <li><i className="icon an an-cc-paypal" aria-hidden="true" /></li>
                <li><i className="icon an an-cc-discover" aria-hidden="true" /></li>
              </ul>
            </div>
            {/* End Footer Payment Icon*/}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            {/* Footer Copyright */}
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 copyright text-center"><span>© 2021 DIVA.</span> All Rights Reserved.</div>
            {/* End Footer Copyright */}
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer */}
  {/* Scoll Top */}
  <div id="site-scroll"><i className="icon an an-angle-up" /></div>
  {/* End Scoll Top */}
  {/* Minicart Drawer */}
  <div className="minicart-right-drawer right modal fade" id="minicart-drawer" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="minicart-header">
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><i className="an an-times" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="left" title="Close" /></button>
          <h4 className="modal-title" id="myModalLabel2">Shopping Cart <strong>3</strong> items</h4>
        </div>
        <div className="minicart-body">
          <div className="empty-cart">
            <p>You have no items in your shopping cart.</p>
          </div>
          <div id="drawer-minicart" className="block block-cart">
            <ul className="mini-products-list">
              <li className="item">
                <a className="product-image" href="cart.html"><img src="theme/assets/images/product-images/cape-dress-1.jpg" alt="Frayed Layered Sleeve" title /></a>
                <div className="product-details">
                  <a href="#" className="remove" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><i className="an an-times" aria-hidden="true" /></a>
                  <a href="#" className="edit-i remove" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="an an-edit" aria-hidden="true" /></a>
                  <a className="pName" href="cart.html">Frayed Layered Sleeve</a>
                  <div className="variant-cart">Red / XL</div>
                  <div className="wrapQtyBtn clearfix">
                    <span className="label">Qty:</span>
                    <div className="qtyField clearfix">
                      <a className="qtyBtn minus" href="javascript:void(0);"><i className="an an-minus" aria-hidden="true" /></a>
                      <input type="text" name="quantity" defaultValue={1} className="product-form__input qty" />
                      <a className="qtyBtn plus" href="javascript:void(0);"><i className="an an-plus" aria-hidden="true" /></a>
                    </div>
                  </div>
                  <div className="priceRow clearfix">
                    <div className="product-price">
                      <span className="money">$199.00</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <a className="product-image" href="cart.html"><img src="theme/assets/images/product-images/cape-dress-2.jpg" alt="Floral Lined Jacket" title /></a>
                <div className="product-details">
                  <a href="#" className="remove" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><i className="an an-times" aria-hidden="true" /></a>
                  <a href="#" className="edit-i remove" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="an an-edit" aria-hidden="true" /></a>
                  <a className="pName" href="cart.html">Floral Lined Jacket</a>
                  <div className="variant-cart">Black / M</div>
                  <div className="wrapQtyBtn clearfix">
                    <span className="label">Qty:</span>
                    <div className="qtyField clearfix">
                      <a className="qtyBtn minus" href="javascript:void(0);"><i className="an an-minus" aria-hidden="true" /></a>
                      <input type="text" name="quantity" defaultValue={1} className="product-form__input qty" />
                      <a className="qtyBtn plus" href="javascript:void(0);"><i className="an an-plus" aria-hidden="true" /></a>
                    </div>
                  </div>
                  <div className="priceRow clearfix">
                    <div className="product-price">
                      <span className="money">$129.00</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <a className="product-image" href="cart.html"><img src="theme/assets/images/product-images/cape-dress-3.jpg" alt="Fit & Flare Trim Dress" title /></a>
                <div className="product-details">
                  <a href="#" className="remove" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><i className="an an-times" aria-hidden="true" /></a>
                  <a href="#" className="edit-i remove" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="an an-edit" aria-hidden="true" /></a>
                  <a className="pName" href="cart.html">Fit &amp; Flare Trim Dress</a>
                  <div className="variant-cart">white / XL</div>
                  <div className="wrapQtyBtn clearfix">
                    <span className="label">Qty:</span>
                    <div className="qtyField clearfix">
                      <a className="qtyBtn minus" href="javascript:void(0);"><i className="an an-minus" aria-hidden="true" /></a>
                      <input type="text" name="quantity" defaultValue={1} className="product-form__input qty" />
                      <a className="qtyBtn plus" href="javascript:void(0);"><i className="an an-plus" aria-hidden="true" /></a>
                    </div>
                  </div>
                  <div className="priceRow clearfix">
                    <div className="product-price">
                      <span className="money">$99.00</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="minicart-footer minicart-action">
          <div className="total-in">
            <p className="label"><b>Subtotal:</b><span className="item product-price"><span className="money">$427.00</span></span></p>
            <p className="label"><b>Shipping:</b><span className="item product-price"><span className="shipping">$10.00</span></span></p>
            <p className="label"><b>Tax:</b><span className="item product-price"><span className="tax">$0.00</span></span></p>
            <p className="label"><b>Total:</b><span className="item product-price"><span className="totals">$437.00</span></span></p>
          </div>
          <div className="buttonSet d-flex flex-row align-items-center text-center">
            <a href="cart.html" className="btn btn-secondary w-50 me-3">View Cart</a>
            <a href="checkout.html" className="btn btn-secondary w-50">Checkout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Minicart Drawer */}
  {/* Addtocart Added Popup */}
  <div id="open-addtocart-popup" className="addtocart-popup magnific-popup mfp-hide">
    <div className="addtocart-inner text-center clearfix">
      <h4>Added to your shopping cart.</h4>
      <div className="pro-img">
        <img className="img-fluid blur-up lazyload" src="theme/assets/images/product-images/addtocart-popup.jpg" data-src="theme/assets/images/product-images/addtocart-popup.jpg" alt="image" title="image" />
      </div>
      <div className="pro-details">
        <p className="pro-name mb-0">Floral Lined Jacket</p>
        <p className="pro-cz mb-0">Gray / XL</p>
        <p className="mb-0 qty-tol">1 X $113.88</p>
        <div className="addcart-total">
          Total: <b className="price">$113.88</b>
        </div>
        <div className="button-action">
          <button className="btn btn-secondary continue-shopping close-popup">Continue Shopping</button>
          <a href="cart.html" className="btn btn-primary view-cart">View Cart</a>
        </div>
      </div>
    </div>
  </div>
  {/* End Addtocart Added Popup */}
  {/* Quick View popup */}
  <div id="open-quickview-popup" className="quickview-popup magnific-popup mfp-hide">
    <div id="quickview-product-template" className="product-template__container prstyle1">
      <div className="product-singles">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="quickview-details mb-3 mb-md-0">
              {/* Thumbnails Single */}
              <div className="quickview-details-img quickview-thumbnails-single">
                <div className="item">
                  <img src="theme/assets/images/product-images/product-quickview1.jpg" data-src="theme/assets/images/product-images/product-quickview1.jpg" alt="image" />
                </div>
                <div className="item">
                  <img src="theme/assets/images/product-images/product-quickview2.jpg" data-src="theme/assets/images/product-images/product-quickview2.jpg" alt="image" />
                </div>
                <div className="item">
                  <img src="theme/assets/images/product-images/product-quickview3.jpg" data-src="theme/assets/images/product-images/product-quickview3.jpg" alt="image" />
                </div>
                <div className="item">
                  <img src="theme/assets/images/product-images/product-quickview4.jpg" data-src="theme/assets/images/product-images/product-quickview4.jpg" alt="image" />
                </div>
                <div className="item">
                  <img src="theme/assets/images/product-images/product-quickview5.jpg" data-src="theme/assets/images/product-images/product-quickview5.jpg" alt="image" />
                </div>
              </div>
              {/* End Thumbnails Single */}
              {/* Thumbnail Lists */}
              <div className="product-thumb-lists quickview-thumbnail-items">
                <div className="item">
                  <img className="blur-up lazyload" src="theme/assets/images/product-images/product-quickview1.jpg" data-src="theme/assets/images/product-images/product-quickview1.jpg" alt="image" />
                </div>
                <div className="item">
                  <img className="blur-up lazyload" src="theme/assets/images/product-images/product-quickview2.jpg" data-src="theme/assets/images/product-images/product-quickview2.jpg" alt="image" />
                </div>
                <div className="item">
                  <img className="blur-up lazyload" src="theme/assets/images/product-images/product-quickview3.jpg" data-src="theme/assets/images/product-images/product-quickview3.jpg" alt="image" />
                </div>
                <div className="item">
                  <img className="blur-up lazyload" src="theme/assets/images/product-images/product-quickview4.jpg" data-src="theme/assets/images/product-images/product-quickview4.jpg" alt="image" />
                </div>
                <div className="item">
                  <img className="blur-up lazyload" src="theme/assets/images/product-images/product-quickview5.jpg" data-src="theme/assets/images/product-images/product-quickview5.jpg" alt="image" />
                </div>
              </div>
              {/* End Thumbnail Lists */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="product-single__meta">
              <h2 className="product-single__title">Product Quick View Popup</h2>
              <div className="prInfoRow">
                <div className="product-stock"> <span className="instock ">In Stock</span> <span className="outstock hide">Unavailable</span> </div>
                <div className="product-sku">SKU: <span className="variant-sku">19115-rdxs</span></div>
              </div>
              <p className="product-single__price product-single__price-product-template">
                <span className="visually-hidden">Regular price</span>
                <s id="ComparePrice-product"><span className="money">$600.00</span></s>
                <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                  <span id="ProductPrice-product"><span className="money">$500.00</span></span>
                </span>
              </p>
              <div className="product-single__description rte">
                Diva is a minimalist modern shopify theme that will give you and your customers a smooth shopping experience which can be used for various kinds of stores such as fashion,...
              </div>
              <form method="post" action="https://template.annimexweb.com/cart/add" id="product_form_1" acceptCharset="UTF-8" className="product-form product-form-product-template hidedropdown" encType="multipart/form-data">
                <div className="swatch clearfix swatch-0 option1" data-option-index={0}>
                  <div className="product-form__item">
                    <label className="header">Size: <span className="slVariant">XS</span></label>
                    <div data-value="XS" className="swatch-element xs available" data-bs-toggle="tooltip" data-bs-placement="top" title="XS">
                      <input className="swatchInput" id="swatch-1-xs" type="radio" name="option-1" defaultValue="XS" />
                      <label className="swatchLbl medium" htmlFor="swatch-1-xs">XS</label>
                    </div>
                    <div data-value="S" className="swatch-element s available" data-bs-toggle="tooltip" data-bs-placement="top" title="S">
                      <input className="swatchInput" id="swatch-1-s" type="radio" name="option-1" defaultValue="S" />
                      <label className="swatchLbl medium" htmlFor="swatch-1-s">S</label>
                    </div>
                    <div data-value="M" className="swatch-element m available" data-bs-toggle="tooltip" data-bs-placement="top" title="M">
                      <input className="swatchInput" id="swatch-1-m" type="radio" name="option-1" defaultValue="M" />
                      <label className="swatchLbl medium" htmlFor="swatch-1-m">M</label>
                    </div>
                    <div data-value="L" className="swatch-element l available" data-bs-toggle="tooltip" data-bs-placement="top" title="L">
                      <input className="swatchInput" id="swatch-1-l" type="radio" name="option-1" defaultValue="L" />
                      <label className="swatchLbl medium" htmlFor="swatch-1-l">L</label>
                    </div>
                  </div>
                </div>
                <div className="swatch clearfix swatch-1 option2" data-option-index={1}>
                  <div className="product-form__item">
                    <label className="header">Color: <span className="slVariant">Red</span></label>
                    <div data-value="Red" className="swatch-element color red available" data-bs-toggle="tooltip" data-bs-placement="top" title="Red">
                      <input className="swatchInput" id="swatch-0-red" type="radio" name="option-0" defaultValue="Red" />
                      <label className="swatchLbl color medium" htmlFor="swatch-0-red" style={{"background-image":"url('theme/assets/images/product-images/product-quickview1.jpg')"}} />
                    </div>
                    <div data-value="Blue" className="swatch-element color blue available" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue">
                      <input className="swatchInput" id="swatch-0-blue" type="radio" name="option-0" defaultValue="Blue" />
                      <label className="swatchLbl color medium" htmlFor="swatch-0-blue" style={{"background-image":"url('theme/assets/images/product-images/product-quickview2.jpg')"}} />
                    </div>
                    <div data-value="Green" className="swatch-element color green available" data-bs-toggle="tooltip" data-bs-placement="top" title="Green">
                      <input className="swatchInput" id="swatch-0-green" type="radio" name="option-0" defaultValue="Green" />
                      <label className="swatchLbl color medium" htmlFor="swatch-0-green" style={{"background-image":"url('theme/assets/images/product-images/product-quickview3.jpg')"}} />
                    </div>
                    <div data-value="Gray" className="swatch-element color gray available" data-bs-toggle="tooltip" data-bs-placement="top" title="Gray">
                      <input className="swatchInput" id="swatch-0-gray" type="radio" name="option-0" defaultValue="Gray" />
                      <label className="swatchLbl color medium" htmlFor="swatch-0-gray" style={{"background-image":"url('theme/assets/images/product-images/product-quickview4.jpg')"}} />
                    </div>
                  </div>
                </div>
                {/* Product Action */}
                <div className="product-action clearfix">
                  <div className="product-form__item--quantity">
                    <div className="wrapQtyBtn">
                      <div className="qtyField">
                        <a className="qtyBtn minus" href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Minus"><i className="an an-minus" aria-hidden="true" /></a>
                        <input type="text" name="quantity" defaultValue={1} className="product-form__input qty" />
                        <a className="qtyBtn plus" href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Plus"><i className="an an-plus" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="product-form__item--submit">
                    <button type="button" name="add" className="btn product-form__cart-submit">
                      <span>Add to cart</span>
                    </button>
                    <div className="wishlist-btn">
                      <a className="wishlist add-to-wishlist" href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist"><i className="icon an an-heart" aria-hidden="true" /></a>
                    </div>
                  </div>
                </div>
                {/* End Product Action */}
              </form>
              <div className="display-table shareRow">
                <div className="display-table-cell">
                  <div className="social-sharing">
                    <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-facebook" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Facebook">
                      <i className="an an-facebook" aria-hidden="true" /><span className="share-title align-middle" aria-hidden="true">Share</span>
                    </a>
                    <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-twitter" data-bs-toggle="tooltip" data-bs-placement="top" title="Tweet on Twitter">
                      <i className="an an-twitter" aria-hidden="true" /><span className="share-title align-middle" aria-hidden="true">Tweet</span>
                    </a>
                    <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-google" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on google+">
                      <i className="an an-google-plus-g" aria-hidden="true" /><span className="share-title align-middle" aria-hidden="true">Google+</span>
                    </a>
                    <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-pinterest" data-bs-toggle="tooltip" data-bs-placement="top" title="Pin on Pinterest">
                      <i className="an an-pinterest-p" aria-hidden="true" /><span className="share-title align-middle" aria-hidden="true">Pin it</span>
                    </a>
                    <a target="_blank" href="#" className="btn btn--small btn--secondary btn--share share-email" data-bs-toggle="tooltip" data-bs-placement="top" title="Share by Email">
                      <i className="an an-envelope" aria-hidden="true" /><span className="share-title align-middle" aria-hidden="true">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End-product-single */}
      </div>
    </div>
  </div>
  {/* End Quick View Popup */}
  {/* Wishlist Added Popup */}
  <div id="open-wishlist-popup" className="wishlist-popup magnific-popup mfp-hide">
    <div className="wishlist-inner text-center clearfix">
      <h4>Successfully added in wishlist</h4>
      <div className="pro-img">
        <img className="img-fluid blur-up lazyload" src="theme/assets/images/product-images/addwishlist-popup.jpg" data-src="theme/assets/images/product-images/addwishlist-popup.jpg" alt="image" title="image" />
      </div>
      <div className="pro-details">
        <p className="pro-name mb-2">Frayed Layered Sleeve</p>
        <div className="button-action">
          <button className="btn btn-secondary mb-2 continue-shopping close-popup">Continue Shopping</button>
          <a href="wishlist.html" className="btn btn-primary view-wishlist">View Wishlist</a>
        </div>
      </div>
    </div>
  </div>
  {/* End Wishlist Added Popup */}
  {/* Shipping Popup */}
  <div id="ShippingInfo" className="mfpbox mfp-with-anim mfp-hide">
    <h5>DELIVERY</h5>
    <ul>
      <li>Dispatch: Within 24 Hours</li>
      <li>Free shipping across all products on a minimum purchase of $50.</li>
      <li>International delivery time - 7-10 business days</li>
      <li>Cash on delivery might be available</li>
      <li>Easy 30 days returns and exchanges</li>
    </ul>
    <h5>RETURNS</h5>
    <p>If you do not like the product you can return it within 15 days - no questions asked. This excludes bodysuits, swimwear and clearance sale items. We have an easy and hassle free return policy. Please look at our Delivery &amp; Returns section for further information.</p>
  </div>
  {/* End Shipping Popup*/}
  {/* Size Guide */}
  <div id="sizechart" className="mfpbox mfp-with-anim mfp-hide">
    <h4 className="text-start">WOMEN'S BODY SIZING CHART</h4>
    <div className="table-responsive">
      <table>
        <tbody>
          <tr>
            <th>Size</th>
            <th>XS</th>
            <th>S</th>
            <th>M</th>
            <th>L</th>
            <th>XL</th>
          </tr>
          <tr>
            <td>Chest</td>
            <td>31" - 33"</td>
            <td>33" - 35"</td>
            <td>35" - 37"</td>
            <td>37" - 39"</td>
            <td>39" - 42"</td>
          </tr>
          <tr>
            <td>Waist</td>
            <td>24" - 26"</td>
            <td>26" - 28"</td>
            <td>28" - 30"</td>
            <td>30" - 32"</td>
            <td>32" - 35"</td>
          </tr>
          <tr>
            <td>Hip</td>
            <td>34" - 36"</td>
            <td>36" - 38"</td>
            <td>38" - 40"</td>
            <td>40" - 42"</td>
            <td>42" - 44"</td>
          </tr>
          <tr>
            <td>Regular inseam</td>
            <td>30"</td>
            <td>30½"</td>
            <td>31"</td>
            <td>31½"</td>
            <td>32"</td>
          </tr>
          <tr>
            <td>Long (Tall) Inseam</td>
            <td>31½"</td>
            <td>32"</td>
            <td>32½"</td>
            <td>33"</td>
            <td>33½"</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4 className="text-start">MEN'S BODY SIZING CHART</h4>
    <div className="table-responsive">
      <table>
        <tbody>
          <tr>
            <th>Size</th>
            <th>XS</th>
            <th>S</th>
            <th>M</th>
            <th>L</th>
            <th>XL</th>
            <th>XXL</th>
          </tr>
          <tr>
            <td>Chest</td>
            <td>33" - 36"</td>
            <td>36" - 39"</td>
            <td>39" - 41"</td>
            <td>41" - 43"</td>
            <td>43" - 46"</td>
            <td>46" - 49"</td>
          </tr>
          <tr>
            <td>Waist</td>
            <td>27" - 30"</td>
            <td>30" - 33"</td>
            <td>33" - 35"</td>
            <td>36" - 38"</td>
            <td>38" - 42"</td>
            <td>42" - 45"</td>
          </tr>
          <tr>
            <td>Hip</td>
            <td>33" - 36"</td>
            <td>36" - 39"</td>
            <td>39" - 41"</td>
            <td>41" - 43"</td>
            <td>43" - 46"</td>
            <td>46" - 49"</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style={{"padding-left":"30px"}}><img src="theme/assets/images/size.jpg" alt /></div>
  </div>
  {/* End Size Guide */}
  {/* Ask About this Product */}
  <div id="productInquiry" className="mfpbox mfp-with-anim mfp-hide">
    <div className="contact-form form-vertical">
      <div className="page-title">
        <h4 className="mb-3">Camelia Reversible Jacket</h4>
      </div>
      <form method="post" action="#" id="contact_form" className="contact-form">
        <input type="hidden" name="form_type" defaultValue="contact" />
        <input type="hidden" name="utf8" defaultValue="✓" />
        <div className="formFeilds">
          <input type="hidden" name="contact[product name]" defaultValue="Camelia Reversible Jacket" />
          <input type="hidden" name="contact[product link]" defaultValue="/products/camelia-reversible-jacket-black-red" />
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <input type="text" id="ContactFormName" name="contact[name]" placeholder="Name" defaultValue required />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <input type="email" id="ContactFormEmail" name="contact[email]" placeholder="Email" defaultValue required />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <input required type="tel" id="ContactFormPhone" name="contact[phone]" pattern="[0-9\-]*" placeholder="Phone Number" defaultValue />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <textarea required rows={10} id="ContactFormMessage" name="contact[body]" placeholder="Message" defaultValue={""} />
            </div>  
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <input type="submit" className="btn" defaultValue="Send Message" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  {/* End Ask About this Product */}
  {/* Sticky Cart */}
  <div className="stickyCart">
    <div className="container">
      <form method="post" action="#" id="sticky-cart">
        <div className="left">
          <div className="img"><img src="theme/assets/images/product-detail-page/cape-dress-1.jpg" className="product-featured-img" alt="product" /></div>
          <div className="sticky-title ms-2">Women's Maxi Cape Dress</div>
        </div>
        <div className="right">
          <div className="stickyOption float-start">
            <select name="id" id="variantOptions1" className="product-form__variants selectbox no-js">
              <option selected="selected">Red / S - Rs. 35,643.51</option>
              <option disabled="disabled">Blue / S - Sold out</option>
              <option>Black / S - Rs. 35,643.51</option>
              <option>Pink / S - Rs. 35,643.51</option>
              <option>Red / M - Rs. 35,643.51</option>
              <option>Blue / M - Rs. 35,643.51</option>
              <option>Pink / M - Rs. 35,643.51</option>
              <option>Red / L - Rs. 35,643.51</option>
              <option>Blue / L - Rs. 35,643.51</option>
              <option>Black / L - Rs. 35,643.51</option>
            </select>
          </div>
          <div className="wrapQtyBtn" title="Quantity">
            <div className="qtyField">
              <a className="qtyBtn minus" href="javascript:void(0);"><i className="icon an an-minus" aria-hidden="true" /></a>
              <input type="text" id="quantity1" name="quantity" defaultValue={1} className="product-form__input qty" />
              <a className="qtyBtn plus" href="javascript:void(0);"><i className="icon an an-plus" aria-hidden="true" /></a>
            </div>
          </div>
          <button type="submit" name="add" className="btn product-form__cart-submit"><span>Add to cart</span></button>
        </div>
      </form>
    </div>
  </div>
  {/* End Sticky Cart */}
  <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="pswp__bg" />
    <div className="pswp__scroll-wrap"><div className="pswp__container"><div className="pswp__item" /><div className="pswp__item" /><div className="pswp__item" /></div><div className="pswp__ui pswp__ui--hidden"><div className="pswp__top-bar"><div className="pswp__counter" /><button className="pswp__button pswp__button--close" title="Close (Esc)" /><button className="pswp__button pswp__button--share" title="Share" /><button className="pswp__button pswp__button--fs" title="Toggle fullscreen" /><button className="pswp__button pswp__button--zoom" title="Zoom in/out" /><div className="pswp__preloader"><div className="pswp__preloader__icn"><div className="pswp__preloader__cut"><div className="pswp__preloader__donut" /></div></div></div></div><div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div className="pswp__share-tooltip" /></div><button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" /><button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" /><div className="pswp__caption"><div className="pswp__caption__center" /></div></div></div>
  </div>
</div>



  </div>)
}
export default UserLayout