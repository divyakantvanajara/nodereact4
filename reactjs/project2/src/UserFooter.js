import {Link, Outlet} from "react-router-dom"

function UserFooter ()
{
    return(<div>
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
                              <button type="submit" className="btn newsletter__submit" name="commit" id="Subscribe"><span className="newsletter__submit-text--large">Sign
                                Up</span></button>
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
                    <div className="footer-social w-100 text-start d-flex align-items-center">
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
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 copyright text-center"><span>© 2021
                    DIVA.</span> All Rights Reserved.</div>
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
          <div id="ProductSection-product-template" className="product-template__container prstyle1">
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
                      <s id="ComparePrice-product-template"><span className="money">$600.00</span></s>
                      <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                        <span id="ProductPrice-product-template"><span className="money">$500.00</span></span>
                      </span>
                    </p>
                    <div className="product-single__description rte">
                      Diva is a minimalist modern shopify theme that will give you and your customers a
                      smooth shopping experience which can be used for various kinds of stores such as
                      fashion,...
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
                            <label className="swatchLbl color medium" htmlFor="swatch-0-red" style={{ "background-image": "url('theme/assets/images/product-images/product-quickview1.jpg')" }} />
                          </div>
                          <div data-value="Blue" className="swatch-element color blue available" data-bs-toggle="tooltip" data-bs-placement="top" title="Blue">
                            <input className="swatchInput" id="swatch-0-blue" type="radio" name="option-0" defaultValue="Blue" />
                            <label className="swatchLbl color medium" htmlFor="swatch-0-blue" style={{ "background-image": "url('theme/assets/images/product-images/product-quickview2.jpg')" }} />
                          </div>
                          <div data-value="Green" className="swatch-element color green available" data-bs-toggle="tooltip" data-bs-placement="top" title="Green">
                            <input className="swatchInput" id="swatch-0-green" type="radio" name="option-0" defaultValue="Green" />
                            <label className="swatchLbl color medium" htmlFor="swatch-0-green" style={{ "background-image": "url('theme/assets/images/product-images/product-quickview3.jpg')" }} />
                          </div>
                          <div data-value="Gray" className="swatch-element color gray available" data-bs-toggle="tooltip" data-bs-placement="top" title="Gray">
                            <input className="swatchInput" id="swatch-0-gray" type="radio" name="option-0" defaultValue="Gray" />
                            <label className="swatchLbl color medium" htmlFor="swatch-0-gray" style={{ "background-image": "url('theme/assets/images/product-images/product-quickview4.jpg')" }} />
                          </div>
                        </div>
                      </div>
                      {/* Product Action */}
                      <div className="product-action clearfix">
                        <div className="product-form__item--quantity">
                          <div className="wrapQtyBtn">
                            <div className="qtyField">
                              <a className="qtyBtn minus" href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Minus"><i className="an an-minus" aria-hidden="true" /></a>
                              <input type="text" id="Quantity" name="quantity" defaultValue={1} className="product-form__input qty" />
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
              {/*End-product-single*/}
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
        {/* Product Suggestion */}
        <div className="product-suggestion-content clearfix border-0 rounded-0 alert fade show" role="alert">
          <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close"><i className="an an-times" aria-hidden="true" /></button>
          <div className="product-suggestion">
            <div className="suggestion-item">
              <div className="d-table suggestion-product">
                <div className="d-table-cell align-middle">
                  <img className="img-fluid blur-up lazyload" src="theme/assets/images/product-images/product-suggestion1.jpg" data-src="theme/assets/images/product-images/product-suggestion1.jpg" alt="image" title="image" width={85} />
                </div>
                <div className="d-table-cell align-middle ps-3">
                  <span className="s-some d-block">Someone liked and Bought</span>
                  <a className="s-name d-block" href="product-layout1.html"><b>Fit &amp; Flare Trim Dress</b></a>
                  <span className="s-minutes d-block">26 minutes ago</span>
                  <span className="s-form d-block">From <b>New York, USA</b></span>
                </div>
              </div>
            </div>
            <div className="suggestion-item">
              <div className="d-table suggestion-product">
                <div className="d-table-cell align-middle">
                  <img className="img-fluid blur-up lazyload" src="theme/assets/images/product-images/product-suggestion2.jpg" data-src="theme/assets/images/product-images/product-suggestion2.jpg" alt="image" title="image" width={85} />
                </div>
                <div className="d-table-cell align-middle ps-3">
                  <span className="s-some d-block">Someone liked and Bought</span>
                  <a className="s-name d-block" href="product-layout1.html"><b>Floral Lined Jacket</b></a>
                  <span className="s-minutes d-block">18 minutes ago</span>
                  <span className="s-form d-block">From <b>London</b></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Product Suggestion */}
        {/* Newsletter Popup */}
        <div className="newsletter-wrap" id="popup-container">
          <div id="popup-window">
            <a className="btn closepopup"><i className="icon icon an an-times" /></a>
            {/* Modal content*/}
            <div className="display-table splash-bg">
              <div className="display-table-cell width40"><img src="theme/assets/images/newsletter-img.jpg" alt="Join Our Mailing List" title="Join Our Mailing List" /></div>
              <div className="display-table-cell width60 text-center">
                <div className="newsletter-left">
                  <h1>Get Updates from Diva</h1>
                  <p>Be the first to know about our new arrivals, exclusive offers and the latest fashion
                    updates.</p>
                  <form action="#" method="post">
                    <div className="input-group">
                      <input type="email" className="input-group__field newsletter__input" name="EMAIL" defaultValue placeholder="Email address" required />
                      <span className="input-group__btn">
                        <button type="submit" className="btn newsletter__submit w-100" name="commit" id="subscribeBtn"> <span className="newsletter__submit-text--large">Sign
                          Up</span> </button>
                      </span>
                    </div>
                  </form>
                  <ul className="list--inline justify-content-center site-footer__social-icons social-icons">
                    <li><a className="social-icons__link" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook"><i className="icon an an-facebook" aria-hidden="true" /></a></li>
                    <li><a className="social-icons__link" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><i className="icon an an-twitter" aria-hidden="true" /></a></li>
                    <li><a className="social-icons__link" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Pinterest"><i className="icon an an-pinterest-p" aria-hidden="true" /></a></li>
                    <li><a className="social-icons__link" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><i className="icon an an-instagram" aria-hidden="true" /></a></li>
                    <li><a className="social-icons__link" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="YouTube"><i className="icon an an-youtube" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Newsletter Popup */}
    </div>

    );
}
export default UserFooter;