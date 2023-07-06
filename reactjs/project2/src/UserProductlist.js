import React, { Component } from 'react'
import { Link, Outlet } from "react-router-dom";
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
import axios from 'axios'


class UserProductlist extends Component
{
  constructor(props)
  {
    super(props);
    this.state ={
      products :[]
    }
  }
  componentDidMount()
  {
      var url = new URL(window.location.href);
      var CurrentPage = url.href;
      var position_of_last_slash = CurrentPage.lastIndexOf("/");
      var categoryid = CurrentPage.substr(position_of_last_slash+1);
      categoryid=0;
      console.log(categoryid);
      var url = `https://www.theeasylearnacademy.com/shop/ws/product.php?categoryid=${categoryid}`;
      var self = this;
      axios({
        method:'get',
        url: url,
        responseType:'json'
      }).then(function(response){
          // console.log(response.data);
          if(response.data[0]['error'] !== 'no')
          {
            alert(response.data[0]['error'])
          }
          else if(response.data[1]['total'] == 0)
          {
            alert('no product found');
          }
          else 
          {
            response.data.splice(0,2);
            self.setState({
                products : response.data
            });
          }
      });
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
                      {this.state.products.map((product) =>{
                           return(<div className="col-6 col-sm-6 col-md-4 col-lg-4 item">
                           {/* Product Image */}
                           <div className="product-image">
                             {/* Product Image */}
                           
                               {/* Image */}
                               <img src={"https://theeasylearnacademy.com/shop/images/product/" + product.photo} alt='Image not available' />
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
                               <a href={"/product/" + product.id}>{product.title}</a>
                             </div>
                             {/* End Product Name */}
                             {/* Product Price */}
                             <div className="product-price">
                               <span className="price">&#8377; {product.price}</span>
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

export default UserProductlist