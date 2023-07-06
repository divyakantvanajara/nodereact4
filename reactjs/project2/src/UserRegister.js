import { Link, Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
import { Component } from "react"
import axios from 'axios'
class UserRegister extends Component {

  constructor(props){
    super(props);
    this.state ={
      message :''
    }
  }
  onChangeDate =(e) =>{
   this.setState({
    [e.target.name]:e.target.value
   })
  }
  register =(e) =>{
    if(this.state.password != this.state.password2)
    {
      alert("password and confirm password are not same");
    }
    else{
      var apiurl = "https://theeasylearnacademy.com/shop/ws/register.php";
      var formdata = new FormData();

      formdata.append("email",this.state.email);
      formdata.append("mobile",this.state.mobile);
      formdata.append("password",this.state.password);

      var self =this;
      axios({
        method:'post',
        url :apiurl,
        data:formdata,
        responseType:'json',

        headers:{
          'Content-Type':'multipart/form-data'
        }
      }).then(function(response){
        console.log(response.data);

        var error =response.data[0]['error'];
        if(error !== 'no')
        alert(error)
        else if(response.data[1]['success'] === 'no')
        self.setState({
          message:response.data[2]['message']
         
        })
        else{
          alert('register successfull');
          //redirect on login route
          window.location = '/login';
        }
      })
    }
    e.preventDefault();
  }
  render() {
    
    return (<div>
      <div className="pageWrapper">
        {/* Promotion Bar */}
        <UserHeader />
        {/* End Mobile Menu */}
        {/* Body Content */}
        <div id="page-content">
          {/* Page Title */}
          <div className="page section-header text-center mb-0">
            <div className="page-title">
              <div className="wrapper"><h1 className="page-width">Register</h1></div>
            </div>
          </div>
          {/* End Page Title */}
          {/* Breadcrumbs */}
          <div className="bredcrumbWrap bredcrumbWrapPage bredcrumb-style2 text-center">
            <div className="container breadcrumbs">
              <a href="/" title="Back to the home page">Home</a><span aria-hidden="true">|</span><span className="title-bold">Register</span>
            </div>
          </div>
          {/* End Breadcrumbs */}
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 box">
                <div className="mb-4">
                  <h3>Personal Information</h3>
                  <form method="post" onSubmit={this.register} action="#" acceptCharset="UTF-8" className="customer-form">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <label htmlFor="CustomerEmail">Email address <span className="required">*</span></label>
                          <input id="email" type="text" name="email" placeholder onChange={this.onChangeDate} />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <label htmlFor="CustomerLastName">Mobile No <span className="required">*</span></label>
                          <input id="mobile" type="number" name="mobile" placeholder onChange={this.onChangeDate} />
                        </div>
                      </div>
                    </div>



                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <label htmlFor="CustomerPassword">Password <span className="required">*</span></label>
                          <input id="password" type="password" name="password" onChange={this.onChangeDate} placeholder />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <label htmlFor="CustomerConfirmPassword">Confirm Password <span className="required">*</span></label>
                          <input onChange={this.onChangeDate} id="password2" type="Password" name="password2" placeholder />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="text-left col-12 col-sm-12 col-md-6 col-lg-6">
                        <input type="submit" className="btn mb-3" defaultValue="Submit" />
                      </div>
                      <div className="text-right col-12 col-sm-12 col-md-6 col-lg-6">
                        <a href="/login"><i className="icon an an-angle-double-left me-1" />Back To Login</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Body Content */}
        {/* Footer */}
        <UserFooter />
        {/* End Minicart Drawer */}
      </div>





    </div>)
  }
  
  }
export default UserRegister