import { Link, Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
import { Component } from "react"
import Cookies from "js-cookie";
import axios from "axios"
class UserChangYourPassword extends Component {
 
    constructor(props)
    {
      super(props);
      this.state = {

      };
    }
    UpdateValue = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      });
    }
    submitForm =(e) =>{
      e.preventDefault();
      console.log(this.state);
      if(this.isValidInput()==true)
      {
          this.UpdatePassword();
      }
    }
    isValidInput()
    {
      var isValid = true;
      //check password and new password are not same 
      if(this.state.password == this.state.new_password)
      {
        alert('password and new password must not be same');
        isValid = false;
      }
      //further check new_password and confirm_new_password must be same 
      else if(this.state.new_password != this.state.confirm_new_password)
      {
        alert('new password and confirm new password are not same');
        isValid = false;
      }
      return isValid;
    }

    UpdatePassword()
    {
        var self = this;
        var form = new FormData();
        //input : id,password,newpassword(required) 
        form.append("id",Cookies.get("id"));
        form.append("password",this.state.password);
        form.append("newpassword",this.state.new_password);

        axios({
          method: 'post',
          url: 'https://www.theeasylearnacademy.com/shop/ws/change_password.php',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          responseType: 'json',
          data: form
        }).then((response) =>{
            console.log(response.data);
            /*
             [{"error":"input is missing"}] 
             [{"error":"no"},{"success":"no"},{"message":"invalid change password attempt"}]
             [{"error":"no"},{"success":"yes"},{"message":"password changed"}]
            */
            var error = response.data[0]['error'];
            if(error!='no')
            {
              alert(error);
            }
            else 
            {
                alert(response.data[2]['message']);
                if(response.data[1]['success']==='yes')
                {
                  window.location = '/';
                  Cookies.remove("isLoggedIn");
                  Cookies.remove("id");
                }
            }
        })
  }
  render() {
    return (<div>
      <div className="pageWrapper">
        <UserHeader />
        {/* Body Content */}
        <div id="page-content">
          {/* Page Title */}
          <div className="page section-header text-center mb-0">
            <div className="page-title">
              <div className="wrapper"><h1 className="page-width">Change Your Password</h1></div>
            </div>
          </div>
          {/* End Page Title */}
          {/* Breadcrumbs */}
          <div className="bredcrumbWrap bredcrumbWrapPage bredcrumb-style2 text-center">
            <div className="container breadcrumbs">
              <a href="index.html" title="Back to the home page">Home</a><span aria-hidden="true">|</span><span className="title-bold">Change Your Password</span>
            </div>
          </div>
          {/* End Breadcrumbs */}
          <div className="container">
            <div className="row">
              {/* Main Content */}
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 box offset-md-3">
                <div className="mb-4">
                  <form method="post" acceptCharset="UTF-8" className="customer-form" onSubmit={this.submitForm}>
                    <h3>Change your password here</h3>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="form-group">
                          <label htmlFor="CustomerPassword">Current Password <span className="required">*</span></label>
                          <input type="password" name="password" placeholder id="password" autofocus required onChange={this.UpdateValue} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="form-group">
                          <label htmlFor="CustomerNewPassword">New Password  <span className="required">*</span></label>
                          <input type="password" name="new_password" placeholder id="new_password" autofocus required onChange={this.UpdateValue} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="form-group">
                          <label htmlFor="CustomerConfirmPassword">Confirm Password <span className="required">*</span></label>
                          <input type="password" name="confirm_new_password" placeholder id="confirm_new_password" autofocus required onChange={this.UpdateValue} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="text-left col-12 col-sm-12 col-md-12 col-lg-12">
                        <input type="submit" className="btn mb-3" defaultValue="Submit" />
                        <p className="mb-4">
                          <a href="/login">« Back To Login Page</a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* End Main Content */}
            </div>
          </div>
        </div>
        {/* End Body Content */}
        {/* Footer */}
        < UserFooter />
      </div>





    </div>)
  }

}
export default UserChangYourPassword