import { Link, Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
import { Component } from "react"
import axios from "axios"
import Cookies from "js-cookie"
class UserCheckout  extends Component
{
  constructor(props)
  {
      super(props);
      this.state = {};
  }
  Checkout = (e) => {
      console.log(this.state);
      //usersid,fullname,address1,address2,mobile,city,pincode,remarks (required)
      var ApiUrl = "https://www.theeasylearnacademy.com/shop/ws/checkout.php";
      var form = new FormData();
      form.append('usersid',Cookies.get('id'));
      form.append('fullname',this.state.fullname);
      form.append('address1',this.state.address1);
      form.append('address2',this.state.address2);
      form.append('mobile',this.state.mobile);
      form.append('city',this.state.city);
      form.append('pincode',this.state.pincode);
      form.append('remarks',this.state.remarks);
      axios({
          url: ApiUrl,
          method: 'post',
          responseType: 'json',
          data: form
      }).then((response) => {
          var data = response.data
          console.log(data);
          /*
              1) [{"error":"input is missing"}]
              2) [{"error":"no"},{"success":"no"},{"message":"cart is empty"}]
              3) [{"error":"no"},{"success":"no"},{"message":"following items are out of stock \ndell laptop"}]
              4) [{"error":"no"},{"success":"yes"},{"message":"order placed successfully with orderid 4"}]
          */
          var error = data[0]['error'];
          if(error != "no")
              alert(error);
          else 
          {
              alert(data[2]['message']);
              if(data[1]['success'] == 'yes')
              {
                  window.location = '/';
              }
          }
      });
      e.preventDefault();
  }
  updateValue  = (e) => {
      //console.log(e.target.value);
      //alert('hi');
      this.setState({
          [e.target.name] : e.target.value
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
        <div className="wrapper"><h1 className="page-title">Checkout Page Style1</h1></div>
      </div>
    </div>
    {/* End Page Title */}
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
          
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
          
        </div>
      </div>
      <div className="row billing-fields">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3 mb-md-0">
          <div className="create-ac-content">
            <form method="post" action="#" onSubmit={this.Checkout}>
              <fieldset>
                <h2 className="login-title mb-3">Billing details</h2>
                <div className="row">
                  <div className="form-group col-md-12 col-lg-12 col-xl-12 required">
                    <label htmlFor="fullname">Full Name <span className="required-f">*</span></label>
                    <input name="fullname"  id="fullname" type="text" onChange={this.updateValue} />
                  </div>
                 
                </div>
                <div className="row">
                  <div className="form-group col-md-12 col-lg-12 col-xl-12 required">
                    <label htmlFor="address1">Address 1 <span className="required-f">*</span></label>
                    <input name="address1"  id="address1" type="text" onChange={this.updateValue}/>
                  </div>
                  <div className="form-group col-md-12 col-lg-12 col-xl-12 required">
                    <label htmlFor="address2">Address 2 <span className="required-f">*</span></label>
                    <input name="address2"  id="address2" type="text" onChange={this.updateValue}/>
                  </div>
                  <div className="form-group col-md-12 col-lg-12 col-xl-12 required">
                    <label htmlFor="mobile">Mobile No <span className="required-f">*</span></label>
                    <input name="mobile"  id="mobile" type="mobile" onChange={this.updateValue} />
                  </div>
                </div>
               
                <div className="row">
                  
                  <div className="form-group col-md-12 col-lg-12 col-xl-12 required">
                    <label htmlFor="city">City <span className="required-f">*</span></label>
                    <input name="city" id="city" type="text" onChange={this.updateValue}/>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12 col-lg-12 col-xl-12 required">
                    <label htmlFor="pincode">Post Code <span className="required-f">*</span></label>
                    <input name="pincode"  id="pincode" type="text" />
                  </div>
                  
                </div>
              
                <div className="row">
                  <div className="form-group col-md-12 col-lg-12 col-xl-12 required">
                    <label htmlFor="remarks">remarks<span className="required-f">*</span></label>
                    <input name="remarks"  id="remarks" type="text" onChange={this.updateValue} />
                  </div>
                  
                </div>
                <input type="submit" className="btn btn-denger text-white" defaultValue="Place order" />
                
              </fieldset>
            </form>
          </div>
        </div>
        
      </div>
      {/*End Main Content*/}        
    </div>
  </div>
  {/* End Body Content */}
  <UserFooter />

</div>


  
    </div>)
  }
  
}
export default UserCheckout