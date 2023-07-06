import { Link, Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
var UserHome = () => {
  return (<div>

    <div className="template-index diva template-index-diva">

      {/* Page Wrapper */}
      <div className="pageWrapper">
       <UserHeader />
        {/* Body Content */}
        <div id="page-content">
          {/* Home Banner slider */}
          <div className="slideshow slideshow-wrapper pb-section sliderFull">
            <div className="home-slideshow">
              <div className="slide slide1 d-block">
                <div className="slideimg blur-up lazyload bg-size">
                  <img className="blur-up lazyload bg-img" data-src="theme/assets/images/slideshow-banners/diva-banner1.jpg" src="theme/assets/images/slideshow-banners/diva-banner1.jpg" alt="Welcome to Diva New Fashion style" title="Welcome to Diva New Fashion style" />
                  <div className="slideshow__text-wrap slideshow__overlay classic bottom">
                    <div className="slideshow__text-content mt-0 text-shadow center">
                      <div className="container">
                        <div className="wrap-caption left">
                          <p className="mega-small-title">Welcome to</p>
                          <h2 className="h1 mega-title slideshow__title">Diva New Fashion style</h2>
                          <span className="mega-subtitle slideshow__subtitle">Made with love and
                            passion</span>
                          <a href="collection-3columns.html" className="btn btn--large">Shop now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            
            </div>
          </div>
          {/* End Home Banner slider */}
          {/* Collection Tab slider */}
          <div className="tab-slider-product section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="section-header text-center">
                    <h2 className="h2">best selling products</h2>
                    <p>Here you can set up to 8 tabs for your store collection.<br />This will look perfect
                      on all device.</p>
                  </div>
                  <div className="tabs-listing">
                    <ul className="tabs clearfix">
                      <li className="active" rel="women">Women</li>
                    </ul>
                    <div className="tab_container">
                      {/* Tab 1 */}
                      <div id="women" className="tab_content grid-products grid-products-hover-btn">
                        <div className="productSlider">
                          <div className="col-12 item">
                            {/* Product Image */}
                            <div className="product-image">
                              {/* product Image */}
                              <a href="product-layout1.html">
                                {/* Image */}
                                <img className="primary blur-up lazyload" data-src="theme/assets/images/product-images/product-image1.jpg" src="theme/assets/images/product-images/product-image1.jpg" alt="image" title="product" />
                                {/* End Image */}
                                {/* Hover Image */}
                                <img className="hover blur-up lazyload" data-src="theme/assets/images/product-images/product-image1-1.jpg" src="theme/assets/images/product-images/product-image1-1.jpg" alt="image" title="product" />
                                {/* End Hover Image */}
                                {/* Product Label */}
                                <div className="product-labels rectangular"><span className="lbl on-sale">-16%</span> <span className="lbl pr-label1">new</span></div>
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
                                <a href="product-layout1.html">Square Cardigan Casual Top</a>
                              </div>
                              {/* End Product Name */}
                              {/* Product Price */}
                              <div className="product-price">
                                <span className="old-price">$800.00</span>
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
                            </div>
                            {/* End Product Details */}
                          </div>
                        </div>
                      </div>
                      {/* End Tab 1 */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Collection Tab slider */}
          {/* Custom Content */}
          <div className="section custom-content-section">
            <div className="container">
              <div className="row custom-content">
                <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center custom-item">
                  <div className="custom-item-inner custom-item-inner-image">
                    <img className="custom-image blur-up ls-is-cached lazyloaded" data-src="theme/assets/images/collection/cool-tshirts.jpg" src="theme/assets/images/collection/cool-tshirts.jpg" alt="Cool T-shirts Closet" title="Cool T-shirts Closet" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center custom-item">
                  <div className="custom-item-inner custom-item-inner-text text-md-left">
                    <h2 className="h3">Cool T-shirts Closet</h2>
                    <p>It’s time for a SS18 wardrobe update! We’ve got the<br /> latest arrivals and all the
                      hottest trends.<br /> Shop our newest clothing, footwear &amp; accessories.</p>
                    <a href="collection-3columns.html" className="btn border-btn-2">Discover More</a>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center custom-item">
                  <div className="custom-item-inner custom-item-inner-text text-md-left">
                    <h2 className="h3">All Fresh Picks</h2>
                    <p>Discover your new SS18 wardrobe favourites from<br /> our latest collection of
                      clothing, footwear &amp; accessories. <br />Treat yourself to some new staple pieces
                      to see you through<br /> the new season and beyond.</p>
                    <a href="collection-4columns.html" className="btn border-btn-2">Find Blouses Here</a>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center custom-item">
                  <div className="custom-item-inner custom-item-inner-image">
                    <img className="custom-image blur-up ls-is-cached lazyloaded" data-src="theme/assets/images/collection/fresh-picks.jpg" src="theme/assets/images/collection/fresh-picks.jpg" alt="All Fresh Picks" title="All Fresh Picks" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Custom Content */}
         
          {/* Store Feature */}
          <div className="store-feature section no-pb-section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <ul className="display-table store-info">
                    <li className="display-table-cell">
                      <i className="icon an an-truck" />
                      <div className="store-info-text">
                        <h5>Free Worldwide Shipping</h5>
                        <span className="sub-text">Free shipping on all US orders</span>
                      </div>
                    </li>
                    <li className="display-table-cell">
                      <i className="icon an an-money-bill-alt" />
                      <div className="store-info-text">
                        <h5>Money Guarantee</h5>
                        <span className="sub-text">30 days money back guarantee</span>
                      </div>
                    </li>
                    <li className="display-table-cell">
                      <i className="icon an an-question-circle" />
                      <div className="store-info-text">
                        <h5>Top Notch Support</h5>
                        <span className="sub-text">We support online 24/7 on day</span>
                      </div>
                    </li>
                    <li className="display-table-cell">
                      <i className="icon an an-lock" />
                      <div className="store-info-text">
                        <h5>Secure Payments</h5>
                        <span className="sub-text">All payment are Secured and trusted.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End Store Feature */}
        </div>
        {/* End Body Content */}
      <UserFooter />
      </div>
      {/* End Page Wrapper */}
    </div>

  
  </div>)
}
export default UserHome