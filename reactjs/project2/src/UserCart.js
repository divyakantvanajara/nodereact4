import { Link, Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
import { Component } from "react"
import Cookies from "js-cookie";
import axios from 'axios'
class UserCart extends Component 
{
  constructor(props)
  {
    super(props);
    this.state ={
      items:[],
      total:0
    }
  }  
  componentDidMount()
    {
        // 1) [{"error":"input is missing"}]
        // 2) [{"error":"no"},{"total":0}]
        // 3) [{"error":"no"},{"total":2},{"id":"2","title":"dell laptop","price":"200","quantity":"2","weight":"3500","size":"15 inch","photo":"dell.jpg","detail":"WINDOWS 10 8 GB DDR3 RAM 512 gb ssd hard disk"},{"id":"1","title":"Acer Laptop","price":"100","quantity":"2","weight":"3000","size":"15 inch","photo":"acer.jpg","detail":"WINDOWS 10 4 GB DDR3 RAM 128 gb ssd hard disk"}]
        // input : usersid(required) 
        var userid = Cookies.get('id');
        var self = this;
        var apiurl = `https://www.theeasylearnacademy.com/shop/ws/cart.php?usersid=${userid}`;
        axios({
            url:apiurl,
            responseType:'json',
            method:'get'
        }).then(function(response){
            console.log(response.data);
            var error = response.data[0]['error'];
            if(error !='no')
                alert(error);
            else 
            {
                var total = response.data[1]['total'];
                if(total == 0)
                    alert('cart is empty');
                else 
                {
                    response.data.splice(0,2);
                    self.setState({
                        items:response.data
                    },()=>{
                        var temp = 0;
                        self.state.items.map(function(item){
                            temp = temp + (item['price'] * item['quantity']);
                        });
                        self.setState({
                            total:temp
                        })
                    });
                }
            }
        });
    }
  DeleteFromCart = (item) => {
        console.log('test');
        console.log(item);
        var self = this;
        var cartid = item['cartid'];
        var apiurl = `https://www.theeasylearnacademy.com/shop/ws/delete_from_cart.php?cartid=${cartid}`;
        console.log(apiurl);
        axios({
            url: apiurl,
            method: 'get',
            responseType: 'json',
        }).then(function(response){
            console.log(response.data);
            var error = response.data[0]['error'];
            if(error != 'no')
                alert(error);
            else 
            {
                alert(response.data[1]['message']);
                var temp = self.state.items.filter((CurrentItem)=>{
                    if(item != CurrentItem)
                        return CurrentItem
                });
                self.setState({
                    items:temp
                },() =>{
                    var temp_total = 0;
                    self.state.items.map(function(item){
                        temp_total = temp_total + (item['price'] * item['quantity']);
                    });
                    self.setState({
                        total:temp_total
                    })
                });

            }
        });
    }
  render()
  {
    return (<div>
      <div className="pageWrapper">
      <UserHeader />
  {/* Body Content */}
  <div id="page-content">
    {/* Page Title */}
    <div className="page section-header text-center">
      <div className="page-title">
        <div className="wrapper">
          <h1 className="page-title">Cart Page Style1</h1>
        </div>
      </div>
    </div>
    {/* End Page Title */}
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
          <div className="alert alert-success text-uppercase" role="alert">
            <i className="icon an an-truck icon-large" /> &nbsp;<strong>Congratulations!</strong> You've
            got free shipping!
          </div>
          <form action="#" method="post" className="cart style2">
            <table>
              <thead className="cart__row cart__header">
                <tr>
                  <th colSpan={2} className="text-center">Product</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Total</th>
                  <th className="action">Action</th>
                </tr>
              </thead>
              <tbody>
                 {this.state.items.map(item => {
                  return(
                    <tr className="cart__row border-bottom line1 cart-flex border-top">
                  <td className="cart__image-wrapper cart-flex-item">
                    <img src={"https://www.theeasylearnacademy.com/shop/images/product/" + item['photo']} alt />
                  </td>
                  <td className="cart__meta small--text-left cart-flex-item">
                    <div className="list-view-item__title">
                      <a href="product-layout1.html">{item['title']} </a>
                    </div>
                    
                  </td>
                  <td className="cart__price-wrapper cart-flex-item text-center">
                    <span className="money">{item['price']}</span>
                  </td>
                  <td className="cart__price-wrapper cart-flex-item text-center">
                    <span className="money">{item['quantity']}</span>
                  </td>
                  
                  <td className="small--hide cart-price text-center">
                    <span className="money">{item['price'] * item['quantity']}</span>
                  </td>
                  <td className="small--hide cart-price text-center">
                      <button type='button' className='btn btn-danger' onClick={() => this.DeleteFromCart(item)}>Remove</button> 
                  </td>
                 
                </tr>
                  )
                })}
                
              </tbody>
            </table>
          </form>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 cart-col">
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 cart-col">
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 cart__footer">
              <div className="solid-border">
               
                <div className="row border-bottom pb-2 pt-2">
                  <span className="col-12 col-sm-6 cart__subtotal-title"><strong>Grand
                      Total</strong></span>
                  <span className="col-12 col-sm-6 cart__subtotal-title cart__subtotal text-right"><span className="money">{this.state.total}</span></span>
                </div>
                <div className="cart__shipping">Shipping &amp; taxes calculated at checkout</div>
                <div className="customCheckbox cart_tearm">
                  <input type="checkbox" defaultValue="allen-vela" id="1532947863384-0" />
                  <label htmlFor="1532947863384-0">I agree with the terms and conditions</label>
                </div>
                <a href="/checkout" id="cartCheckout" className="btn btn--small-wide checkout">Proceed To Checkout</a>
                <div className="paymnet-img"><img src="theme/assets/images/payment-img.jpg" alt="Payment" />
                </div>
                <p className="mt-2"><a href="#">Checkout with Multiple Addresses</a></p>
              </div>
            </div>
          </div>
        </div>
        {/* End Main Content */}
      </div>
    </div>
  </div>
  {/* End Body Content */}
 <UserFooter />
</div>





    </div>)
  }
  
}
export default UserCart