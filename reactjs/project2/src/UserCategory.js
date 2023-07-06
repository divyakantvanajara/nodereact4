import React, { Component } from 'react'
import { Link, Outlet } from "react-router-dom";
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
import axios from 'axios'

class UserCategory extends Component
{
  constructor(props)
  {
    super(props);
    this.state ={
      categories :[]
    }
  }
  componentDidMount()
  {
    var self = this;
    axios({
      method:'get',
      url:'https://www.theeasylearnacademy.com/shop/ws/category.php',
      responseType:'json',
      
    }).then(function(response){
      var error =response.data[0]['error']
      if(error !== 'no'){
        alert(error);
      }
      else
      {
        var total = response.data[1]['total']
        if(total ==0){
          alert('no category found');
        }
        else
        {
          response.data.splice(0,2);
          self.setState({
            categories: response.data
          })
        }
      }
    })
  }
  render(){
    return (<div>

      <div className="pageWrapper">
      <UserHeader />
        <div id="page-content">
          {/* Collection Banner */}
          <div className="collection-header">
            <div className="collection-hero">
              <div className="collection-hero__image blur-up lazyload" style={{"background-image":"url('theme/assets/images/collection/women-collection-bnr.jpg')"}} />
              <div className="collection-hero__title-wrapper">
                <h1 className="collection-hero__title page-width">Shop Left Sidebar</h1>
              </div>
            </div>
            <div className="collection-description container" />
          </div>
          {/* End Collection Banner */}
          <div className="container">
            <div className="row">
             
              {/* Main Content */}
              <div className="col-12 col-sm-12 col-md-12 col-lg-9 main-col">
                <div className="productList">
                  {/* Grid Product */}
                  <div className="grid-products grid--view-items ">
                    <div className="row">
                      {this.state.categories.map(function (category){
                       
                        return(<div className="col-6 col-sm-6 col-md-4 col-lg-4 item">
                        {/* Product Image */}
                        <div className="product-image">
                          {/* Product Image */}
                        
                            {/* Image */}
                            <img className="" data-src="theme/assets/images/product-images/product-image2.jpg" src="theme/assets/images/product-images/product-image2.jpg" alt="image" title="product" />
                            {/* End Image */}
                           
                            {/* Product Label */}
                            <div className=""><span className="lbl pr-label1">New</span></div>
                            {/* End Product Label */}
              
                          {/* End Product Image */}
                        </div>
                        {/* End Product Image */}
                        {/* Product Details */}
                        <div className="product-details text-center">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href={"/product_list/" + category.id}>{category.title}</a>
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
                      </div>)
                      })}
              
                      
                    </div>
                  </div>
                  {/* End Grid Product */}
                </div>
              </div>
              {/* End Main Content */}
            </div>
          </div>
        </div>
        
        {/* End Body Content */}
        <UserFooter />
        {/* End Wishlist Added Popup */}
      </div>
      
      
      
        </div>)
  }
}

export default UserCategory