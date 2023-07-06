import { Link, Outlet } from "react-router-dom"
import UserFooter from "./UserFooter"
import UserHeader from "./UserHeader"
var UserForgotYourPassword= () => {
    return (<div>
   <div className="pageWrapper">
      <UserHeader />
  {/* Body Content */}
  <div id="page-content">
    {/* Page Title */}
    <div className="page section-header text-center mb-0">
      <div className="page-title">
        <div className="wrapper"><h1 className="page-width">Forgot Your Password</h1></div>
      </div>
    </div>
    {/* End Page Title */}
    {/* Breadcrumbs */}
    <div className="bredcrumbWrap bredcrumbWrapPage bredcrumb-style2 text-center">
      <div className="container breadcrumbs">
        <a href="index.html" title="Back to the home page">Home</a><span aria-hidden="true">|</span><span className="title-bold">Forgot Your Password</span>
      </div>
    </div>
    {/* End Breadcrumbs */}
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 box offset-md-3">
          <div className="mb-4">
            <form method="post" action="#" acceptCharset="UTF-8" className="customer-form">	
              <h3>Retrieve your password here</h3>
              <p>Please enter your email address below. You will receive a link to reset your password.</p>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <label htmlFor="CustomerEmail">Email Address <span className="required">*</span></label>
                    <input type="email" name="customer[email]" placeholder id="CustomerEmail" autofocus />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="text-left col-12 col-sm-12 col-md-12 col-lg-12">
                  <input type="submit" className="btn mb-3" defaultValue="Submit" />
                  <p className="mb-4">
                    <a href="/register">« Back To Login Page</a>
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
      <UserFooter />
  {/* End Minicart Drawer */}
</div>




 
    </div>)
}
export default UserForgotYourPassword