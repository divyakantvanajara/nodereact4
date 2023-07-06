import { Link, Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
import axios from "axios"
import { Component } from "react"
import Cookies from "js-cookie"
class UserProduct extends Component 
{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      detail: '',
      price: '',
      photo: '',
      size: '',
      weight: '',
      stock: '',
      productid:''
    }
  }
  AddToCart = () =>{
    // alert('button clicked....');
    /*
         [{"error":"input is missing"}] 
         [{"error":"no"},{"message":"cart updated"}]
         input : usersid,productid(required) 
    */
   var usersid = Cookies.get('id');
   var apiurl = `https://theeasylearnacademy.com/shop/ws/add_to_cart.php?productid=${this.state.productid}&usersid=${usersid}`;
   var self = this;
   axios({
     url: apiurl, 
     method: 'get',
     responseType : 'json'
   }).then(function (response) {
        console.log(response.data);
         /*
                [{'error':'input missing'}]
                [{'error':'no'},{'message':'product added into cart'}]
            */
           var error = response.data[0]['error'];
           if(error != 'no')
           alert(error);

           else
          alert(response.data[1]['message']);
        
   });
   
}
  componentDidMount()
    {
        var url = new URL(window.location.href);
        var CurrentPage = url.href;
        var position_of_last_slash = CurrentPage.lastIndexOf("/");
        this.setState({
           productid : CurrentPage.substr(position_of_last_slash+1)
        }, () => {
          var self = this;
        var apiurl = `https://www.theeasylearnacademy.com/shop/ws/product.php?productid=${this.state.productid}`;
        
        axios({
            method: 'get',
            url: apiurl,
            responseType : 'json'
        }).then((response) => {
            console.log(response.data);
            if(response.data[0]['error'] !== 'no')
            {
                alert(response.data[0]['error']);
            }
            else if(response.data[1]['total']==0)
            {
                alert('no data found');
            }
            else 
            {
                self.setState({
                   title : response.data[2].title,
                   detail : response.data[2].detail,
                   price : response.data[2].price,
                   photo : response.data[2].photo,
                   weight : response.data[2].weight,
                   stock : response.data[2].stock,
                   size : response.data[2].size,
                });
            }
        });
    });
  }
  render() 
  {
    return (<div>
      <div className="pageWrapper">
        <UserHeader />
        {/* Body Content */}

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
                        <img src={"https://www.theeasylearnacademy.com/shop/images/product/" + this.state.photo} alt="image not found" className="img-fluid" />
                      </div>
                      <div className="product-labels"><span className="lbl pr-label1">new</span><span className="lbl on-sale">Exclusive</span></div>

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

                      <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                        <span id="ProductPrice-product-template"><span className="money">&#8377; {this.state.price}</span></span>
                      </span>


                      {/* End Product Price */}

                      {/* Product Description */}
                      <div className="product-single__description rte">
                        <p className="mb-2">{this.state.title}</p>
                        <ul className="checkmark">
                          <li>{this.state.detail}</li>

                        </ul>
                      </div>
                      {/* End Product Description */}
                      {/* Product Quantity */}
                      <div id="quantity_message">Hurry! Only  <span className="items">{this.state.stock}</span>  left in stock.</div>
                      {/* End Product Quantity */}
                      {/* Form */}
                      <form method="post" action="https://template.annimexweb.com/cart/add" id="product_form_10508262282" acceptCharset="UTF-8" className="product-form product-form-product-template product-form-border hidedropdown" encType="multipart/form-data">
                        {/* Size Swatch */}
                        <div className="swatch clearfix swatch-1 option2 w-100" data-option-index={1}>
                          <div className="product-form__item">
                            <label>{this.state.size} <span className="slVariant">XL</span></label>
                            <label>{this.state.weight} </label>
                            
                          </div>
                        </div>
                        {/* End Size Swatch */}
                        
                        {/* Product Action */}
                        <div className="product-action clearfix">
                         
                          <div className="product-form__item--submit">
                            <button type="button" onClick={this.AddToCart} className="btn btn-primary ">Add to cart</button>

                          </div>

                        </div>
                        {/* End Product Action */}
                        {/* Wishlist - Compare */}
                        <div className="infolinks d-flex flex-wrap align-items-center px-0 mb-0">
                          <a className="wishlist add-to-wishlist d-flex align-items-center" href="wishlist.html"><i className="icon an an-heart me-1" /> <span>Add to Wishlist</span></a>
                          <a className="wishlist add-to-wishlist d-flex align-items-center" href="compare.html"><i className="icon an an-sync me-1" /> <span>Add to Compare</span></a>
                          <a className="wishlist emaillink d-flex align-items-center" href="#productInquiry"><i className="icon an an-envelope me-1" style={{ "margin-top": "-1px" }} /> <span>Enquiry</span></a>
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



                </div>
                {/* #ProductSection product template */}
              </div>
              {/* End Main Content */}
            </div>
          </div>
          {/* End Body Content */}
          <UserFooter />


        </div>
        </div>
        </div>) 
 } 
}

export default UserProduct